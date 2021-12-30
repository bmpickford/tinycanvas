/** @module CLH/interaction */

/**
 * @typedef Interaction
 * @property {function} init - init function
 * @property {function} destroy - destroy function
 */
class Interaction {
    init(self) {
        this.ctx = self;
        this._boundOnKeyDown = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this._boundOnKeyDown);
    }
    destroy() {
        document.removeEventListener('keydown', this._boundOnKeyDown);
    }
    _isOutOfBounds(dx, dy) {
        if (this.ctx.x - dx < 0 || this.ctx.x + dx >= this.ctx.game.canvas.width ||
            this.ctx.y - dy < 0 || this.ctx.y + dy >= this.ctx.game.canvas.height) return true;
        return false;
    }
    /**
     * @function
     * @param {*} e - Event
     * @param {string} l - Left
     * @param {string} u - Up
     * @param {string} r - Right
     * @param {string} d - Down
     * @returns 
     */
    _onKeyDown(e, l, u, r, d) {
        const dx = this.ctx.deltaX || this.ctx.delta;
        const dy = this.ctx.deltaY || this.ctx.delta;
        if (this._isOutOfBounds(dx, dy)) return;
        if(e.key === l) this.ctx.x -= dx;
        if(e.key === r) this.ctx.x += dx;
        if(e.key === u) this.ctx.y -= dy;
        if(e.key === d) this.ctx.y += dy;
    }
}

class AKImpl extends Interaction {
    _onKeyDown(e) {
        super._onKeyDown(e, "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown");
    }
}

class WASDImpl extends Interaction {
    _onKeyDown(e) {
        super._onKeyDown(e, "a", "w", "d", "s");
    }
}

export const ArrowKeys = new AKImpl();
export const WASD = new WASDImpl();
