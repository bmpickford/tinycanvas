/** @module @tinycanvas/interactions */

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
        if (this.ctx.x + dx < 0 || this.ctx.x + dx >= this.ctx.game.canvas.width ||
            this.ctx.y + dy < 0 || this.ctx.y + dy >= this.ctx.game.canvas.height) return true;
        return false;
    }
    /**
     * @function
     * @param {*} e - Event
     * @param {string} l - Left
     * @param {string} u - Up
     * @param {string} r - Right
     * @param {string} d - Down
     * @returns {void}
     */
    _onKeyDown(e, l, u, r, d) {
        const dx = this.ctx.deltaX || this.ctx.delta || this.ctx.w || 0;
        const dy = this.ctx.deltaY || this.ctx.delta || this.ctx.h || 0;
        let _x = 0, _y = 0;
        if(e.key === l) _x = dx * -1;
        else if(e.key === r) _x = dx;
        else if(e.key === u) _y = dy * -1;
        else if(e.key === d) _y = dy;
        else return;
        if (this._isOutOfBounds(_x, _y)) return;
        this.ctx.x += _x;
        this.ctx.y += _y;
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
