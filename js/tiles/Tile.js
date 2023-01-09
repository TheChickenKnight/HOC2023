class Tile {
    constructor(x, y) {
        this.pos = {
            x,
            y
        };
        this.inhab = null;
        this.type = "tile";
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
        return new Tile(this.x, this.y);
    }
}