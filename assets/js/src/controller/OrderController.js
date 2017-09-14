import {Order} from '../model/Order';
import {OrderList} from '../model/OrderList';
import {OrderListView} from '../view/OrderListView.js';
import {OrderService} from '../service/OrderService';
import {Message} from '../model/Message';
import {MessageView} from '../view/MessageView';
import {DateHelper} from '../helper/DateHelper';
import {DataBind} from '../helper/DataBind';

export class OrderController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._controlsDate = $('#order-date');
        this._controlsAmount = $('#order-amount');
        this._controlsPrice = $('#order-price');

        this._orderList = new DataBind(
            new OrderList(),
            new OrderListView($('#orderListView')),
            'add', 'delete');
        
        this._message = new DataBind(
            new Message(),
            new MessageView($('#messageView')),
            'text');
        
        this._service = new OrderService();

        this._init();
    }

    add(event) {
        
        event.preventDefault();

        this._service
            .add(this._createOrder())
            .then(message => {
                this._orderList.add(this._createOrder());
                this._message.text = message;
                this._clearForm();
            })
            .catch(error => this._message.text = error);
    }

    import() {

        this._service
            .import(this._orderList.list)
            .then(orders => {
                orders.forEach(order => this._orderList.add(order))
                this._message.text = 'Orders imported.';
                this._clearForm();
            })
            .catch(error => this._message.text = error);
    }

    delete() {

        this._service
            .delete()
            .then(message => {
                this._orderList.delete();
                this._message.text = message;
                this._clearForm();
            })
            .catch(error => this._message.text = error);        
    }

    _init() {

        this._service
            .load()
            .then(orders => {
                console.log(orders);
                orders.forEach(order => this._orderList.add(order))
            })
            .catch(error => this._message.text = error);
    }

    _createOrder() {

        let date = DateHelper.dateFromText(this._controlsDate.value);
        let amount = parseInt(this._controlsAmount.value);
        let price = parseFloat(this._controlsPrice.value)
        
        return new Order(date, amount, price);
    }

    _clearForm() {

        this._controlsDate.value = '';
        this._controlsAmount.value = 1;
        this._controlsPrice.value = 0;

        this._controlsDate.focus();
    }
}