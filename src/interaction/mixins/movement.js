/**
 * Adds movement listener using WASD keys. Class being mixed in with must implement moveLeft, moveRight, moveUp and moveDown
 * @param {*} superclass 
 */
export const WASDMovementMixin = (superclass) => class extends MovementMixinBase(superclass) {
    _onKeyDown(e) {
        switch (e.key) {
            case "a":
                this._moveLeft();
                break;
            case "d":
                this._moveRight();
                break;
            case "w":
                this._moveUp();
                break;
            case "s":
                this._moveDown();
                break;
        }
    }
}

/**
 * Adds movement listener using Arrow keys. Class being mixed in with must implement moveLeft, moveRight, moveUp and moveDown
 * @param {*} superclass 
 */
export const ArrowMovementMixin = (superclass) => class extends MovementMixinBase(superclass) {
    _onKeyDown(e) {
        switch (e.key) {
            case "ArrowLeft":
                this._moveLeft();
                break;
            case "ArrowRight":
                this._moveRight();
                break;
            case "ArrowUp":
                this._moveUp();
                break;
            case "ArrowDown":
                this._moveDown();
                break;
        }
    }
}

const MovementMixinBase = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
        this.boundOnKeyDown = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this.boundOnKeyDown);
    }
    destroy() {
        document.removeEventListener('keydown', this.boundOnKeyDown);
    }
}
