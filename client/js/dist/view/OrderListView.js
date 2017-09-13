'use strict';

System.register(['./View', '../helper/DateHelper'], function (_export, _context) {
    "use strict";

    var View, DateHelper, _createClass, OrderListView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_View2) {
            View = _View2.View;
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

            _export('OrderListView', OrderListView = function (_View) {
                _inherits(OrderListView, _View);

                function OrderListView() {
                    _classCallCheck(this, OrderListView);

                    return _possibleConstructorReturn(this, (OrderListView.__proto__ || Object.getPrototypeOf(OrderListView)).apply(this, arguments));
                }

                _createClass(OrderListView, [{
                    key: 'template',
                    value: function template(model) {

                        return '\n            <table class="table table-bordered table-striped">\n                <thead>\n                    <tr>\n                        <th>Date</th>\n                        <th>Amount</th>\n                        <th>Price</th>\n                        <th>Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    ' + model.list.map(function (order) {
                            return '\n                        <tr>\n                            <td>' + DateHelper.textFromDate(order.date) + '</td>\n                            <td>' + order.amount + '</td>\n                            <td>' + order.price + '</td>\n                            <td>' + order.total + '</td>\n                        </tr> \n                    ';
                        }).join('') + '                          \n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan="3"></td>\n                        <td>' + model.total + '</td>\n                    </tr>\n                </tfoot>\n            </table>\n        ';
                    }
                }]);

                return OrderListView;
            }(View));

            _export('OrderListView', OrderListView);
        }
    };
});
//# sourceMappingURL=OrderListView.js.map