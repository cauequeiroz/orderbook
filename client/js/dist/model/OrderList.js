"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, OrderList;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            _export("OrderList", OrderList = function () {
                function OrderList() {
                    _classCallCheck(this, OrderList);

                    this._list = [];
                }

                _createClass(OrderList, [{
                    key: "add",
                    value: function add(order) {

                        this._list.push(order);
                    }
                }, {
                    key: "list",
                    get: function get() {

                        return [].concat(this._list);
                    }
                }, {
                    key: "total",
                    get: function get() {

                        return this._list.reduce(function (acc, value) {
                            return acc += value.total;
                        }, 0);
                    }
                }]);

                return OrderList;
            }());

            _export("OrderList", OrderList);
        }
    };
});