import { MoveableFace } from './src/objects/face';
import { GridItem } from './src/objects/gridItem';
import puzzles from './src/puzzle/index';
import { Game } from './src/game';
import { canvas } from './src/canvas';

let face;
const grid = [];

function configureGameObjects(puzzle) {
    const blockWidth = canvas.width / puzzle.board.length;
    const blockHeight = canvas.height / puzzle.board[0].length;
    console.table({
        'canvas': `${canvas.width}x${canvas.height}`,
        'grid': `${puzzle.board.length}x${puzzle.board[0].length}`,
        'block': `${blockWidth}x${blockHeight}`,
    });
    for(let i = 0; i < puzzle.board.length; i++) {
        for(let j = 0; j < puzzle.board[i].length; j++) {
            grid.push(new GridItem({
                x: i * blockWidth,
                y: j * blockHeight,
                w: blockWidth,
                h: blockHeight,
                type: puzzle.board[i][j]
            }));
        }
    }
    face = new MoveableFace({
        x: puzzle.player[0] * blockWidth,
        y: puzzle.player[1] * blockHeight,
        radius: 0.75 * (Math.min(blockWidth, blockHeight)),
        deltaX: blockWidth,
        deltaY: blockHeight,
    });
}
configureGameObjects(puzzles[0]);

new Game({
    puzzles,
    objects: [
        ...grid,
        face,
    ]
});