
export const arrowKeyListenerMixin = {
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowLeft":
                this.moveLeft();
                break;
            case "ArrowRight":
                this.moveRight();
                break;
            case "ArrowUp":
                this.moveUp();
                break;
            case "ArrowDown":
                this.moveDown();
                break;
        }
    }
}