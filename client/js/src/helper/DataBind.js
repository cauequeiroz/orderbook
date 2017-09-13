import {ProxyFactory} from '../service/ProxyFactory';

export class DataBind {

    constructor(model, view, ...watch) {

        let proxy = ProxyFactory.create(model, watch, model => view.update(model));
        
        view.update(model);
        return proxy;
    }
}