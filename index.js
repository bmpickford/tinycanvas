import { Face } from './src/objects/face';
import { GridItem } from './src/objects/gridItem';
import { withArrowMovement } from './src/interaction/index';
import { context, canvas } from './src/canvas';
import puzzles from './src/puzzle/index';

let face;
const blockSize = 100;
const grid = [];

function configurePuzzle(puzzle) {
    for(let i = 0; i < puzzle.board.length; i++) {
        for(let j = 0; j < puzzle.board[i].length; j++) {
            grid.push(new GridItem({
                x: j * blockSize,
                y: i * blockSize,
                type: puzzle.board[i][j]
            }))
        }
    }
    face = withArrowMovement(new Face({ x: puzzle.player[0] * blockSize, y: puzzle.player[1] * blockSize, radius: 75 }));

}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    face.draw();
    for (let g of grid) {
        g.draw();
    }
}

function loop() {
    clear();
    draw();
    window.requestAnimationFrame(loop);
}

configurePuzzle(puzzles[0]);
loop();
