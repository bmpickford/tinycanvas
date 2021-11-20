'use strict';

import { canvas, context } from '../canvas';
import { GameObject } from './object';
import { mix, ArrowMovementMixin } from '../interaction/index';
import { checkCollision } from '../utils/collision';

/**
 * @class Face
 * @param {Object} options
 */
class Face extends GameObject {
    name = "face";

    constructor(options) {
        super({ ...options, h: options.radius, w: options.radius });
    }

    draw() {
        const { x, y, deltaX, deltaY, radius } = this.options;
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
        if (this.options.x - this.options.deltaX < 0 || cItems.some((c) => checkCollision(c.options, { ...this.options, x: this.options.x - this.options.deltaX }))){ 
            return;
        }
        this.options.x -= this.options.deltaX;
    }
    _moveUp() {
        const cItems = this._getCollisionItems();
        if (this.options.y - this.options.deltaY < 0 || cItems.some((c) => checkCollision(c.options, { ...this.options, y: this.options.y - this.options.deltaY }))){ 
            return;
        }
        this.options.y -= this.options.deltaY;
    }
    _moveRight() {
        const cItems = this._getCollisionItems();
        if (this.options.x + this.options.deltaX >= canvas.width || cItems.some((c) => checkCollision(c.options, { ...this.options, x: this.options.x + this.options.deltaX }))){ 
            return;
        }
        this.options.x += this.options.deltaX;
    }
    _moveDown() {
        const cItems = this._getCollisionItems();
        if (this.options.y + this.options.deltaY >= canvas.width || cItems.some((c) => checkCollision(c.options, { ...this.options, y: this.options.y + this.options.deltaY }))){ 
            return;
        }
        this.options.y += this.options.deltaY;
    }
    _getCollisionItems() {
        return this.game.objects.filter((o) => o.name && o.name === "griditem" && o.options.type === 1);
    }
}
