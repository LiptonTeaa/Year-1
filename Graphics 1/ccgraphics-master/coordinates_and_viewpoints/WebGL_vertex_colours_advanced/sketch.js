/**
 * Using vertex colours to create gradient fills for shapes.
 * @author (adapted by) Evan Raskob 2021 <e.raskob@gold.ac.uk>
 * @see webGL shape types in p5js: https://p5js.org/reference/#/p5/beginShape 
 *
 */

function setup() {
  createCanvas(300, 600, WEBGL);
  noLights();
}

function draw() {
  background(220);

  // ---------------
  // top triangle
  push();
  translate(0,-height/4);
  
  colorMode(RGB);
  
  noStroke();
  beginShape(TRIANGLES);
  fill(255, 0, 0);
  vertex(-width/4, -width/4, 0);
  fill(0, 255, 0);
  vertex( width/4, -width/4, 0);
  fill(0, 0, 255);
  vertex( 0,  width/4, 0);
  endShape(CLOSE);
  
  pop();
  
  // ---------------
  // bottom square
  push();
  translate(0,height/4);
  
  colorMode(HSB);
  
  let baseHue = 0;
  
  noStroke();
  beginShape(); // let p5js's renderer sort it out
  fill(baseHue, 255, 255);
  vertex(-width/4, -width/4, 0); // top left
  
  baseHue += 90;
  
  fill(baseHue, 255, 255);
  vertex( width/4, -width/4, 0); // top right
  
  baseHue += 90;
  
  fill(baseHue, 255, 255);
  vertex( width/4, width/4, 0); // bottom right
  
  baseHue += 90;
  
  fill(baseHue, 255, 255);
  vertex( -width/4,  width/4, 0); // bottom left
  endShape(CLOSE);
  
  pop();
  
  
}