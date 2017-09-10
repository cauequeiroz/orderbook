import {OrderController} from './controller/OrderController';

let orderController = new OrderController();
let $ = document.querySelector.bind(document);

$('#app__controls').onsubmit = orderController.add.bind(orderController);