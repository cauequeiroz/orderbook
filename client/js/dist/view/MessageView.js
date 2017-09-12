'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, MessageView;

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

            _export('MessageView', MessageView = function () {
                function MessageView(element) {
                    _classCallCheck(this, MessageView);

                    this._element = element;
                    this._timer = null;
                }

                _createClass(MessageView, [{
                    key: 'update',
                    value: function update(model) {
                        var _this = this;

                        this._element.innerHTML = this._template(model);

                        if (this._timer) clearTimeout(this._timer);

                        this._timer = setTimeout(function () {
                            return _this._element.innerHTML = _this._template({ text: '' });
                        }, 3000);
                    }
                }, {
                    key: '_template',
                    value: function _template(model) {

                        return '\n            <div class="alert alert-light text-center" role="alert">\n                ' + (model.text ? model.text : '...') + '\n            </div>\n        ';
                    }
                }]);

                return MessageView;
            }());

            _export('MessageView', MessageView);
        }
    };
});
//# sourceMappingURL=MessageView.js.map