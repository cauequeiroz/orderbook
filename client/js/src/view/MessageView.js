import {View} from './View';

export class MessageView extends View {

    constructor(element) {

        super(element)
        this._timer = null;
    }

    update(model) {

        this._element.innerHTML = this.template(model);

        if ( this._timer ) clearTimeout(this._timer);

        this._timer = setTimeout(() =>
            this._element.innerHTML = this.template({text: ''})
        , 3000);
    }

    template(model) {

        return `
            <div class="alert alert-light text-center" role="alert">
                ${model.text ? model.text : '...'}
            </div>
        `;
    }
}