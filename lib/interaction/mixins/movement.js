import { canvas } from '../../canvas';

/**
 * Adds movement listener using WASD keys. Class being mixed in with must implement moveLeft, moveRight, moveUp and moveDown
 * @param {GameObject} superclass 
 */
export const WASDMovementMixin = (superclass) => class extends MovementMixinBase(superclass) {
    _onKeyDown(e) {
        switch (e.key) {
            case "a":
                if (this.o.x - this.o.deltaX < 0) return;
                this._moveLeft();
                break;
            case "d":
                if (this.o.x + this.o.deltaX >= canvas.width) return; 
                this._moveRight();
                break;
            case "w":
                if (this.o.y - this.o.deltaY < 0) return; 
                this._moveUp();
                break;
            case "s":
                if (this.o.y + this.o.deltaY >= canvas.height) return;
                this._moveDown();
                break;
        }
    }
}

/**
 * Adds movement listener using Arrow keys. Class being mixed in with must implement moveLeft, moveRight, moveUp and moveDown
 * @param {GameObject} superclass 
 */
export const ArrowMovementMixin = (superclass) => class extends MovementMixinBase(superclass) {
    _onKeyDown(e) {
        switch (e.key) {
            case "ArrowLeft":
                if (this.o.x - this.o.deltaX < 0) return;
                this._moveLeft();
                break;
            case "ArrowRight":
                if (this.o.x + this.o.deltaX >= canvas.width) return; 
                this._moveRight();
                break;
            case "ArrowUp":
                if (this.o.y - this.o.deltaY < 0) return; 
                this._moveUp();
                break;
            case "ArrowDown":
                if (this.o.y + this.o.deltaY >= canvas.height) return;
                this._moveDown();
                break;
        }
    }
}

const MovementMixinBase = (superclass) => class extends superclass {
    constructor(...args) {
        super(...args);
        this._boundOnKeyDown = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this._boundOnKeyDown);
    }
    destroy() {
        if (super.destroy) super.destroy();
        document.removeEventListener('keydown', this._boundOnKeyDown);
    }
}
