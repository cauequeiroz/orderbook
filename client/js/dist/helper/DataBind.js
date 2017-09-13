'use strict';

System.register(['../service/ProxyFactory'], function (_export, _context) {
    "use strict";

    var ProxyFactory, DataBind;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_serviceProxyFactory) {
            ProxyFactory = _serviceProxyFactory.ProxyFactory;
        }],
        execute: function () {
            _export('DataBind', DataBind = function DataBind(model, view) {
                _classCallCheck(this, DataBind);

                for (var _len = arguments.length, watch = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    watch[_key - 2] = arguments[_key];
                }

                var proxy = ProxyFactory.create(model, watch, function (model) {
                    return view.update(model);
                });

                view.update(model);
                return proxy;
            });

            _export('DataBind', DataBind);
        }
    };
});
//# sourceMappingURL=DataBind.js.map