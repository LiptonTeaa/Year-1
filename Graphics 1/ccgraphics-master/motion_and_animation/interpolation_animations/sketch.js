/** 
 * Demonstrating different type of interpolation between two points
 * by Evan Raskob
**/


let startPosition; // beginning position in animation
let endPosition; // next position to move to
let framesToMove = 60*3; // 3 seconds at 60 fps 


function setup() {
  createCanvas(400, 400, WEBGL);
  
  let xPositions = [-width/3, width/3]; 
  startPosition = xPositions[0];
  endPosition = xPositions[1]; // next position to move to
  framesToMove = 60*3; // 3 seconds at 60 fps 
}


function draw() {
  background(180);
  lights();// let see some shapes!
  
  // get current frame in our total frames of movement
  let framesProgress = frameCount % framesToMove;
  
  if (framesProgress === 0) 
    {
      // swap current and next positions
      let swapVar = startPosition;
      startPosition = endPosition;
      endPosition = swapVar;
    }
  
  
  // lerp(start,end,progress) is same as:
  // result = start*(1-progress) + end*(progress)
  
  
  // draw ellipse between current position to next one  
  // see https://p5js.org/reference/#/p5/lerp
  let currentPosition = lerp(startPosition,endPosition, framesProgress/framesToMove);
  push();
  fill(255);
  noStroke();
  translate(currentPosition, -height/3);
  sphere(40);
  pop();
  
  
  // draw ellipse between current position to next one  
  // using an exponential function this time (power of 2). Try a cube or quadratic!
  let angle = PI/2 * (framesProgress/framesToMove);
currentPosition = lerp(startPosition,endPosition, sin(angle));
  push();
  fill(255);
  noStroke();

  translate(currentPosition, 0);
  sphere(40);
  pop();
  
  let exponentialProgress = pow((framesProgress/framesToMove),2);
currentPosition = lerp(startPosition,endPosition, exponentialProgress);
  push();
  fill(255);
  noStroke();

  translate(currentPosition, height/3);
  sphere(40);
  pop();
}