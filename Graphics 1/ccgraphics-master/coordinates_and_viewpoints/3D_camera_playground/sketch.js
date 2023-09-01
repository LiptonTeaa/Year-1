/*
 * @name 3d camera playground for testing different effects:
 * - if the *view window stays the same* and the field of view gets larger, the distance to the view plane gets smaller
 * - if the *view window stays the same* and the field of view gets smaller, the distance to the view plane gets larger
 * - if we fix the distance to the view plane (e.g. eyeDistance or eyeZ), as the fov gets larger the window gets larger (more objects visible) like a wide-angle lens
 * - if we fix the distance to the view plane, as the fov gets smaller the window gets smaller (less objects visible) like a *telephoto* lens
 * @frame 320,240
 * @description playground for 3D camera 
 */

let fovSlider; // changes fov angle
let randomObjectPositions = []; // array of random x,y,z positions
let eyeZ; // camera eye position (z coord)


//
// This is helpful to translate slider values to radians
//
function sliderToRadians(sliderObj) {
  return PI/sliderObj.value();
}

function setup() {
  createCanvas(640, 480, WEBGL);
  noStroke();
  
  // can't use decimals, so we'll divide PI by this to get a fraction like PI/1, PI/3, PI/12
  fovSlider = createSlider(1, 12, 3); 
  
  fovSlider.position(8,16);  
  
  eyeZ = (height/2) / tan(sliderToRadians(fovSlider)/2); // 120 degree angle FOV / 2
  
  
  // create random 3D object positions
  let numObjects = 20;
  
  for (let i=0; i<numObjects; i++) {
        randomObjectPositions.push([
          random(-width/2, width/2),
          random(-height/2, height/2),
          random(-width,eyeZ/2)
        ]);
  }
  
  background(0);

  

}

function draw() {
    background(0);

  //text("eyeZ:" + eyeZ, 8,8);
  
  let fov = sliderToRadians(fovSlider);
  
  eyeZ = (height/2) / (fov/2); // 120 degree angle FOV / 2

  angleMode(RADIANS);
  // set up camera
  perspective(fov, width/height, eyeZ/10.0, eyeZ*10.0);
  
  
  lights();
  

  let objSize = 20;
  
  fill(255);
  
  for (let index=0; index < randomObjectPositions.length; index++) {
    push();
    translate(randomObjectPositions[index][0], randomObjectPositions[index][1], randomObjectPositions[index][2]);
    sphere(objSize);
    pop();
  }
  
  // easier to code:
  //----------------
  // randomObjectPositions.map (function (coords) {
  //   push();
  //   translate(coords[0], coords[1], coords[2]);
  //   sphere(objSize);
  //   pop();    
  // });

  
}
