/**
 * Using vertex colours to create gradient fills for shapes.
 * @author (adapted by) Evan Raskob 2021 <e.raskob@gold.ac.uk>
 *
 */

function setup() {
  createCanvas(300, 600, WEBGL);
  noLights();
}

function draw() {
  background(220);
  
  noStroke();
  beginShape(TRIANGLES);
  fill(255, 0, 0);
  vertex(-width/4, -width/4, 0);
  fill(0, 255, 0);
  vertex( width/4, -width/4, 0);
  fill(0, 0, 255);
  vertex( 0,  width/4, 0);
  endShape(CLOSE);
}