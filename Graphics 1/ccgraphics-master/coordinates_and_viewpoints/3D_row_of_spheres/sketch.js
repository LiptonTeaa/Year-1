/**
 * Draw a row of spheres relatively and absolutely
 *
 * by Evan Raskob, 2021
 **/

function setup() {
  createCanvas(320, 240, WEBGL);
}

function draw() {
  background(10);
  noStroke();
  
  let totalSpheres = 10;
  fill(0,220,0);
  sphere(2); // mark centre point
  
  
  // these look the same, but work differently!
  
   //drawSpheresRowRelative(totalSpheres);

   drawSpheresRowAbsolutely(totalSpheres);
  
}


///
/// Draw a row of spheres by drawing one, then moving to the next
///

function drawSpheresRowRelative(numberOfspheres) {
    push(); // save current drawing transformation matrix
  
    translate(-width/2,0); // start on left edge of screen
  
  
  for (let index=0; index < numberOfspheres; index++)
    {

      let percentFinished = index/numberOfspheres;
      
      fill(255);
      sphere(10);

      // move to next position, horizontally
      translate( width/(numberOfspheres-1), 0 ); // why is this -1? 

    }
  pop(); // go back to original drawing matrix
}


///
/// Draw a row of spheres by positioning each one
///

function drawSpheresRowAbsolutely(numberOfspheres) {
  
  
  for (let index=0; index < numberOfspheres; index++)
    {

      let percentFinished = index/numberOfspheres;

      push(); // save current drawing transformation matrix  
      translate( map(index, 
                     0, numberOfspheres-1,// why -1 here? (hint, what's the max value of index?)
                     -width/2,width/2),
                0);
      
      fill(255);
      sphere(10);
      pop(); // go back to original drawing matrix
    }
}