
import { expect } from '@esm-bundle/chai';
import { withArrowMovement, withWASDMovement } from "../../src/interaction";
import { spy } from 'sinon';
import { sendKeys } from '@web/test-runner-commands';

describe('withArrowMovement', () => {
    class emptyClass {
        clone() { return new emptyClass(); }
    };
    it('adds mixin functions to class', () => {
        const withArrowMovementClass = withArrowMovement(new emptyClass());
        expect(withArrowMovementClass.init).to.exist;
        expect(typeof withArrowMovementClass.init).to.be.equal('function');
        expect(typeof withArrowMovementClass.destroy).to.be.equal('function');
        expect(typeof withArrowMovementClass.onKeyDown).to.be.equal('function');

        withArrowMovementClass.destroy();
    });

    describe('arrow key inputs', () => {
        class arrowSpyClass {
            moveRight = spy();
            moveLeft = spy();
            moveUp = spy();
            moveDown = spy();
            clone() { return new arrowSpyClass() };
        }
        const mockClass = withArrowMovement(new arrowSpyClass());
        it('should move element when right arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowRight' });
            expect(mockClass.moveRight.called).to.be.true;
        });

        it('should move element when left arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowLeft' });
            expect(mockClass.moveLeft.called).to.be.true;
        });

        it('should move element when up arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowUp' });
            expect(mockClass.moveUp.called).to.be.true;
        });

        it('should move element when down arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowDown' });
            expect(mockClass.moveDown.called).to.be.true;
        });
    });

    describe('wasd key inputs', () => {
        class wasdSpyClass {
            moveRight = spy();
            moveLeft = spy();
            moveUp = spy();
            moveDown = spy();
            clone() { return new wasdSpyClass() };
        }
        const mockClass = withWASDMovement(new wasdSpyClass());
        it('should move element when d arrow is clicked', async () => {           
            await sendKeys({ press: 'd' });
            expect(mockClass.moveRight.called).to.be.true;
        });

        it('should move element when a arrow is clicked', async () => {           
            await sendKeys({ press: 'a' });
            expect(mockClass.moveLeft.called).to.be.true;
        });

        it('should move element when w arrow is clicked', async () => {           
            await sendKeys({ press: 'w' });
            expect(mockClass.moveUp.called).to.be.true;
        });

        it('should move element when s arrow is clicked', async () => {           
            await sendKeys({ press: 's' });
            expect(mockClass.moveDown.called).to.be.true;
        });
    });
    
});
  