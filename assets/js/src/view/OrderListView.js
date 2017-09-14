import {View} from './View';
import {DateHelper} from '../helper/DateHelper';
import {orderController} from '../controller/OrderController';

export class OrderListView extends View {

    constructor(element) {

        super(element);

        element.addEventListener('click', e => {
            if ( e.target.nodeName == 'TH' ) {
                orderController().arrange(e.target.textContent.toLowerCase());
            }
        });
    }

    template(model) {

        return `
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list.map(order => `
                        <tr>
                            <td>${DateHelper.textFromDate(order.date)}</td>
                            <td>${order.amount}</td>
                            <td>${order.price}</td>
                            <td>${order.total}</td>
                        </tr> 
                    `).join('')}                          
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"></td>
                        <td>${model.total}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}