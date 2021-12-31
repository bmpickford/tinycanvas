import CLH from '@tinycanvas/core';
import { ArrowKeys, WASD } from '@tinycanvas/interactions';
import face from './assets/face.png';

const levels = [
    {
        x: 100,
        y: 100,
    },
    {
        x: 200,
        y: 50,
    }
]
const game = CLH.create({ levels });
game.add.image('face', face);

game.add.object({
    name: 'circle',
    init: (self, level) => {
        self.x = level.x;
        self.y = level.y;
        self.r = 25;
        self.h = 25;
        self.w = 25;
    },
    render: (self) => {
        self.game.context.beginPath();
        self.game.context.arc(self.x + (self.r / 2), self.y + (self.r / 2), self.r / 2, 0, Math.PI * 2);
        self.game.context.stroke();
    },
    collision: true,
});

game.add.object({
    name: 'rectangle',
    init: (self) => {
        self.x = 200;
        self.y = 200;
        self.h = 25;
        self.w = 25;
        self.delta = 25;
    },
    render: (self) => {
        self.game.context.strokeRect(self.x, self.y, self.w, self.h);
    },
    interactions: [ArrowKeys],
    collision: true,
    onCollision: (self) => { self.game.nextLevel() }
});

game.add.object({
    name: 'face',
    init: (self) => {
        self.x = 300;
        self.y = 300;
        self.h = 25;
        self.w = 25;
    },
    render: (self) => {
        const image = self.game.getImage('face');
        self.game.context.drawImage(image, self.x, self.y, self.w, self.h);
    },
    interactions: [WASD],
    collision: false,
    onCollision: (self) => { self.game.nextLevel() }
});

game.on('END', () => alert('end of game'));
game.start();