'use strict';

import { canvas, context } from '../../lib/canvas';
import Lib from '../../lib/index';

/**
 * @class Circle
 * @augments {import('../../lib/objects/index').GameObject}
 */
export class Circle extends Lib.GameObject {

    /**
     * Game object will be fully initialised here
     */
    init() {
        this.grid = this.game.objects.find((g) => g.name === "grid").grid;
        this.citems = this.grid.filter((ob) => ob.o.type === 1);
        const [x, y] = this.game.currentPuzzle.player;
        const gridW = canvas.width / this.game.currentPuzzle.board.length;
        const gridH = canvas.height / this.game.currentPuzzle.board[0].length;
        const r = 0.75 * (Math.min(gridW, gridH));
        this.o = {
            x: x * gridW,
            y: y * gridH,
            r,
            h: r,
            w: r,
            deltaX: gridW,
            deltaY: gridH,
        }
        this.draw();
    }

    draw() {
        const { x, y, deltaX, deltaY, r } = this.o;
        context.beginPath();
        context.arc(x + (deltaX / 2), y + (deltaY / 2), r / 2, 0, Math.PI * 2);
        context.stroke();
    }
    destroy() {
        const { deltaX, deltaY } = this.o;
        Lib.Animations.add(this, {
            frame: 0,
            frames: 180,
            r: canvas.height,
            x: canvas.width / 2 - (deltaX / 2),
            y: canvas.height / 2 - (deltaY / 2),
        }, 'exp');
    }
    _moveLeft() {
        const item = this.citems.find((c) => Lib.checkCollision(c.o, { ...this.o, x: this.o.x - this.o.deltaX }));
        Lib.Animations.add( this, { x: this.o.x - this.o.deltaX, frames: 20 }, 'quint', () => { if (item) this._collide(item) });
    }
    _moveUp() {
        const item = this.citems.find((c) => Lib.checkCollision(c.o, { ...this.o, y: this.o.y - this.o.deltaY }));
        Lib.Animations.add(this, { y: this.o.y - this.o.deltaY, frames: 20 }, 'quint', () => { if (item) this._collide(item) });
    }
    _moveRight() {
        const item = this.citems.find((c) => Lib.checkCollision(c.o, { ...this.o, x: this.o.x + this.o.deltaX }));
        Lib.Animations.add(this, { x: this.o.x + this.o.deltaX, frames: 20 }, 'quint', () => { if (item) this._collide(item) });
    }
    _moveDown() {
        const item = this.citems.find((c) => Lib.checkCollision(c.o, { ...this.o, y: this.o.y + this.o.deltaY }));
        Lib.Animations.add(this, { y: this.o.y + this.o.deltaY, frames: 20 }, 'quint', () => { if (item) this._collide(item) });
    }
    _collide(item) {
        if (item) item.color = '#00ff00';
    }
    _onEnterDown() {
        this._clickFeedback();
        const item = this.grid.find((c) => Lib.checkCollision(c.o, this.o));
        item.color = '#ff00ff';
    }
    _clickFeedback() {
        this.o.r = this.o.r + 5;
        setTimeout(() => this.o.r = this.o.r - 5, 100);
    }
}
