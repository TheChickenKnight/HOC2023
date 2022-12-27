class Tile {
    constructor(x, y) {
        this.pos = {
            x,
            y
        };
        this.inhab = null;
    }

    interact() {
        return this.inhab !== null ? trimps.indexOf(this.inhab) : -1;
    }
}
