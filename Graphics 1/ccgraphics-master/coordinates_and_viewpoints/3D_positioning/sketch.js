/*
 * @name 3d coords
 * @frame 320,240
 * @description Display a sphere at 0,0,0
 */

let zSlider;

function setup() {
  createCanvas(320, 240, WEBGL);
  noStroke();
  let eyeDistance = (height/2) / tan(PI/6); // 120 degree angle FOV / 2
  
  zSlider = createSlider(0, eyeDistance, 0);
  zSlider.position(8, 248);  
}

function draw() {
  background(0);
  
  noLights();
  
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2

  push();
  translate(0,0,zSlider.value());
  sphere(10);
  pop();
}
