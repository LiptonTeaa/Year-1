/*
 * @name Basic kinematics
 * @description Making things move with fake physics!
 * @author Evan Raskob 2021 <e.raskob@gold.ac.uk> 
 * 
 */

let robotoFont; 
let position; // something to move
let velocity;
let acceleration;
let spawnInterval = 60*2; // spawn a new object every second

///-----------------------------------------------
///--- setup
///-----------------------------------------------

function setup(){
  createCanvas(360,240,WEBGL);

  // Roboto Google font: https://fonts.google.com/specimen/Roboto?preview.text_type=custom&sidebar.open=true&selection.family=Roboto:wght@300

  robotoFont = loadFont('assets/Roboto-Bold.ttf');
  
  position = createVector(0,0,0);
  velocity = createVector(0,0,0);
  acceleration = p5.Vector.random3D().mult(0.05);
}


///-----------------------------------------------
///--- draw
///-----------------------------------------------

function draw() {
  
  background(80);
  lights();
  textFont(robotoFont, 12);
  
   rotateY(PI/8);
   rotateX(PI/8);
  
   // DRAW X-AXIS
  stroke('lightgreen');
  strokeWeight(1);
  line(-width,0,0,
       width,0,0);

  // DRAW Y-AXIS
  stroke(120,120,255);
  strokeWeight(1);
  line(0,height,0,
       0,-height,0);

  // DRAW Z-AXIS
  stroke(200,40,40);
  strokeWeight(1);
  line(0,0,-width,
       0,0,0);
  stroke(255,80,80);
  line(0,0,0,
       0,0,width);
  
  
  
  if (frameCount % spawnInterval === 0) {
    position = createVector(0,0,0);
    velocity = createVector(0,0,0);
    acceleration = p5.Vector.random3D().mult(0.05);
  }
  
  // apply accleration to velocity
  velocity.add(acceleration); 
    
  // apply velocity to position
  position.add(velocity);
  
  
  drawComponents(p5.Vector.mult(velocity,width/20));
  stroke('gray');
  strokeWeight(3);
  line(0,0,0,
      position.x, position.y, position.z);
  
  fill(255);
  noStroke();
  push();
  translate(position);
  sphere(20);
  pop();
  
}




//
// draw x,y,z for a vector from (0,0)
//
function drawComponents(vec) {

  push();
  
    //--- x -------------------
    stroke('green');
    strokeWeight(3);
    fill('green');
    translate(0, 0);
    line(0, 0, vec.x, 0);
    // arrow head
    push();
      let arrowSize = 7;

      if (vec.x < 0)
      {
        translate(vec.x + arrowSize, 0);
        rotateZ(PI);
      }
      else 
      {
        translate(vec.x - arrowSize, 0);
      }
      triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();

    //--- y -------------------
    stroke('blue');
    strokeWeight(3);
    fill('blue');
    line(0, 0, 0, vec.y);
    // arrow head
    push();
    rotateZ(PI/2);
 
    if (vec.y < 0)
    {
      translate(vec.y + arrowSize, 0);
      rotateZ(PI);
    }
    else 
    {
      translate(vec.y - arrowSize, 0);
    }     
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  
    //--- z -------------------
    //stroke('red');
    strokeWeight(3);
    if (vec.z < 0)
    {
      fill('darkred');
      stroke('darkred');
    }
    else
    {
      fill('red');
      stroke('red');
    }
    
    line(0, 0, 0, 
           0, 0, vec.z);
  
    // arrow head
    push();
    rotateY(-PI/2);

    if (vec.z < 0)
    {      
      translate(vec.z + arrowSize,0);
    }
    else 
    {
      translate(vec.z - arrowSize, 0);
    }     
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  
  
  pop();
}
