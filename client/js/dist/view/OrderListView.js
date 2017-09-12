'use strict';

System.register(['../helper/DateHelper'], function (_export, _context) {
    "use strict";

    var DateHelper, _createClass, OrderListView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_helperDateHelper) {
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

            _export('OrderListView', OrderListView = function () {
                function OrderListView(element) {
                    _classCallCheck(this, OrderListView);

                    this._element = element;
                }

                _createClass(OrderListView, [{
                    key: 'update',
                    value: function update(model) {

                        this._element.innerHTML = this._template(model);
                    }
                }, {
                    key: '_template',
                    value: function _template(model) {

                        return '\n            <table class="table table-bordered table-striped">\n                <thead>\n                    <tr>\n                        <th>Date</th>\n                        <th>Amount</th>\n                        <th>Price</th>\n                        <th>Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    ' + model.list.map(function (order) {
                            return '\n                        <tr>\n                            <td>' + DateHelper.textFromDate(order.date) + '</td>\n                            <td>' + order.amount + '</td>\n                            <td>' + order.price + '</td>\n                            <td>' + order.total + '</td>\n                        </tr> \n                    ';
                        }).join('') + '                          \n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan="3"></td>\n                        <td>' + model.total + '</td>\n                    </tr>\n                </tfoot>\n            </table>\n        ';
                    }
                }]);

                return OrderListView;
            }());

            _export('OrderListView', OrderListView);
        }
    };
});
//# sourceMappingURL=OrderListView.js.map