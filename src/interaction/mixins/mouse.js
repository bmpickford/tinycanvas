/**
 * Adds click listener to object. Class being mixed in with must implement onClick
 * @param {*} superclass 
 */
export const OnClickMixin = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
        this.boundMouseClick = this._onMouseClick.bind(this);
        document.addEventListener('click', this.boundMouseClick);
    }
    destroy() {
        document.removeEventListener('click', this.boundMouseClick);
    }
    _onMouseClick(e) {
        const { w, h, x, y } = this.o;
        if (w && h) {
            if (
                (e.clientX > x && e.clientX < x + w) &&
                (e.clientY > y && e.clientY < y + h)
            ) {
                this._onClick();
            }
        }
    }
}