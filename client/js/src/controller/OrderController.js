import {Order} from '../model/Order';
import {OrderList} from '../model/OrderList';
import {OrderListView} from '../view/OrderListView.js';
import {Message} from '../model/Message';
import {MessageView} from '../view/MessageView';
import {DateHelper} from '../helper/DateHelper';

export class OrderController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._controlsDate = $('#order-date');
        this._controlsAmount = $('#order-amount');
        this._controlsPrice = $('#order-price');

        this._orderList = new OrderList();
        this._orderListView = new OrderListView($('#orderListView'));
        this._orderListView.update(this._orderList);

        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);
    }

    add(event) {
        
        event.preventDefault();
        let order = this._createOrder();

        this._orderList.add(order);
        this._orderListView.update(this._orderList);
        this._message.text = 'Order added.';
        this._messageView.update(this._message);
        this._clearForm();
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