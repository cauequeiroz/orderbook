export class OrderList {

    constructor() {

        this._list = [];
    }

    get list() {

        return [].concat(this._list);
    }

    get total() {

        return this._list.reduce((acc, value) => acc += value.total, 0);
    }

    add(order) {

        this._list.push(order);
    }

    delete() {

        this._list = [];
    }
}