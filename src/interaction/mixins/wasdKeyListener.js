
export const wasdKeyListenerMixin = {
    onKeyDown(e) {
        switch (e.key) {
            case "a":
                this.moveLeft();
                break;
            case "d":
                this.moveRight();
                break;
            case "w":
                this.moveUp();
                break;
            case "s":
                this.moveDown();
                break;
        }
    }
}