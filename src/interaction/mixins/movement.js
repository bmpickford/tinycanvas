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
        if (this.x - this.delta < 0){ 
            return;
        }
        this.x -= this.delta;
    },
    moveUp() {
        if (this.y - this.delta < 0){ 
            return;
        }
        this.y -= this.delta;
    },
    moveRight() {
        if (this.x + this.delta >= canvas.width){ 
            return;
        }
        this.x += this.delta;
    },
    moveDown() {
        if (this.y + this.delta >= canvas.width){ 
            return;
        }
        this.y += this.delta;
    },
}