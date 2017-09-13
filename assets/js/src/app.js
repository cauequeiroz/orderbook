import {OrderController} from './controller/OrderController';

let orderController = new OrderController();
let $ = document.querySelector.bind(document);

$('#app__controls').onsubmit = orderController.add.bind(orderController);
$('#control-delete').onclick = orderController.delete.bind(orderController);
$('#control-import').onclick = orderController.import.bind(orderController);