import CLH from '../lib/index';

const game = CLH.create();

game.add.object({
    name: 'circle',
    init: (self) => {
        self.x = 100;
        self.y = 100;
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
    interactions: [CLH.Interactions.ArrowKeys],
    collision: true,
    onCollision: (self) => { self.x = 300; }
});

game.start();