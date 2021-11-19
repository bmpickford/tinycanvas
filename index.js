import { Face } from './src/sprites/face';
import { withArrowMovement, withWASDMovement } from './src/interaction/index';
import { context, canvas } from './src/canvas';

const face = withArrowMovement(new Face({ x: 50, y: 50, delta: 100 }));
const face2 = withWASDMovement(new Face({ x: 150, y: 150, delta: 100 }));

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    face.draw();
    face2.draw();
}

function loop() {
    clear();
    draw();
    window.requestAnimationFrame(loop);
}

loop();

