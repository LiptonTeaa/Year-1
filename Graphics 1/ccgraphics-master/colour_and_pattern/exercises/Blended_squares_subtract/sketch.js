///
/// Blended squares (subtractive)
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
  background(255); // start with white (all colour)
  noStroke();

  ellipseMode(CENTER);

  // DIFFERENCE is subtractive colour mode
  // https://p5js.org/reference/#/p5/blendMode
  blendMode(DIFFERENCE);

  // shift drawing down slightly
  translate(0,width/8);


  /// EXERCISE:
  /// Play with the hue values below to see the results.
  /// You should see the opposite colour on the hue circle.

  // REMEMBER: in HSB or HSL mode, color values
  // are from 0-360 (hue), 0-100 (saturation),
  // and 0-100 (either brightness or lightness)

  fill(0,100,100); // white - red = cyan
  ellipse(width/2,height/4,width/2,height/2);

  fill(120,100,100); // white - green = magenta
  ellipse(width/4+width/8,height/2,width/2,height/2);
  
  fill(240,100,100); // white - blue = yellow
  ellipse(3*width/4-width/8,height/2,width/2,height/2);
}
