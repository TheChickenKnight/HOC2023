let tileEvent = new CustomEvent('tile', {
    detail: {
        type: this.type,
        trympe: this.inhab,
        pos: this.pos
    }
});

class Tile {
    constructor(x, y) {
        this.pos = {
            x,
            y
        };
        this.inhab = null;
        this.type = "tile";
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
}
