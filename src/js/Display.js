export class Display {
    constructor(gameState) {
        this.gameState = gameState;

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        const level = this.gameState.level;
        const gameLevel = level.gameLevel;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let y = 0; y < level.height; y++) {
            for (let x = 0; x < level.width; x++) {
                this.ctx.fillStyle = gameLevel[y][x] == 'wall' ? '#52BE80' : '#AED6F1';
                this.ctx.fillRect(x * level.blockWidth, y * level.blockHeight, level.blockWidth, level.blockHeight)
            }
        }

        this.ctx.fillStyle = 'yellow';
        this.ctx.font = level.blockHeight * 0.6 + 'px sans-serif'
        this.ctx.fillText(this.gameState.score, this.canvas.width - level.blockWidth*0.6, level.blockHeight * 0.8);
    }
}