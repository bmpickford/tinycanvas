import CLH from '../../lib/index';
import { expect } from '@esm-bundle/chai';
import { spy } from 'sinon';

describe('game', () => {
    it('should create a game object', () => {
        const game = CLH.create();
        expect(game.constructor.name).to.be.equal('Game');
    });

    it('should be able to add an object', () => {
        const game = CLH.create();
        const o = game.add.object();
        expect(o).to.exist;
    });

    it('should send start event on start', () => {
        const game = CLH.create();
        const callback = spy();
        game.on(CLH.events.START, callback);
        game.start();
        expect(callback.called).to.be.true;
    });

    it('should wait for image load to start', (done) => {
        const game = CLH.create();
        const callback = spy();
        const image = { complete: false };
        game._images.push(image);
        game.on(CLH.events.START, callback);
        game.start();
        expect(callback.called).to.be.false;
        game._images[0].complete = true;
        setTimeout(() => { 
            expect(callback.called).to.be.true;
            done();
        }, 500);
    });
});

describe('object creation', () => {
    let game;

    beforeEach(() => {
        game = CLH.create();
    });

    it('should create an object on game with defaults', () => {
        const o = game.add.object();
        expect(o).to.exist;
        expect(o.x).to.be.equal(0);
        expect(o.y).to.be.equal(0);
    });

    it('should create an object on game with coordinates', () => {
        const o = game.add.object({
            init: (self) => {
                self.x = 100;
                self.y = 100;
            }
        });
        expect(o).to.exist;
        expect(o.x).to.be.equal(100);
        expect(o.y).to.be.equal(100);
    });

    it('should render cirlce using default renderer', () => {
        const o = game.add.object({
            init: (self) => {
                self.x = 100;
                self.y = 100;
                self.r = 50;
            },
            render: CLH.Renderers.Circle,
        });
        expect(o).to.exist;
        expect(o.x).to.be.equal(100);
        expect(o.y).to.be.equal(100);
        expect(o.r).to.be.equal(50);
    });
});