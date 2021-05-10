import { Player } from './Player.js'

export class Coin {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.color = 'yellow';
    }

    update(state) {
        if (state.level.overlaps({ x: this.x, y: this.y }, { x: state.player.x, y: state.player.y })) {
            state.score++;
            
            return false;
        }

        return true;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height)
    }

    static create(x, y, size) {
        return new Coin(x, y, size);
    }
}