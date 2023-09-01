/*
 * @name Mixture
 * @frame 710,400 (optional)
 * @description Display a box with three different kinds of lights.
 */
function setup() {
  createCanvas(320, 240, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  
  // ambient light
  ambientLight(30,0,0);
  
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2


  
  // blue directional light from the top
  //directionalLight(128, 0, 0, 0, 1, 0.125);


  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  
  //shininess(120);
  //specularMaterial(255);


  // calculate distance from center to mouseX
  let lightX = width/8*cos(frameCount/50);
  let lightY = height/8*sin(frameCount/50);
  
  // red spotlight
  // axis located at lightX, lightY, 500
  // axis direction of light: 0, 0, -1
  spotLight(100, 100, 255, 
            lightX, lightY, width, 
            0, 0, -1, 
            PI/8, 50);
  
  push();
  translate(lightX, lightY, width/2);
  sphere(5);
  pop();
  
   
  // rotate on X axis
  rotateX(-PI/4);
  // rotate on Y axis
  rotateY(PI/4);
  
  // place box on (0, 0, 0), size 100
  box(100);
}
