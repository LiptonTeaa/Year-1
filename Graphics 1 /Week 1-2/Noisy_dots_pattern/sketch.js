/// Graphics: Noisy Pattern
/// by Evan Raskob <e.raskob@gold.ac.uk>
/// Dec. 2020
//
/// Draw a pattern of slightly noise dots in a line
///


// array of dots' x positions
var dots_x;

function setup() {
  createCanvas(300, 200);
  
  regularRandomDots(); // see below
}

function draw() {
  background(220);
  fill(20);

  // draw dots in array
  for (var i=0; i < dots_x.length; i++) {
    ellipse(dots_x[i], 100, 20,20);
  }  
}

//
// create regular random dots in a line
// 
function regularRandomDots()
{
  dots_x = []; // clear array
  
  // Place dots 1/10 the width of the screen, starting 1/10 width of screen
  // That means we can only draw 9 dots!
  for (var i=0; i < 9; i++) {
     var spacing = width/10;
     var start_x = width/10;
    
     var x = i*spacing + start_x; // new x position
    
     // add some noise to the x position
     x = x + random( -spacing/5, spacing/5);
    
    // put x position into dots_x array
    dots_x.push(x);
  }
}

//
// Create new positions when mouse is clicked
//
function mouseClicked() {
  regularRandomDots();
}
