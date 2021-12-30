
import { expect } from '@esm-bundle/chai';
import CLH from "../../lib/index";
import { spy } from 'sinon';
import { sendKeys } from '@web/test-runner-commands';

describe('withArrowMovement', () => {
    class emptyClass { }
    it('adds mixin functions to class', () => {
        const movingClass = CLH.mix(emptyClass).with(CLH.WASDMovementMixin);
        const withArrowMovementClass = new movingClass();
        expect(typeof withArrowMovementClass.destroy).to.be.equal('function');
        expect(typeof withArrowMovementClass._onKeyDown).to.be.equal('function');

        withArrowMovementClass.destroy();
    });

    describe('arrow key inputs', () => {
        class arrowSpyClass {
            _moveRight = spy();
            _moveLeft = spy();
            _moveUp = spy();
            _moveDown = spy();
            o = {
                x: 0,
                y: 0,
                deltaX: 0,
                deltaY: 0,
            }
        }
        const mixed = CLH.mix(arrowSpyClass).with(CLH.ArrowMovementMixin);
        const mockClass = new mixed();
        it('should move element when right arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowRight' });
            expect(mockClass._moveRight.called).to.be.true;
        });

        it('should move element when left arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowLeft' });
            expect(mockClass._moveLeft.called).to.be.true;
        });

        it('should move element when up arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowUp' });
            expect(mockClass._moveUp.called).to.be.true;
        });

        it('should move element when down arrow is clicked', async () => {           
            await sendKeys({ press: 'ArrowDown' });
            expect(mockClass._moveDown.called).to.be.true;
        });
    });

    describe('wasd key inputs', () => {
        class wasdSpyClass {
            _moveRight = spy();
            _moveLeft = spy();
            _moveUp = spy();
            _moveDown = spy();
            o = {
                x: 0,
                y: 0,
                deltaX: 0,
                deltaY: 0,
            }
        }
        const mixed = CLH.mix(wasdSpyClass).with(CLH.WASDMovementMixin);
        const mockClass = new mixed();
        it('should move element when d arrow is clicked', async () => {           
            await sendKeys({ press: 'd' });
            expect(mockClass._moveRight.called).to.be.true;
        });

        it('should move element when a arrow is clicked', async () => {           
            await sendKeys({ press: 'a' });
            expect(mockClass._moveLeft.called).to.be.true;
        });

        it('should move element when w arrow is clicked', async () => {           
            await sendKeys({ press: 'w' });
            expect(mockClass._moveUp.called).to.be.true;
        });

        it('should move element when s arrow is clicked', async () => {           
            await sendKeys({ press: 's' });
            expect(mockClass._moveDown.called).to.be.true;
        });
    }); 
});

describe('withMouseClick', () => {
    it('should mixin click', () => {
        // TODO
    });
});