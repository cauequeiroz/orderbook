import {Order} from '../model/Order';

export class OrderDao {

    constructor(connection) {
        
        this._connection = connection;
        this._store = 'orders';
    }

    add(order) {

        return new Promise((resolve, reject) => {

            let addRequest = this._connection
                .transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .add(order);
            
            addRequest.onsuccess = e =>
                resolve('Order added.');
            
            addRequest.onerror = e =>
                reject('Order cannot be added.');
        });
    }

    delete() {

        return new Promise((resolve, reject) => {

            let deleteRequest = this._connection
                .transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .clear();
            
            deleteRequest.onsuccess = e =>
                resolve('Orders removed.');
            
            deleteRequest.onerror = e =>
                reject('Orders cannot be removed.');
        });
    }

    load() {

        return new Promise((resolve, reject) => {

            let loadRequest = this._connection
                .transaction(this._store, 'readwrite')
                .objectStore(this._store)
                .openCursor();
            
            let orders = [];

            loadRequest.onsuccess = e => {

                let currentLine = e.target.result;

                if ( currentLine ) {
                    let value = currentLine.value;
                    
                    orders.push(new Order(value._date, value._amount, value._price));
                    currentLine.continue();
                } else {                    
                    resolve(orders);
                }
            }                
            
            loadRequest.onerror = e =>
                reject('Orders cannot be loaded.');
        });
    }
}