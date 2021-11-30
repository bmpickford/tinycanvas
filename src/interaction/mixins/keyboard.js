/**
 * Adds listener to "Enter" key
 * @param {*} superclass 
 */
 export const EnterKeyMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
        this._boundOnSubmit = this._onSubmit.bind(this);
        document.addEventListener('keydown', this._boundOnSubmit);
    }
    destroy() {
        super.destroy();
        document.removeEventListener('keydown', this._boundOnSubmit);
    }
    _onSubmit(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            this._onEnterDown();
        }
    }
}