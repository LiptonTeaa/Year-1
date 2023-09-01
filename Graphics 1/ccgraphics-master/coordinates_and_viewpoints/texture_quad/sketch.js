/*
 * @name Quad texture
 * @description Using a quad for texture. Images and videos are supported for texture too.
 */

let img;
let theta = 0;

function setup() {
  createCanvas(320, 240, WEBGL);
  img = loadImage('assets/wave.jpg');
}

function draw() {
  background(255);
  push();
  rotateZ(theta);
  rotateX(theta);
  rotateY(theta);

  // top left
  push();
  noStroke();
  translate(-width/4,-width/4);
  fill(0,255,0);
  sphere(5);
  pop();

  // bottom right
  push();
  noStroke();
  translate(width/4,width/4);
  fill(0,0,255);
  sphere(5);
  pop();

  
  //pass image as texture
  texture(img);
  quad(-width/4,-width/4, 0, // top left
       width/4,-width/4, -width/3,// top right
       width/4,width/4, 0, // bottom right
       -width/4,width/4, 0); // bottom left
  pop();
  
  // centre
  fill(255,0,0);
  sphere(5);

  theta += 0.005 + (width/2 - mouseX) * 0.0001;
}
