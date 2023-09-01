/**
 * Simple example to show how to load an image
 * and get the colours of that image.
 * 
 * Image function reference: https://p5js.org/reference/#group-Image
 * 
 * Image credit: Under the Wave off Kanagawa by Katsushika Hokusai (1830–32) 
 * From https://www.metmuseum.org/art/collection/search/45434 
 * 
 * by Evan Raskob 2021 <e.raskob@gold.ac.uk>
 */


let waveImage; // our wave image

/// This is useful to load an image 
/// or do a task that is important to run
/// *before* the sketch is loaded. 
/// preload() runs once *before* setup

function preload() {  
  // we can load an image locally:
  waveImage = loadImage('assets/wave.jpg');

  // You can try to load from another server, but it
  // might now work because of the server settings like here.
  // This example will give you a Cross Origin error:
  // waveImage = loadImage('https://images.metmuseum.org/CRDImages/as/original/DP130155.jpg');

  pixelDensity(1); // if you are on a very large screen, this can
  // help your images scale to the proper size when drawn
}

///
/// Setup -------------------------
///
function setup() {  
  createCanvas(waveImage.width, waveImage.height); // create a canvas EXACTLY the size of our image
}

function draw() {

  background(0);

  // draw the image to fill the canvas exactly
  image(waveImage, 0, 0);

  noStroke();
  textSize(12);

  fill(0);

  /// This is such a pain: mouseX and mouseY are FRACTIONS
  /// and if you don't round them, you won't get an error
  /// but also this won't work and you'll never see why!
  /// The pixels[] array needs INTEGERS (whole numbers)!
  

  // round the mouse values, otherwise we get too many decimals
  text('('+ round(mouseX) +',' + round(mouseY)+ ')', mouseX,mouseY+4);

  waveImage.loadPixels();

  // index of pixel = (column + row*width)*4;

  let pixelIndex = (round(mouseX) + round(mouseY)*waveImage.width)*4;

  let boxSize = boxSizeSlider.value(); // size of average pixel box
  let boxPixels = boxSize*boxSize;

  let rAvg = 0;
  let gAvg = 0;
  let bAvg = 0;

  for (let row = 0; row < boxSize; row++){
    for (let column = 0; column < boxSize; column++)
    {
      rAvg = rAvg + waveImage.pixels[pixelIndex];
      gAvg = gAvg + waveImage.pixels[pixelIndex+1];
      bAvg = bAvg + waveImage.pixels[pixelIndex+2];
    }
  }

  rAvg = rAvg / boxPixels; // 25
  gAvg = gAvg / boxPixels; // 25
  bAvg = bAvg / boxPixels; // 25

  fill(rAvg, gAvg, bAvg);
  stroke(255);
  rect(mouseX, mouseY, boxSize*2, boxSize*2);

}