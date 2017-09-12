export class MessageView {

    constructor(element) {

        this._element = element;
        this._timer = null;
    }

    update(model) {

        this._element.innerHTML = this._template(model);

        if ( this._timer ) clearTimeout(this._timer);

        this._timer = setTimeout(() =>
            this._element.innerHTML = this._template({text: ''})
        , 3000);
    }

    _template(model) {

        return `
            <div class="alert alert-light text-center" role="alert">
                ${model.text ? model.text : '...'}
            </div>
        `;
    }
}