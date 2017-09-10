export class Order {

    constructor(date, amount, price) {

        this._date = new Date(date.getTime());
        this._amount = amount;
        this._price = price;
    }

    get date() {

        return new Date(this._date.getTime());
    }

    get amount() {

        return this._amount;
    }

    get price() {

        return this._price;
    }

    get total() {
        
        return this._amount * this._price;
    }

}