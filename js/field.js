const FPS = 100000000;
let POP_SIZE = 100;
const DIM = {
  W: 120,
  L: 67
}
var grid = [];
var frames = 0;
for (let i = 0; i < DIM.L; i++)
  grid.push(new Array(DIM.W));
var trimps = [];

const tileEvent = new CustomEvent('tile', {
  detail: {
      type: this.type,
      trympe: this.inhab,
      pos: this.pos
  }
});

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
        alert("WALL ERROR!!!");
        //uh it should never get to here so yeah
      break;
      case "lava":
        e.trympe.inAction = false;
        e.trympe.score -= 10;
        grid[e.pos.y][e.pos.x].inhab = null;
      break;
      case "goal":
        e.trympe.inAction = false;
        e.trympe.score += 10 + (10000/frames);
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

  frames++;
}

function init() {
  // Phases:
  // THIS WILL GO IN main.js EVENTuaLLY!!!!
  /* Drawing Phase:
  *   Before the trympes spawn in, to allow a chance to draw in different tiles.
  *   I'm assuming some kind of paint tool with a grid on the side of buttons for the tiles
  *   There will be a requirement for the right amount of spawn tiles and some goal tiles.
  *   There will also be a confirmation button to start the phase. Maybe more settings.
  */

  /* Training phase:
  *   This is when the actual genetic algorithm comes into play
  *   The goal of the trympes will be to get from spawn to goal.
  *   I have not decided whether to spawn all trympes of a generation at once, or seperately.
  *     Separately won't be that slow, as less calcuation per trympe but still would be slower.
  *   Here's a link to a project with a similar genetic algorithm we can steal:
  *     https://github.com/wagenaartje/agario-ai 
  */

  /* Completion phase:
  *    There probably won't be a timed beginning of this phase. Perhaps a button in training phase.
  *    This phase will take the best, maybe the top n, of the Trympes and showcase them
  *    I'll probably just have it on loop
  */
}