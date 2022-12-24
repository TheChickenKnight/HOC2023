const TRYMPE_SPEED = 10;

class Trympe {
    constructor(x, y, genome) {
        console.log(neataptic);
        this.pos = {
            x,
            y
        };

        this.vec = {
            dir: createVector(0, 1).rotate(random(2 * PI)),
            vel: createVector(0, 0)
        };
        this.vec.perp = createVector(this.vec.dir.y, -this.vec.dir.x);

        this.brain = genome;
        this.brain.score = 0;

        this.osc = 0;
        this.chrono = 0;
        
        grid[y][x] = this;
    }

    show() {
        this.vec.perp = createVector(this.vec.dir.y, -this.vec.dir.x);
        stroke(255);
        triangle(
            this.pos.x + this.vec.dir.x,
            this.pos.y + this.vec.dir.y,
            this.pos.x - this.vec.dir.x + this.vec.perp.x,
            this.pos.y - this.vec.dir.y + this.vec.perp.y,
            this.pos.x - this.vec.dir.x - this.vec.perp.x,
            this.pos.y - this.vec.dir.y - this.vec.perp.y
        );
        stroke(255, 0, 0);
        point(this.pos.x + this.vec.dir.x, this.pos.y + this.vec.dir.y)
        stroke(0, 255, 0);
        point(this.pos.x - this.vec.dir.x + this.vec.perp.x, this.pos.y - this.vec.dir.y + this.vec.perp.y)
        stroke(0, 0, 255);
        point(this.pos.x - this.vec.dir.x - this.vec.perp.x, this.pos.y - this.vec.dir.y - this.vec.perp.y)
        stroke(0);
        point(this.pos.x, this.pos.y);
    }
}

