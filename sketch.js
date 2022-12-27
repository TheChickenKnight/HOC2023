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
  init();
}
 
 function draw() {
  background(0);
  trimp.show();
}

function init() {

}