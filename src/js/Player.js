import { collides } from './utils.js'

export class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.color = 'blue';
        this.speedX = 10;
        this.speedY = 38;
        this.gravity = 2;
        this.dx = 0;
        this.dy = 0;
    }

    update(state, key) {
        const level = state.level;
        
        this.dx = 0;
        this.dy += Math.min(this.gravity, this.size.height - this.y % this.size.height);

        if (key['ArrowRight']) {
            this.dx = Math.min(this.speedX, this.size.width - this.x % this.size.width);
        } else if (key['ArrowLeft']) {
            this.dx = Math.max(-this.speedX, -this.x % this.size.width || -this.size.width);
        }
        if (!level.collides({ x: this.x + this.dx, y: this.y }, 'wall')) {
            this.x += this.dx;
        }

        if (!level.collides({ x: this.x, y: this.y + this.dy }, 'wall')) {
            this.y += this.dy;
        } else if (key['ArrowUp'] && this.dy > 0) {
            this.dy = -this.speedY
        } else {
            this.dy = 0;
        }

        return true;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
    }

    static create(x, y, size) {
        return new Player(x, y, size);
    }
}