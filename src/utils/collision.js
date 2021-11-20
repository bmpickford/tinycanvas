export function checkCollision(o1, o2) {
    if (
        o1.x < o2.x + o2.w &&
        o1.x + o1.w > o2.x &&
        o1.y < o2.y + o2.h &&
        o1.h + o1.y > o2.y
    ) {
        return true;
    }
    return false;
}