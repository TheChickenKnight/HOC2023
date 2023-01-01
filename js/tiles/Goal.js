// dev or user-made section
// Takes up one pixel
// If any Trympe comes in contact with this pixel it has deemed to autmatically win and is given points based on such plus time taken.

class Goal {
    constructor(x, y) {
        this.pos = {
            x,
            y
        };
        this.inhab = null;
        this.type = "goal";
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