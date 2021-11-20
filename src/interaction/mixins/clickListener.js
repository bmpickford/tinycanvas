export const clickListenerMixin = {
    init() {
        this.boundMouseClick = this.onMouseClick.bind(this);
        document.addEventListener('click', this.boundMouseClick);
    },
    destroy() {
        document.removeEventListener('click', this.boundMouseClick);
    },
    onMouseClick(e) {
        const { width, height, x, y } = this.options;
        if (width && height) {
            if (
                (e.clientX > x && e.clientX < x + width) &&
                (e.clientY > y && e.clientY < y + height)
            ) {
                console.log('its a hit');
                this.onClick();
            }
        }
    }
}