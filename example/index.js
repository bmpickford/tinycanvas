// import { Circle } from './objects/circle';
// import { Grid } from './objects/grid';
// import puzzles from './puzzle/index';
// import { Game } from '../lib/game';
import CLH from '../lib/index';

const game = CLH.create();

game.add.object({
    name: 'circle',
    init: (self) => {
        self.x = 100;
        self.y = 100;
        self.r = 50;
        self.h = 50;
        self.w = 50;
    },
    render: CLH.Renderers.Circle,
    collision: true,
});

game.add.object({
    name: 'rectangle',
    init: (self) => {
        self.x = 200;
        self.y = 200;
        self.h = 50;
        self.w = 50;
        self.delta = 50;
    },
    render: CLH.Renderers.Rectangle,
    interactions: [CLH.Interactions.ArrowKeys],
    collision: true,
    onCollision: (self) => { self.x = 300; }
});


game.start();

// setTimeout(() => circle.x = 300, 1000);

// game.add({
//     name: 'grid',
//     impl: Grid,
// });
// game.add({
//     name: 'circle',
//     impl: Circle,
//     interactions: [CLH.ArrowMovementMixin, CLH.EnterKeyMixin],
//     options: {
//         imageUrl: './assets/face.png'
//     }
// });