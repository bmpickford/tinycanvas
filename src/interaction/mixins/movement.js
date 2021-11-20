import { canvas } from "../../canvas";

export const movementMixin = {
    init() {
        this.boundOnKeyDown = this.onKeyDown.bind(this);
        document.addEventListener('keydown', this.boundOnKeyDown);
    },
    destroy() {
        document.removeEventListener('keydown', this.boundOnKeyDown);
    },
    moveLeft() {
        if (this.options.x - this.options.delta < 0){ 
            return;
        }
        this.options.x -= this.options.delta;
    },
    moveUp() {
        if (this.options.y - this.options.delta < 0){ 
            return;
        }
        this.options.y -= this.options.delta;
    },
    moveRight() {
        if (this.options.x + this.options.delta >= canvas.width){ 
            return;
        }
        this.options.x += this.options.delta;
    },
    moveDown() {
        if (this.options.y + this.options.delta >= canvas.width){ 
            return;
        }
        this.options.y += this.options.delta;
    },
}