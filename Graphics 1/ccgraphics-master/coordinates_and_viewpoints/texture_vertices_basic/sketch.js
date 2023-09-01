/*
 * @name Vertices and texturing
 * @description simple vertex texture coords.
 * @author Evan Raskob 2021 <e.raskob@gold.ac.uk> 
 * 
 * Image credit: Under the Wave off Kanagawa by Katsushika Hokusai (1830–32) 
 * From https://www.metmuseum.org/art/collection/search/45434 
 * 
 */

let img; // image for texturing

///-----------------------------------------------
///--- preload
///-----------------------------------------------
function preload() {
  img = loadImage("assets/wave.jpg");
}


///-----------------------------------------------
///--- setup
///-----------------------------------------------
function setup() {
  createCanvas(320, 240, WEBGL);
}


///-----------------------------------------------
///--- draw
///-----------------------------------------------
function draw() {
  background(255);

  // top left
  push();
  noStroke();
  translate(-width / 4, -width / 4);
  fill(0, 255, 0);
  sphere(5);
  pop();

  // bottom right
  push();
  noStroke();
  translate(width / 4, width / 4);
  fill(0, 0, 255);
  sphere(5);
  pop();

  // draw textured shape
  //
  texture(img);
  
  // note that coordinates are counter-clockwise (CCW)
  // (or anti-clockwise)

  // (-w,-h)(0,0) ------------ (w,-h)(1,0)
  //             |            |
  //             |    0,0     |
  //             |            |
  // (-w, h)(0,1) ------------ w,h(1,1)

  textureMode(NORMAL); // scales coords to between 0,1
  beginShape();
  vertex(-width/4, -height/4, 0,
    0, 0);
  vertex(width/4, -height/4, 0,
    1, 0);
  vertex(width/4, height/4, 0,
    1, 1);
  vertex(-width/4, height/4, 0, 
    0, 1);
  endShape();
}
