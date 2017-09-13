'use strict';

System.register(['../model/Order', '../model/OrderList', '../view/OrderListView.js', '../model/Message', '../view/MessageView', '../helper/DateHelper', '../helper/DataBind'], function (_export, _context) {
    "use strict";

    var Order, OrderList, OrderListView, Message, MessageView, DateHelper, DataBind, _createClass, OrderController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelOrder) {
            Order = _modelOrder.Order;
        }, function (_modelOrderList) {
            OrderList = _modelOrderList.OrderList;
        }, function (_viewOrderListViewJs) {
            OrderListView = _viewOrderListViewJs.OrderListView;
        }, function (_modelMessage) {
            Message = _modelMessage.Message;
        }, function (_viewMessageView) {
            MessageView = _viewMessageView.MessageView;
        }, function (_helperDateHelper) {
            DateHelper = _helperDateHelper.DateHelper;
        }, function (_helperDataBind) {
            DataBind = _helperDataBind.DataBind;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('OrderController', OrderController = function () {
                function OrderController() {
                    _classCallCheck(this, OrderController);

                    var $ = document.querySelector.bind(document);

                    this._controlsDate = $('#order-date');
                    this._controlsAmount = $('#order-amount');
                    this._controlsPrice = $('#order-price');

                    this._orderList = new DataBind(new OrderList(), new OrderListView($('#orderListView')), 'add', 'delete');

                    this._message = new DataBind(new Message(), new MessageView($('#messageView')), 'text');
                }

                _createClass(OrderController, [{
                    key: 'add',
                    value: function add(event) {

                        event.preventDefault();
                        var order = this._createOrder();

                        this._orderList.add(order);
                        this._message.text = 'Order added.';
                        this._clearForm();
                    }
                }, {
                    key: 'delete',
                    value: function _delete() {

                        this._orderList.delete();
                        this._message.text = 'Orders deleted.';
                        this._clearForm();
                    }
                }, {
                    key: '_createOrder',
                    value: function _createOrder() {

                        var date = DateHelper.dateFromText(this._controlsDate.value);
                        var amount = parseInt(this._controlsAmount.value);
                        var price = parseFloat(this._controlsPrice.value);

                        return new Order(date, amount, price);
                    }
                }, {
                    key: '_clearForm',
                    value: function _clearForm() {

                        this._controlsDate.value = '';
                        this._controlsAmount.value = 1;
                        this._controlsPrice.value = 0;

                        this._controlsDate.focus();
                    }
                }]);

                return OrderController;
            }());

            _export('OrderController', OrderController);
        }
    };
});
//# sourceMappingURL=OrderController.js.map