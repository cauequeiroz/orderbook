'use strict';

System.register(['./model/Order'], function (_export, _context) {
  "use strict";

  var Order, order;
  return {
    setters: [function (_modelOrder) {
      Order = _modelOrder.Order;
    }],
    execute: function () {
      order = new Order(new Date(), 2, 25);
    }
  };
});