const dbName = 'orderbook';
const version = 1;
const stores = ['orders'];

let connection = null;
let close = null;

export class ConnectionFactory {

    constructor() {

        throw new Error('This class cannot be instantiated.');
    }

    static getConnection() {

        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onsuccess = e => {

                if ( !connection ) {
                    connection = e.target.result;
                    close = connection.close.bind(conenction);
                    connection.close = function() {
                        throw new Error('Just ConnectionFactory can close a connection.');
                    }
                }

                resolve(connection);
            }

            openRequest.onerror = e =>
                reject(e.target.error.name);

            openRequest.onupgradeneeded = e =>
                ConnectionFactory._createStores(e.target.result);

        })
    }
    
    static closeConnection() {

        if ( connection ) {
            close();
            connection = null;
        }
    }

    static _createStores(connection) {

        stores.forEach(store => {

            if ( connection.objectStoreNames.contains(store) )
                connection.deleteObjectStore(store);
            
            connection.createObjectStore(store);
        });
    }
}