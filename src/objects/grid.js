import { canvas, context } from "../../lib/canvas";
import Lib from '../../lib/index';

/**
 * Grid object. This game object controls the list of GridItem's
 */
export class Grid extends Lib.GameObject {
    grid = [];
    init() {
        this.grid = [];
        const puzzle = this.game.currentPuzzle;
        const blockWidth = canvas.width / puzzle.board.length;
        const blockHeight = canvas.height / puzzle.board[0].length;
        for(let i = 0; i < puzzle.board.length; i++) {
            for(let j = 0; j < puzzle.board[i].length; j++) {
                this.grid.push(new GridItem(this.game, {
                    x: i * blockWidth,
                    y: j * blockHeight,
                    w: blockWidth,
                    h: blockHeight,
                    type: puzzle.board[i][j]
                }, this.name));
            }
        }
    }
    draw() {
        for (let o of this.grid) {
            o.draw();
        }
    }
    destroy() {
        for (let o of this.grid) {
            o.destroy();
        }
    }
}

class GridItem extends Lib.mix(Lib.GameObject).with(Lib.OnClickMixin) {
    draw() {
        const { type, x, y, w, h } = this.o;
        if (this.color) {
            const _originalFillStyle = context.fillStyle;
            context.fillStyle = this.color;
            context.fillRect(x, y, w, h);
            context.fillStyle = _originalFillStyle;
            return;
        }
        if (type === 0) {
            context.strokeRect(x, y, w, h);
        } else {
            context.fillRect(x, y, w, h);
        }
    }
    destroy() {
        Lib.Animations.add(this, {
            h: 0,
            w: 0,
            x: 0,
            frames: 50,
        }, 'sine');
    }
    _onClick() {
        this.color = '#ff0000';
    }
}