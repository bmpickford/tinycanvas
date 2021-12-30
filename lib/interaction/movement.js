/** @module CLH/interaction */

/**
 * @typedef Interaction
 * @property {function} init - init function
 * @property {function} destroy - destroy function
 */

/**
 * @public
 * @typedef {Interaction} ArrowKeys
 */
export const ArrowKeys = {
    init(self) {
        this.ctx = self;
        this._boundOnKeyDown = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this._boundOnKeyDown);
    },
    destroy() {
        document.removeEventListener('keydown', this._boundOnKeyDown);
    },
    _onKeyDown(e) {
        const dx = this.ctx.deltaX || this.ctx.delta;
        const dy = this.ctx.deltaY || this.ctx.delta;
        switch (e.key) {
            case "ArrowLeft":
                if (this.ctx.x - dx < 0) return;
                this.ctx.x -= dx;
                break;
            case "ArrowRight":
                if (this.ctx.x + dx >= this.ctx.game.canvas.width) return;
                this.ctx.x += dx;
                break;
            case "ArrowUp":
                if (this.ctx.y - dy < 0) return; 
                this.ctx.y -= dy;
                break;
            case "ArrowDown":
                if (this.ctx.y + dy >= this.ctx.game.canvas.height) return;
                this.ctx.y += dy;
                break;
        }
    }
}

/**
 * @public
 * @typedef {Interaction} WASD
 */
export const WASD = {
    init(self) {
        this.ctx = self;
        this._boundOnKeyDown = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this._boundOnKeyDown);
    },
    destroy() {
        document.removeEventListener('keydown', this._boundOnKeyDown);
    },
    _onKeyDown(e) {
        const dx = this.ctx.deltaX || this.ctx.delta;
        const dy = this.ctx.deltaY || this.ctx.delta;
        switch (e.key) {
            case "w":
                if (this.ctx.x - dx < 0) return;
                this.ctx.x -= dx;
                break;
            case "a":
                if (this.ctx.x + dx >= this.ctx.game.canvas.width) return;
                this.ctx.x += dx;
                break;
            case "s":
                if (this.ctx.y - dy < 0) return; 
                this.ctx.y -= dy;
                break;
            case "d":
                if (this.ctx.y + dy >= this.ctx.game.canvas.height) return;
                this.ctx.y += dy;
                break;
        }
    }
}
