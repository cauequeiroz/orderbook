import {HttpService} from './HttpService';
import {Order} from '../model/Order';

export class OrderService {

    constructor() {

        this._http = new HttpService();
    }

    import(currentOrders) {

        return this.getAllOrders()                        
            .then(orders =>
                orders.filter(order =>
                    !currentOrders.some(current => order.equals(current))))
            .catch(error => {
                throw new Error(error);
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
            .get('negociacoes/semana')
            .then(orders => orders.map(order =>                
                new Order(new Date(order.data), order.quantidade, order.valor)))
            .catch(error => {
                throw new Error(error);
            });
    }

    getLastWeekOrders() {

        return this._http
            .get('negociacoes/anterior')
            .then(orders => orders.map(order =>                
                new Order(new Date(order.data), order.quantidade, order.valor)))
            .catch(error => {
                throw new Error(error);
            });
    }

    getOrdersFromTwoWeeksAgo() {

        return this._http
            .get('negociacoes/retrasada')
            .then(orders => orders.map(order =>                
                new Order(new Date(order.data), order.quantidade, order.valor)))
            .catch(error => {
                throw new Error(error);
            });
    }
}