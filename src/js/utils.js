export function collides(pos, level, type, anotherPos) {
    let xStart = Math.floor(pos.x / level.blockWidth),
        xEnd = Math.ceil((pos.x + level.blockWidth) / level.blockWidth),
        yStart = Math.floor(pos.y / level.blockHeight),
        yEnd = Math.ceil((pos.y + level.blockHeight) / level.blockHeight);

    for (let y = yStart; y < yEnd; y++) {
        for (let x = xStart; x < xEnd; x++) {
            if (anotherPos && (anotherPos.x / level.blockWidth == x || anotherPos.y / level.blockHeight == y)) return true;

            let isOutside = y < 0 || y >= level.height || x < 0 || x >= level.width;
            if (isOutside || level.gameLevel[y][x] == type || typeof level.gameLevel[y][x] == type) return true;
        }
    }
    return false;
}