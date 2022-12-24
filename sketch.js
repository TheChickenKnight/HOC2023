const FPS = 100000000;
const DIM = {
  W: 120,
  L: 67
}
let grid = [];
for (let i = 0; i < DIM.L; i++)
  grid += new Array(DIM.W);
let trimp;

function setup() {
  createCanvas(DIM.W, DIM.L);
  frameRate(FPS);
  trimp = new Trympe(50, 50, {});
}
 
 function draw() {
  background(0);
  trimp.show();
}