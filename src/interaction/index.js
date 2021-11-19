import { ArrowMoveMixin } from "./ArrowMoveMixin";
import { WASDMoveMixin } from "./WASDMoveMixin";
import { canvas } from "../canvas";

export const withArrowMovement = (obj) => {
    const _obj = withMixin(ArrowMoveMixin, obj);
    _obj.init();
    return _obj;
};

export const withWASDMovement = (obj) => {
    const _obj = withMixin(WASDMoveMixin, obj);
    _obj.init();
    return _obj;
};

const withMixin = (mixin, obj) => {
    const _o = obj.clone();
    Object.assign(_o.__proto__ || {}, mixin);
    Object.assign(_o.__proto__, movementMixin);

    return _o;
}

const movementMixin = {
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
        if (this.x + (this.size * 2) + this.delta > canvas.width){ 
            return;
        }
        this.x += this.delta;
    },
    moveDown() {
        if (this.y + (this.size * 2) + this.delta > canvas.width){ 
            return;
        }
        this.y += this.delta;
    },
}