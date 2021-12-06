import { Circle } from './objects/circle';
import { Grid } from './objects/grid';
import puzzles from './puzzle/index';
import { Game } from '../lib/game';
import Lib from '../lib/index';

const game = new Game({ puzzles });

game.add({
    name: 'grid',
    impl: Grid,
});
game.add({
    name: 'circle',
    impl: Circle,
    interactions: [Lib.ArrowMovementMixin, Lib.EnterKeyMixin],
    options: {
        imageUrl: './assets/face.png'
    }
});