'use strict';

System.register(['../model/Order', '../model/OrderList', '../helper/DateHelper'], function (_export, _context) {
    "use strict";

    var Order, OrderList, DateHelper, _createClass, OrderController;

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
        }, function (_helperDateHelper) {
            DateHelper = _helperDateHelper.DateHelper;
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

                    this._orderList = new OrderList();
                }

                _createClass(OrderController, [{
                    key: 'add',
                    value: function add(event) {

                        event.preventDefault();
                        var order = this._createOrder();

                        this._orderList.add(order);
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