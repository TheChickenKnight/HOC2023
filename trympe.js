const TRYMPE_SPEED = 1;
const TRYMPE_HANDLING = 0.1;
const TRYMPE_RADIUS = 20;
const TRYMPE_ANGLE = 30;

class Trympe {
    constructor(x, y, genome, color) {
        this.pos = {
            x,
            y
        };
        this.inAction = true;

        this.color = color;

        this.vec = {
            dir: createVector(0, 1).rotate(random(2 * PI)),
            vel: createVector(0, 0)
        };
        this.vec.perp = createVector(this.vec.dir.y, -this.vec.dir.x);

        this.brain = genome;
        this.brain.score = 0;

        this.chrono = 0;
        
        grid[y][x] = this;
    }

    inputs() {



        return [
            this.pos.x / DIM.W,
            this.pos.y / DIM.L,
            (DIM.W - this.pos.x) / DIM.W, 
            (DIM.L - this.pos.y) / DIM.L,
            Math.sin(PI*this.chrono*25),
            this.chrono += 0.01,
            Math.random(),
        ];
    }

    vision() {
        let visionPoints = [];
        for (let i = 0; i < grid.length; i++)
            for (let j = 0; j < grid[0].length; j++) {
                let point = createVector(j - this.pos.x, i - this.pos.y);
                let center = this.vec.dir.copy();
                center.setMag(TRYMPE_RADIUS);
                //to find if a point is within the limited vision of a trympe, the vector of the trympe as the origin to the point has to have a lesser magnitude than the vector of the trympe as the origin with a magnitude of the trympe's max vision length and the angle of the trimps direction vector. The point's vector also has to have a lesser angle between it and said vector than half of the trympe's vision width.
                if (point.mag() <= center.mag() && Math.atan2(center.y - point.y, center.x - point.x) <= TRYMPE_ANGLE * PI / 360)
                    visionPoints.push(grid[i][j]);
            }
    }

    show() {
        this.vec.perp = createVector(this.vec.dir.y, -this.vec.dir.x);
        stroke(this.color);
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