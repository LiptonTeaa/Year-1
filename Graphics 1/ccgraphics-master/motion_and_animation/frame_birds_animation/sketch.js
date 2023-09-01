/*
 * @name Flock animation (frames)
 * @description Draw a "flock" of birds using Vectors and use vectors
 *  for frame-based animation.
 * @author Evan Raskob 2021 <e.raskob@gold.ac.uk> 
 * 
 */


let birdPositions = []; // array of vectors with location of objects to draw 
let birdVelocities = []; // array of vectors with velocities of objects 
let totalBirds = 20; // objects to create

/**
 * Draw an triangle at this location on the screen (in 3D)
 * @param {p5.Vector} position 
 */
function drawBird(size, position, velocity)
{
  // Finish this!
  // 1. draw a triangle at the size specified, 
  //    at the x,y,z position specified by the Vector
  // 2. Use rotate() and position.heading() to rotate the triangle
  //    so it points in the direction of movement
  
  // HINT: There's a similar function in the documentation... 
  //       https://p5js.org/reference/#/p5.Vector/setMag


  // Start with this: 

  push();
  // scale(); // ???
  // translate(?)
  // triangle() // or use beginShape() and vertex() calls?

  translate(position);
  rotate(velocity.heading());
  triangle(0, size / 2, 0, -size / 2, size, 0);

  pop();
}


/**
 * Complete this function using the code from setup so you can 
 * trigger it using the HTML button with id "initialise".
 */
function initialiseBirds(){

  // FIX ME!
  // set bird locations and velocities to random vectors

  birdPositions = []; // array of vectors with location of objects to draw 
  birdVelocities = []; // array of vectors with velocities of objects 

  // create array of object positions:
  for (let i=0; i < totalBirds; i++)
  {
    // create a random 3D vector for position
    let randomVector = p5.Vector.random3D();
    randomVector.mult(width/4); // multiplies *all* components by width/4
    birdPositions.push(randomVector); // add to positions array

    // create a random 2D vector for heading
    randomVector = p5.Vector.random2D();
    randomVector.setMag(0.5); // now the magnitude (length, or hypotenuse of x,y,z components) is 2px/frame
    birdVelocities.push(randomVector); // add to positions array
  }


}

///-----------------------------------------------
///--- setup
///-----------------------------------------------
 
function setup() {
  createCanvas(720, 480, WEBGL); // use 3D

  //
  // trigger the initialiseBirds() function when the button is clicked 

  document.getElementById('initialise').onclick = function()
  {
    initialiseBirds();
    console.log('done');
  }


  // create array of object positions:
  for (let i=0; i < totalBirds; i++)
  {
    // create a random 3D vector for position
    let randomVector = p5.Vector.random3D();
    randomVector.mult(width/4); // multiplies *all* components by width/4
    birdPositions.push(randomVector); // add to positions array

    // create a random 2D vector for heading
    randomVector = p5.Vector.random2D();
    randomVector.setMag(0.5); // now the magnitude (length, or hypotenuse of x,y,z components) is 2px/frame
    birdVelocities.push(randomVector); // add to positions array
  
  }


}

///-----------------------------------------------
///--- draw
///-----------------------------------------------

function draw() {
 
  background(220);

  // uncomment below to see it in rotate in 3D!

  // let theta = PI*frameCount/600; // frame-based animation to rotate screen (at 60 fps)
  // angleMode(RADIANS);
  // rotate(theta, [0.02,0.05,0]); // rotate around a vector (as array)


  fill(0);
  stroke(0);
  
  // This uses frame-based animation, which means it changes with each draw() call.
  // that make it dependent on how fast the computer renders each frame!

  // draw birds:
  for (let i=0; i < totalBirds; i++)
  {
    // WE CAN'T DO THIS! Need to use the function
    // birdPositions[i] += birdVelocities[i];

    // Correct way to add vectors:
    birdPositions[i].add( birdVelocities[i] );
    drawBird(80, birdPositions[i], birdVelocities[i]); 
  }

 // centre of world, or reference:
  push(); 
  noStroke();
  fill(128); 
  sphere(20);
  pop();
 }