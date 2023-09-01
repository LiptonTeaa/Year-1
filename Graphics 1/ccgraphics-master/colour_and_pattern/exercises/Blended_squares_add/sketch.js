///
/// Blended squares (additive)
/// by Evan Raskob <e.raskob@gold.ac.uk>
//
/// - Demonstrating using colour blending in p5js.
/// - Learning about additive and subtractive colour.

function setup() {
  createCanvas(400, 400);
  
  // We can use HSB mode as follows 
  // from (https://p5js.org/reference/#/p5/colorMode):
  // Setting colorMode(HSB) lets you use the HSB system instead.
  // By default, this is colorMode(HSB, 360, 100, 100, 1). 
  // You can also use HSL instead of HSB, but then the 3rd value will be lightness (whiteness) and won't refer to a pure colour.

  colorMode(HSB);
}

function draw() {
  // First reset to default blend mode (based on alpha)
  // to clear the screen. Or else it will flash!
  blendMode(BLEND);
  background(0); // start with black (no colour)
  noStroke();

  ellipseMode(CENTER);

  // ADD is sum of colours colour mode
  // https://p5js.org/reference/#/p5/blendMode
  blendMode(ADD);

  // shift drawing down slightly
  translate(0,width/8);

  /// EXERCISE:
  /// Play with the hue values below to see the results.
  /// Colours should add towards white (all colour).
  
  // REMEMBER: in HSB or HSL mode, color values
  // are from 0-360 (hue), 0-100 (saturation),
  // and 0-100 (either brightness or lightness

  fill(0,100,100); // max saturation and brightness red
  ellipse(width/2,height/4,width/2,height/2);

  fill(120,100,100); // max saturation and brightness green
  ellipse(width/4+width/8,height/2,width/2,height/2);
  
  fill(240,100,100); // max saturation and brightness blue
  ellipse(3*width/4-width/8,height/2,width/2,height/2);
}
