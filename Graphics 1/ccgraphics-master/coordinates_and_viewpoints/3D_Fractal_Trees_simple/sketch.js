// 3D tree
// original by Daniel Shiffman (Coding Rainbow)
// (3D version by Evan Raskob)
// http://patreon.com/codingtrain
// Original video: https://youtu.be/0jjeOYMjmDU
// Evan Raskob: e.raskob@gold.ac.uk


let angle = 0;
let slider;
let levels = 6; // how many levels to draw down

function setup() {
  createCanvas(320, 200, WEBGL);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}


function draw() {
  lights();
  background(0);
  
  angle = slider.value();
  translate(0, height/4);
  branch(levels);
}

function branch(currentLevel) {

  let scaleDown = 3/4; // fraction of size for child branches
  let length = 8; // length multiplier for each branch (y)
  
  box(currentLevel*length/3, currentLevel*length);
  translate(0, -currentLevel*length);
  
  // stop at level 2 (too small beyond that)
  if (currentLevel > 2) {
    
    // right branch
    push();
    translate(0, currentLevel*length*scaleDown/2);    
    rotate(angle);
    // rotate(2*angle/len); // try this instead for fun!
    
    translate(0, -currentLevel*length*scaleDown/2);
    branch(currentLevel-1);
    pop();

    // left branch
    push();
    translate(0, currentLevel*length*scaleDown/2);    
    rotate(-angle);
    translate(0, -currentLevel*length*scaleDown/2);
    branch(currentLevel-1);
    pop();
  }
}