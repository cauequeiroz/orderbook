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
        })
    }
}