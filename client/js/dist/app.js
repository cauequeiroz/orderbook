'use strict';

System.register(['./model/Order', './model/OrderList'], function (_export, _context) {
  "use strict";

  var Order, OrderList, orderList;
  return {
    setters: [function (_modelOrder) {
      Order = _modelOrder.Order;
    }, function (_modelOrderList) {
      OrderList = _modelOrderList.OrderList;
    }],
    execute: function () {
      orderList = new OrderList();


      orderList.add(new Order(new Date(), 2, 25));
      orderList.add(new Order(new Date(), 1, 200));
      orderList.add(new Order(new Date(), 2, 10));
      orderList.add(new Order(new Date(), 5, 7));
      orderList.add(new Order(new Date(), 2, 100));

      orderList.list.forEach(function (order) {
        return console.log(order.total);
      });
      console.log('[Dev] Total: ' + orderList.total);
    }
  };
});