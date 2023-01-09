// User-made wall.
// Also can take up one pixel.
// Only has collision with Trympe.

class Wall {
    constructor(x, y) {
        this.pos = {
            x,
            y
        };
        this.inhab = null;
        this.type = "wall";
        grid[y][x] = this;
    }

    interact() {
        this.dispatchEvent(tileEvent);
        /*
        * The goal is for this event to trigger 
        * a listener in sketch.js so that if any
        * of the tiles within grid comes to contain
        * a trympe it'll do a special action. 
        */
    }

    copy() {
        return new Wall(this.x, this.y);
    }
}