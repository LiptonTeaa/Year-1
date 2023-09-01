///
/// Demonstrating a computational layout for a portfolio project page
/// by Evan Raskob, mostly adapted from an example Rune Madsen's online book: https://github.com/runemadsen/programmingdesignsystems.com/blob/master/examples/layout/geometric-composition/composition-strict-3.js
/// 
/// Tested with p5js v1.0.0
///

function setup() {
  createCanvas(450, 600);
}

function draw() {
  const margin = height / 20;
  const allWidth = width - 3 * margin;
  const allHeight = height - 5 * margin;
  const moduleWidth = allWidth / 2;
  const moduleHeight = allHeight / 4;

  background(240);
  noStroke();

  // SKETCH BOX
  // this could contain your sketch's interactive or animated portion.
  // Meaning, you can resize-your sketch to draw into this box!
  //
  translate(margin, margin); // note we're using translate to move the drawing cursor down!
  fill(75, 185, 165);
  rect(0, 0, 2 * moduleWidth + margin, 3 * moduleHeight + 2 * margin);


  /// SKETCH
  /// now draw your sketch. Since it's *after* the sketch box, it will draw over it.
  /// see drawMySketch() below.
  drawMySketch(0, 0, 2 * moduleWidth + margin, 3 * moduleHeight + 2 * margin);

  // TITLE BOX
  // this could contain the title of your sketch, in text
  translate(0, 3 * (moduleHeight + margin)); // note we're using translate to move the drawing cursor down!

  fill(30, 50, 50);
  rect(0, 0, moduleWidth, moduleHeight / 3);

  // let's do computational text margins as well 
  // Note: you can do this for inner content too
  let textHorizontalMargin = moduleWidth / 24;
  let textVerticalMargin = moduleHeight / 48;

  // text should fit the title box, above

  // this visualises the text box - comment it out to see
  //noFill();
  //stroke(240);
  //rect(textHorizontalMargin, textVerticalMargin, moduleWidth - textHorizontalMargin, moduleHeight/4 - textVerticalMargin);
  
  fill(240); //text colour
  noStroke(); // text uses fill only
  textSize(moduleHeight/4 - 2*textVerticalMargin); // height in pixels, accounting for margins
  
  // text draw from bottom up (opposite of rect) - give it a baseline
  text("My Project Title", textHorizontalMargin, moduleHeight/4-textVerticalMargin);

  // bottom element
  fill(255, 155, 155);
  rect(moduleWidth + margin, 0, moduleWidth, moduleHeight);
}


///
/// Usually, your sketch is draw inside draw().
/// This time, put *all* your drawing code here so you can draw
/// your sketch at any arbitrary x,y position and width, height (w,h)
/// This means looking at your original drawing code and adding x and y
/// to all coordinates, and replacing width with w and height with h.
///
function drawMySketch(x, y, w, h) {
  let numStrips = 16;
  // draw a moving vertical strips
  fill(255,100);
  for (let i = 1; i < numStrips; i++) {
    rect(
      x + w / 2 + i * w / (2*numStrips) * sin(frameCount / (i*16)),
      y, w / (2*numStrips), h);
  }

  fill(255,100);
  for (let i = 1; i < numStrips; i++) {
    rect(
      x,
      y + h / 2 + i * h / (2*numStrips) * cos(frameCount / (i*32)),
      w, h / (2*numStrips));
  }

}
