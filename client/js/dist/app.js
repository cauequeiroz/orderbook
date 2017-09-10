'use strict';

System.register(['./TestModule'], function (_export, _context) {
  "use strict";

  var TestModule;
  return {
    setters: [function (_TestModule) {
      TestModule = _TestModule.TestModule;
    }],
    execute: function () {

      new TestModule().hi();
    }
  };
});