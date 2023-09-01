/*
 * @name Textures
 * @description Images and videos are supported for texture.
 */
// video source: https://vimeo.com/90312869

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
  //pass image as texture
  texture(img);
  box(width/4);
  pop();
  theta += 0.005 + (width/2 - mouseX) * 0.0001;
}
