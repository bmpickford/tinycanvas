'use strict';

import { canvas, context } from '../canvas';
import { GameObject } from './object';
import { mix, ArrowMovementMixin, EnterKeyMixin } from '../interaction/index';
import { checkCollision } from '../utils/collision';
import { animate } from '../animation/index';

/**
 * @class Circle
 * @param {Object} o
 */
class Circle extends GameObject {
    name = "circle";

    constructor(game, o) {
        super(game, { ...o, h: o.r, w: o.r });
    }
    /**
     * Game object will be fully initialised here
     */
    init() {
        this.grid = this.game.objects.filter((ob) => ob.name && ob.name === "griditem");
        this.citems = this.grid.filter((ob) => ob.o.type === 1);
    }

    draw() {
        const { x, y, deltaX, deltaY, r } = this.o;
        context.beginPath();
        context.arc(x + (deltaX / 2), y + (deltaY / 2), r / 2, 0, Math.PI * 2);
        context.stroke();
    }
    destroy() {
        const { deltaX, deltaY } = this.o;
        animate(this, {
            frame: 0,
            frames: 180,
            r: canvas.height,
            x: canvas.width / 2 - (deltaX / 2),
            y: canvas.height / 2 - (deltaY / 2),
        }, 'exp');
    }
}

/**
 * Export with ArrowKeyListener
 */
export class MoveableCircle extends mix(Circle).with(ArrowMovementMixin, EnterKeyMixin) {
    _moveLeft() {
        const item = this.citems.find((c) => checkCollision(c.o, { ...this.o, x: this.o.x - this.o.deltaX }));
        if (item) this._collide(item);
        this.o.x -= this.o.deltaX;
    }
    _moveUp() {
        const item = this.citems.find((c) => checkCollision(c.o, { ...this.o, y: this.o.y - this.o.deltaY }));
        if (item) this._collide(item);
        this.o.y -= this.o.deltaY;
    }
    _moveRight() {
        const item = this.citems.find((c) => checkCollision(c.o, { ...this.o, x: this.o.x + this.o.deltaX }));
        if (item) this._collide(item);
        this.o.x += this.o.deltaX;
    }
    _moveDown() {
        const item = this.citems.find((c) => checkCollision(c.o, { ...this.o, y: this.o.y + this.o.deltaY }));
        if (item) this._collide(item);
        this.o.y += this.o.deltaY;
    }
    _collide(item) {
        if (item) item.color = '#00ff00';
    }
    _onEnterDown() {
        this._clickFeedback();
        const item = this.grid.find((c) => checkCollision(c.o, this.o));
        item.color = '#ff00ff';
    }
    _clickFeedback() {
        this.o.r = this.o.r + 5;
        setTimeout(() => this.o.r = this.o.r - 5, 100);
    }
}
