// User-made wall.
// Also can take up one pixel.
// Only has collision with Trympe.

class Wall extends Tile {
    constructor() {
        super(x, y);
        this.type = "wall";
    }
}