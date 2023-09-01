/*
 * @name Basic Vectors
 * @description Using and understanding common vector properties.
 * @author Evan Raskob 2021 <e.raskob@gold.ac.uk> 
 * 
 */

///-----------------------------------------------
///--- setup
///-----------------------------------------------

let robotoFont; 

function setup(){
  createCanvas(720,480,WEBGL);

  // Roboto Google font: https://fonts.google.com/specimen/Roboto?preview.text_type=custom&sidebar.open=true&selection.family=Roboto:wght@300

  robotoFont = loadFont('assets/Roboto-Bold.ttf');
}


///-----------------------------------------------
///--- draw
///-----------------------------------------------

function draw() {
  background(240);
  textFont(robotoFont, 36);
  
  fill(0);

  let originVector = createVector(0, 0);

  // mouse coordinates translated to world coordinates (no perspective correction)
  let mouseVector = createVector(mouseX-width/2, mouseY-height/2);

  drawArrow(originVector, mouseVector, 'red');
  drawNormals(mouseVector);

  //
  // visualise heading angle
  //
  fill(180.100); // transparent for angle visualisation

  //arc(x, y, w, h, start, stop, [mode], [detail])
  arc(0, 0, mouseVector.mag(), mouseVector.mag(), 0, mouseVector.heading(), PIE);

  // some stats as text
  noStroke();
  fill('black');
  text('magnitude set to: ' + mouseVector.mag().toFixed(2), -width/4, -height/4);
  // the toFixed(places) function turn a number into text with the 
  // number of decimal places (2 in this case)
  text('angle set to: ' + (mouseVector.heading()*180/PI).toFixed(2), -width/4, -height/4 + 36);
}

//
// draw an arrow for a vector at a given base position
// stolen from https://p5js.org/reference/#/p5.Vector/setMag
//
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


//
// draw normals for a vector from (0,0)
//
function drawNormals(vec) {

  let normalised = vec.copy().normalize().mult(width/10); // normal vector, slightly scaled

  push();
    stroke('green');
    strokeWeight(3);
    fill('green');
    translate(0, 0);
    line(0, 0, normalised.x, 0);
    // arrow head
    push();
      let arrowSize = 7;

      if (normalised.x < 0)
      {
        translate(normalised.x + arrowSize, 0);
        rotateZ(PI);
      }
      else 
      {
        translate(normalised.x - arrowSize, 0);
      }
      triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();

    stroke('blue');
    strokeWeight(3);
    fill('blue');
    line(0, 0, 0, normalised.y);
    // arrow head
    push();
    rotateZ(PI/2);
 
    if (normalised.y < 0)
    {
      translate(normalised.y + arrowSize, 0);
      rotateZ(PI);
    }
    else 
    {
      translate(normalised.y - arrowSize, 0);
    }     
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  pop();
}