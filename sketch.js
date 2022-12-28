const FPS = 100000000;
const POP_SIZE = 100;
const DIM = {
  W: 120,
  L: 67
}
let grid = [];
for (let i = 0; i < DIM.L; i++)
  grid.push(new Array(DIM.W));
let trimps = [];


function setup() {
  createCanvas(DIM.W, DIM.L);
  frameRate(FPS);
  this.addEventListener("tile", e => {
    switch(e.type) {
      case "spawn":
        grid[e.pos.y][e.pos.x] = new Tile(e.pos.x, e.pos.y);
        grid[e.pos.y][e.pos.x].inhab = e.trympe;
      break;
      case "wall":

      break;
      case "lava":
        e.trympe.inAction = false;
        grid[e.pos.y][e.pos.x].inhab = null;
      break;
      case "goal":

      break;
      case "tile":
        grid[e.pos.y][e.pos.x].inhab = e.trympe;
    }
  });
  init();
}
 
function draw() {
  background(0);

  trimp.show();
}

function init() {

}