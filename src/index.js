import { MoveableCircle } from './objects/circle';
import { GridItem } from './objects/gridItem';
import puzzles from './puzzle/index';
import { Game } from '../lib/game';
import { canvas } from '../lib/canvas';

function configureGrid(game) {
    const grid = [];
    const puzzle = game.currentPuzzle;
    const blockWidth = canvas.width / puzzle.board.length;
    const blockHeight = canvas.height / puzzle.board[0].length;
    for(let i = 0; i < puzzle.board.length; i++) {
        for(let j = 0; j < puzzle.board[i].length; j++) {
            grid.push(new GridItem(game, {
                x: i * blockWidth,
                y: j * blockHeight,
                w: blockWidth,
                h: blockHeight,
                type: puzzle.board[i][j]
            }));
        }
    }
    return grid;   
}

function configurePlayer(game) {
    const puzzle = game.currentPuzzle;
    const blockWidth = canvas.width / puzzle.board.length;
    const blockHeight = canvas.height / puzzle.board[0].length;
    return new MoveableCircle(game, {
        x: puzzle.player[0] * blockWidth,
        y: puzzle.player[1] * blockHeight,
        r: 0.75 * (Math.min(blockWidth, blockHeight)),
        deltaX: blockWidth,
        deltaY: blockHeight,
    });
}

new Game({
    puzzles,
    initLevel: (game) => [...configureGrid(game), configurePlayer(game)],
});