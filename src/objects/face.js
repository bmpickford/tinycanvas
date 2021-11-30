'use strict';

import { canvas, context } from '../canvas';
import { GameObject } from './object';
import { mix, ArrowMovementMixin } from '../interaction/index';
import { checkCollision } from '../utils/collision';

/**
 * @class Face
 * @param {Object} o
 */
class Face extends GameObject {
    name = "face";

    constructor(o) {
        super({ ...o, h: o.radius, w: o.radius });
    }

    draw() {
        const { x, y, deltaX, deltaY, radius } = this.o;
        context.beginPath();
        context.arc(x + (deltaX / 2), y + (deltaY / 2), radius / 2, 0, Math.PI * 2);
        context.stroke();
    }
}

/**
 * Export with ArrowKeyListener
 */
export class MoveableFace extends mix(Face).with(ArrowMovementMixin) {
    _moveLeft() {
        const cItems = this._getCollisionItems();
        if (this.o.x - this.o.deltaX < 0 || cItems.some((c) => checkCollision(c.o, { ...this.o, x: this.o.x - this.o.deltaX }))){ 
            return;
        }
        this.o.x -= this.o.deltaX;
    }
    _moveUp() {
        const cItems = this._getCollisionItems();
        if (this.o.y - this.o.deltaY < 0 || cItems.some((c) => checkCollision(c.o, { ...this.o, y: this.o.y - this.o.deltaY }))){ 
            return;
        }
        this.o.y -= this.o.deltaY;
    }
    _moveRight() {
        const cItems = this._getCollisionItems();
        if (this.o.x + this.o.deltaX >= canvas.width || cItems.some((c) => checkCollision(c.o, { ...this.o, x: this.o.x + this.o.deltaX }))){ 
            return;
        }
        this.o.x += this.o.deltaX;
    }
    _moveDown() {
        const cItems = this._getCollisionItems();
        if (this.o.y + this.o.deltaY >= canvas.width || cItems.some((c) => checkCollision(c.o, { ...this.o, y: this.o.y + this.o.deltaY }))){ 
            return;
        }
        this.o.y += this.o.deltaY;
    }
    _getCollisionItems() {
        return this.game.objects.filter((ob) => ob.name && ob.name === "griditem" && ob.o.type === 1);
    }
}
