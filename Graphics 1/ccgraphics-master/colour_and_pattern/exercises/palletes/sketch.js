///
/// Generating computational pallettes.
/// by Evan Raskob <e.raskob@gold.ac.uk>
//
/// - Demonstrating how to use HSB to create pallettes.
/// - Use this as a template for your assignment.


/// Different pallettes are implemented in separate functions
/// so you can choose which to run in your main draw() loop.
/// Each one takes in a start x and y coordinate and the size
/// of the pallette to draw on the screen, so you can draw 
/// multiple pallettes at the same time in different areas.

///---------------------------------------------------------
///---------------YOUR TASK-----------------------------------
///---------------------------------------------------------

/// 1. Experiment with drawMonochromaticPallette() to see what it does
/// 2. Make a modified version of drawMonochromaticPallette() to use
///    that uses brightness AND saturation
/// 3. Experiment with drawAnalogousPallette()
/// 4. Make another version of drawAnalogousPallette() using different
///    colour intervals.
/// 5. Create another pallette function using another system. See
///    class readings and 
///    http://printingcode.runemadsen.com/lecture-color/



///---------------------------------------------------------

// A monochromatic color scheme using fixed intervals
// of brightness for a specific hue and saturation.
// For a more advanced version, try changing *both* brightness
// and saturation.

/**
 * @param {Number} hue Hue angle for this color range, from 0-359
 * @param {Number} startX Start x coordinate for pallette
 * @param {Number} startY Start y coordinate for pallette
 * @param {Number} size Size of pallette in pixels
 */
function drawMonochromaticPallette(hue, startX, startY, size)
{
  let numberOfColors = 6; // number of colors in this pallette
  let saturation = 80; // how "colorful" or gray this color is, from 0-100
  let maxBrightness = 80; // maximum brightness value

  // size of each of the pallette's color swatches in pixels
  let swatchSize = size/numberOfColors; 

  noStroke();
  rectMode(CORNER);

  push(); // save drawing state
  translate(startX,startY); // move to start x,y position

  for (let colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {
    let currentBrightness = maxBrightness * colorIndex/numberOfColors;
    let currentColor = color(hue, saturation, currentBrightness);
    
    // draw color square
    fill(currentColor);
    rect(0,0, swatchSize, swatchSize);
    
    // move drawing cursor to next position for next loop
    translate(swatchSize,0);
  }

  pop(); // return to original drawing state
}


///---------------------------------------------------------
/// Fix this function!
///---------------------------------------------------------

// Analogous colors. This is a polychromatic color scheme using
// fixed intervals of changing hue angles to generate a pallette
// of multiple hues (colors) that are close to one another.
//
// In other words, to create a pallette of 6 colours, start with
// a hue angle (say 0) and increase it by a fixed amount (say
// 30 degrees) 6 times to create 6 different color swatches.    

/**
 * @param {Number} hue starting hue angle for this color range, from 0-359
 * @param {Number} startX Start x coordinate for pallette
 * @param {Number} startY Start y coordinate for pallette
 * @param {Number} size Size of pallette in pixels
 */
function drawAnalogousPallette(hue, startX, startY, size)
{
  let numberOfColors = 6; // number of colors in this pallette
  let saturation = 80; // how "colorful" or gray this color is, from 0-100
  let brightness = 80; // brightness value, form 0-100 (black to white)
  let hueInterval = 30; //??? Experiment with this!

  // size of each of the pallette's color swatches in pixels
  let swatchSize = size/numberOfColors; 

  noStroke();
  rectMode(CORNER);

  push(); // save drawing state
  translate(startX,startY); // move to start x,y position

  for (let colorIndex=0; colorIndex < numberOfColors; colorIndex++)
  {
    ///-------------------------------------------
    ///----------FIXME----------------------------
    ///-------------------------------------------
    ///
    /// Make this line of code work properly
    //let currentHue = ??;
    ///-------------------------------------------

    let currentColor = color(currentHue, saturation, brightness);
    
    // draw color square
    fill(currentColor);
    rect(0,0, swatchSize, swatchSize);
    
    // move drawing cursor to next position for next loop
    translate(swatchSize,0);
  }

  pop(); // return to original drawing state
}


///-------------------------------------------
///----------SETUP----------------------------
///-------------------------------------------

function setup() {

  /// You can change the size of your drawing canvas if needed!
  createCanvas(400, 400);
  
  // We can use HSB mode as follows 
  // from (https://p5js.org/reference/#/p5/colorMode):
  // Setting colorMode(HSB) lets you use the HSB system instead.
  // By default, this is colorMode(HSB, 360, 100, 100, 1). 
  // You can also use HSL instead of HSB.

  colorMode(HSB); 
}

///-------------------------------------------
///----------DRAW----------------------------
///-------------------------------------------

/// draw the pallettes.

function draw() {

  background(0);

  let hue = 160;


  // Label the pallette. See https://p5js.org/reference/#/p5/text
  fill(180); // gray
  textSize(24);
  text("Monochromatic with hue = " + hue, 10, 48-12);

  // draw with hue = 160
  drawMonochromaticPallette(hue, 10, 48, 200);

  hue = 220; // update hue for next pallette

  fill(180); // gray
  textSize(24);
  text("Monochromatic with hue = " + hue, 10, 128-12);
  // draw with hue = 220
  drawMonochromaticPallette(hue, 10, 128, 200);


  /// draw other pallettes below -- possibly resize your canvas.

}
