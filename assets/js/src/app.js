import {orderController} from './controller/OrderController';

let controller = orderController();
let $ = document.querySelector.bind(document);

$('#app__controls').onsubmit = controller.add.bind(controller);
$('#control-delete').onclick = controller.delete.bind(controller);
$('#control-import').onclick = controller.import.bind(controller);