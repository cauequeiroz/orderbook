export class View {

    constructor(element) {
        
        this._element = element;
    }

    update(model) {

        this._element.innerHTML = this.template(model);
    }

    template(model) {

        throw new Error('You need to create a "template" method on this class.');
    }
}