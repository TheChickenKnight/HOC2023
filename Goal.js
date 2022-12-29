// dev or user-made section
// Takes up one pixel
// If any Trympe comes in contact with this pixel it has deemed to autmatically win and is given points based on such plus time taken.

class Goal extends Tile {
    constructor(x, y) {
        super(x, y);
        this.type = "goal";
    }
}