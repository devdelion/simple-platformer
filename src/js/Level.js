import { Player } from './Player.js';
import { Coin } from './Coin.js';

const blockTypes = {
    '*': 'free',
    '#': 'wall',
    'P': Player,
    'C': Coin
};

export class Level {
    constructor(levelPattern) {
        this.levelPattern = levelPattern;

        this.width = levelPattern[0].length;
        this.height = levelPattern.length;

        this.blockWidth = canvas.width / levelPattern[0].length
        this.blockHeight = canvas.height / levelPattern.length
    }

    get gameLevel() {
        let arr = [];
        for (let y = 0; y < this.height; y++) {
            let row = [];
            for (let x = 0; x < this.width; x++) {
                row.push(blockTypes[this.levelPattern[y][x]])
            }
            arr.push(row);
        }
        return arr;
    }

    collides(pos, type) {
        let xStart = Math.floor(pos.x / this.blockWidth),
            xEnd = Math.ceil((pos.x + this.blockWidth) / this.blockWidth),
            yStart = Math.floor(pos.y / this.blockHeight),
            yEnd = Math.ceil((pos.y + this.blockHeight) / this.blockHeight);

        for (let y = yStart; y < yEnd; y++) {
            for (let x = xStart; x < xEnd; x++) {
                let isOutside = y < 0 || y >= this.height || x < 0 || x >= this.width;
                if (isOutside || this.gameLevel[y][x] == type) return true;
            }
        }
        return false;
    }

    overlaps(firstPos, secondPos) {
        if (firstPos.x + this.blockWidth > secondPos.x &&
            firstPos.x < secondPos.x + this.blockWidth &&
            secondPos.y + this.blockHeight > firstPos.y &&
            secondPos.y < firstPos.y + this.blockHeight)
            return true;

        return false
    }
}