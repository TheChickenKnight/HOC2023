const FPS = 100000000;
const POP_SIZE = 100;
const DIM = {
  W: 120,
  L: 67
}
var grid = [];
var frames = 0;
for (let i = 0; i < DIM.L; i++)
  grid.push(new Array(DIM.W));
var trimps = [];


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
        //uh it should never get to here so yeah
      break;
      case "lava":
        e.trympe.inAction = false;
        e.trympe.score -= 10;
        grid[e.pos.y][e.pos.x].inhab = null;
      break;
      case "goal":
        e.trympe += 10 + (10000/frames);
        grid[e.pos.y][e.pos.x].inhab = null;
      break;
      case "tile":
        grid[e.pos.y][e.pos.x].inhab = e.trympe;
      break;
    }
  });
  init();
}
 
function draw() {
  background(0);

  trimp.show();
  frames++;
}

function init() {

}