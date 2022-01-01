/** @module interactions */

/**
 * @public
 */
class Interaction {
    /**
     * Initialisers listeners and bindings
     * 
     * @param {module:core.Game} context 
     */
    init(context) {
        this.ctx = context;
        this._boundOnKeyDown = this._onKeyDown.bind(this);
        document.addEventListener('keydown', this._boundOnKeyDown);
    }
    /**
     * Detaches listeners
     * 
     * @returns {void}
     */
    destroy() {
        document.removeEventListener('keydown', this._boundOnKeyDown);
    }
    /**
     * @private
     * @param {number} dx - x movement
     * @param {*} dy - y movement
     * @returns {boolean}
     */
    _isOutOfBounds(dx, dy) {
        if (this.ctx.x + dx < 0 || this.ctx.x + dx >= this.ctx.game.canvas.width ||
            this.ctx.y + dy < 0 || this.ctx.y + dy >= this.ctx.game.canvas.height) return true;
        return false;
    }
    /**
     * @function
     * @private
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

/**
 * @public
 */
export const ArrowKeys = new AKImpl();

/**
 * @public
 */
export const WASD = new WASDImpl();
