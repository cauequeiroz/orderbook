'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _typeof, _createClass, ProxyFactory;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

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

            _export('ProxyFactory', ProxyFactory = function () {
                function ProxyFactory() {
                    _classCallCheck(this, ProxyFactory);

                    throw new Error('This class cannot be instantiated.');
                }

                _createClass(ProxyFactory, null, [{
                    key: 'create',
                    value: function create(object, watch, callback) {

                        return new Proxy(object, {
                            get: function get(target, prop, receiver) {

                                if (watch.includes(prop) && _typeof(target[prop]) == (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
                                    return function () {
                                        var methodReturn = Reflect.apply(target[prop], target, arguments);
                                        callback(target);
                                        return methodReturn;
                                    };
                                }

                                return Reflect.get(target, prop, receiver);
                            },
                            set: function set(target, prop, value, receiver) {

                                var methodReturn = Reflect.set(target, prop, value, receiver);

                                if (watch.includes(prop)) callback(target);
                                return methodReturn;
                            }
                        });
                    }
                }]);

                return ProxyFactory;
            }());

            _export('ProxyFactory', ProxyFactory);
        }
    };
});
//# sourceMappingURL=ProxyFactory.js.map