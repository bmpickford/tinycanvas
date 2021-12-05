/**
 * @returns {HTMLCanvasElement} canvas
 */
export const canvas = document.getElementById('game');
if (!canvas.getContext) {
    throw new Error('Canvas not compatible');
}

/**
 * @returns {CanvasRenderingContext2D} context
 */
export const context = canvas.getContext('2d');