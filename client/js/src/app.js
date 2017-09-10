import {Order} from './model/Order';
import {OrderList} from './model/OrderList';

let orderList = new OrderList();

orderList.add(new Order(new Date(), 2, 25));
orderList.add(new Order(new Date(), 1, 200));
orderList.add(new Order(new Date(), 2, 10));
orderList.add(new Order(new Date(), 5, 7));
orderList.add(new Order(new Date(), 2, 100));

orderList.list.forEach(order => console.log(order.total));
console.log(`[Dev] Total: ${orderList.total}`);