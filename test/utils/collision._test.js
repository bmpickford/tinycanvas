import CLH from '../../lib/index';
import { expect } from '@esm-bundle/chai';

describe('collision', () => {
    it('should return true for two colliding rectangles of the same size', () => {
        const r1 = { x: 0, y: 0, h: 100, w: 100};
        const r2 = { x: 50, y: 50, h: 100, w: 100 };
        expect(CLH.checkCollision(r1, r2)).to.be.true;
    });

    it('should return true for two colliding rectangles of the same size and the same position', () => {
        const r1 = { x: 0, y: 0, h: 100, w: 100};
        const r2 = { x: 0, y: 0, h: 100, w: 100 };
        expect(CLH.checkCollision(r1, r2)).to.be.true;
    });

    it('should return true for two colliding rectangles where 1 overlaps 2', () => {
        const r1 = { x: 0, y: 0, h: 100, w: 100};
        const r2 = { x: 25, y: 25, h: 25, w: 25 };
        expect(CLH.checkCollision(r1, r2)).to.be.true;
    });

    it('should return true for two colliding rectangles where 2 overlaps 1', () => {
        const r1 = { x: 25, y: 25, h: 25, w: 25 };
        const r2 = { x: 0, y: 0, h: 100, w: 100};
        expect(CLH.checkCollision(r1, r2)).to.be.true;
    });

    it('should return false for rectangles that do not collide', () => {
        const r1 = { x: 0, y: 0, h: 10, w: 10};
        const r2 = { x: 20, y: 20, h: 10, w: 10 };
        expect(CLH.checkCollision(r1, r2)).to.be.false;
    });
});