'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, TestModule;

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

            _export('TestModule', TestModule = function () {
                function TestModule() {
                    _classCallCheck(this, TestModule);

                    this.message = 'Start development...';
                }

                _createClass(TestModule, [{
                    key: 'hi',
                    value: function hi() {

                        console.log('[DEV] ' + this.message);
                    }
                }]);

                return TestModule;
            }());

            _export('TestModule', TestModule);
        }
    };
});