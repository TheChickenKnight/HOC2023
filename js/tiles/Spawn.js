// dev or user-made section
// Takes up one pixel so that Trympes may also take up the spot.
// Will create a  Trympe on pixel at startup, and will dissappear after the Trympe is spawned.
// Will error if not enough Spawns compared to POP_SIZE

class Spawn {
    constructor(x, y) {
        this.pos = {
            x,
            y
        };
        this.inhab = null;
        this.type = "spawn";
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
        return new Spawn(this.x, this.y);
    }
}