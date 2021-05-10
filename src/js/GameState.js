import { Player } from './Player.js';
import { Coin } from './Coin.js';

export class GameState {
    constructor(level, action = 'playing') {
        this.level = level;
        this.action = action;

        this.actors = [];
        this.score = 0;
    }

    init() {
        const gameLevel = this.level.gameLevel;

        for (let y = 0; y < this.level.height; y++) {
            for (let x = 0; x < this.level.width; x++) {
                const block = gameLevel[y][x];
                if (typeof block == 'string') continue;
                this.actors.push(block.create(x * this.level.blockWidth, y * this.level.blockHeight, { width: this.level.blockWidth, height: this.level.blockHeight }));
            }
        }

        this.player = this.actors.find(el => el instanceof Player);
        this.maxScore = this.actors.filter(el => el instanceof Coin).length;
    }

    update(key) {
        this.actors = this.actors.filter(actor => actor.update(this, key));

        return this.score == this.maxScore;
    }

    draw(display) {
        display.draw();

        for (const actor of this.actors) {
            actor.draw(display.ctx);
        }
    }
}