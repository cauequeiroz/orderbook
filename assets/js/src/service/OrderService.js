import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {OrderDao} from '../dao/OrderDao';
import {Order} from '../model/Order';

export class OrderService {

    constructor() {

        this._http = new HttpService();
    }

    add(order) {

        return ConnectionFactory
            .getConnection()
            .then(connection => new OrderDao(connection))
            .then(dao => dao.add(order))
            .then(() => 'Order added.')
            .catch(error => {
                console.log(error);
                throw new Error('Order cannot be added.');
            });
    }

    delete() {

        return ConnectionFactory
            .getConnection()
            .then(connection => new OrderDao(connection))
            .then(dao => dao.delete())
            .then(() => 'Orders deleted.')
            .catch(error => {
                throw new Error('Order cannot be deleted.');
            });
    }

    import(currentOrders) {

        return this.getAllOrders()                        
            .then(orders =>
                orders.filter(order =>
                    !currentOrders.some(current => order.equals(current))))
            .catch(error => {
                throw new Error('Orders cannot be imported.');
            });
    }

    getAllOrders() {

        return Promise.all([
            this.getWeekOrders(),
            this.getLastWeekOrders(),
            this.getOrdersFromTwoWeeksAgo()
        ])
        .then(response =>
            response.reduce((acc, current) => acc.concat(current), []))
        .catch(error => {
            throw new Error(error);
        });
    }

    getWeekOrders() {

        return this._http
            .get('/orders/week')
            .then(orders => orders.map(order =>                
                new Order(new Date(order.date), order.amount, order.price)))
            .catch(error => {
                throw new Error(error);
            });
    }

    getLastWeekOrders() {

        return this._http
            .get('/orders/last-week')
            .then(orders => orders.map(order =>                
                new Order(new Date(order.date), order.amount, order.price)))
            .catch(error => {
                throw new Error(error);
            });
    }

    getOrdersFromTwoWeeksAgo() {

        return this._http
            .get('/orders/two-weeks-ago')
            .then(orders => orders.map(order =>                
                new Order(new Date(order.date), order.amount, order.price)))
            .catch(error => {
                throw new Error(error);
            });
    }
}