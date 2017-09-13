export class ProxyFactory {

    constructor() {

        throw new Error('This class cannot be instantiated.');
    }

    static create(object, watch, callback) {

        return new Proxy(object, {
            
            get(target, prop, receiver) {

                if ( watch.includes(prop) && typeof(target[prop]) == typeof(Function) ) {
                    return function() {
                        let methodReturn = Reflect.apply(target[prop], target, arguments);
                        callback(target);
                        return methodReturn;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                
                let methodReturn = Reflect.set(target, prop, value, receiver);
                
                if ( watch.includes(prop) ) callback(target);
                return methodReturn;
            }
        });
    }
}