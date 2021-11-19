export const canvas = document.getElementById('game');
if (!canvas.getContext) {
    throw new Error('Canvas not compatible');
}

export const context = canvas.getContext('2d');