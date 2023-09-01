/*
 * @name Load and "glitch" an image 
 * @description Load and draw multiple random copies of parts of an image.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 *
 * @author Evan Raskob <e.raskob@gold.ac.uk> 2021
 *
 */

///
/// Some inspiration from hellocatfood (Antonio Roberts)
/// https://www.hellocatfood.com/#basquiats-brain
///


let moonwalkImage; // Declare variable 'img'.

let moonfaceImage; // Declare variable for img
let houstonImage; // Decalred a variable for storing the image
let questionImage; // Declared anvariable for storing the image 


// Preload image first so we can draw in setup
//
function preload() {
    moonwalkImage = loadImage('assets/moonwalk.jpg'); // Load the image  
    
    moonfaceImage = loadImage('assets/moonface.jpg'); // Load the moonface image (its Alex Jones)
    houstonImage = loadImage('assets/houston.jpg'); // Load the  houston image
    questionImage = loadImage('assets/question.jpeg'); // Load the question image
}


function setup() {
  createCanvas(720, 400);

  // Displays the original image at its actual size at point (0,0)
  image(moonwalkImage, 0, 0);

  // optional
  blendMode(DIFFERENCE); // I changed the blend mode to something I liked the look of 
    
  
  for (let count = 0; count < 10; count++) {
      drawRandomImageSection(moonwalkImage);
      
      drawRandomImageSection(moonfaceImage);
      drawRandomImageSection(houstonImage);
      drawRandomImageSection(questionImage);
    
  }
    // ^^ I'm drawing the images multiple times so you get semi transparent layers with different hues
    // Since the drawRandomImageSection is made with random, you should get a different amounts and effects of the images each time you refresh the browser tab.
    
}

function draw() {
  noLoop(); // stop draw from running, all drawing happen in setup once
}

/**
 * draw a random part of an image at a random place on the screen
 * {p5.Image} img Image to draw
 */
function drawRandomImageSection(img) {
  
  // Make this work to draw smaller parts of this 
  // image using random numbers for location, width, height, then:

  //--------------------------------
  // More things to do:
  // 1. Keep aspect ratio (width/height)?
  // 2. Cycle through blend modes?
  // 3. Use slightly less random patterns?
  
  let sourceX = 10; // start displaying on the source image at (10,10)
  let sourceY = 10; //  ^^
  let sourceWidth = random(0, img.width/1.5); // Size the image should take up on the source
  let sourceHeight = random(0, img.height/1.5); // ^^ I scalled it down since the images are pretty big

  let destX = random(0, width); // Starting point for the grab
  let destY = random(0, height); // Starting point for the grab
  let destWidth = random(0, img.width); // Grab a random amount of the source image
  let destHeight = random(0, img.height); // Grab a random amount of the source image 
    
    // Note; I know the parameters are flipped, but I decided to keep them the way they are because I already adapted to it and I liked the result I got.

  // Displays the image
  image(img,
    sourceX, sourceY,
    sourceWidth, sourceHeight,
    destX, destY,
    destWidth, destHeight);
    
    tint(random(50, 200), random(50, 200), random(50, 200), 200); 
    // ^ So the image drawn has a random hue to it with a fixed amount of opacity
}

// REFERNCES

// moonFace Image,
// https://www.smithsonianmag.com/smithsonian-institution/yes-united-states-certainly-did-land-humans-moon-180972161/
// Date accessed: 3pm, 11-2-21 (DD-MM-YY)

// houston Image,
// https://gen.medium.com/the-moon-landing-hoax-theory-started-as-a-joke-5a8e66e15d56
// Date accessed: 3:30pm, 11-2-21

// question Image,
// http://www.theshiznit.co.uk/feature/the-moon-a-wretched-hive-of-fun-and-silliness.php
// Date accessed: 4pm, 11-2-21
