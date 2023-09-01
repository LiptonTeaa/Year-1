/**
 * 
 * Image function reference: https://p5js.org/reference/#group-Image
 *  
 * by Evan Raskob 2021 <e.raskob@gold.ac.uk>
 */


///--- THE ASSIGNMENT ---------------------------
///
/// You will use the collage or photomontage art technique
/// to gain experience using different imaging techniques,
/// so you can understand what they do and how to apply them 
/// in practice.
/// 
/// 0. Have a conversation with a group member about their hobbies,
///  dreams, etc. and write down some keywords (cats, football, activism, etc.). 
/// 1. Find some images to use from public domain or Creative Commons 
///    sources (see below) 
/// 2. Using this sketch for inspiration (good or bad), using those images
///    to make a cut-and-paste collage or 'photomontage'
/// 3. Make sure to use one or more:
///   - filters
///   - blend modes   
///   - copying parts of images (see function drawAngelaEye() below)
///   - for much more advanced copying, trying coping from the image pixels[]
///     array directly onto the canvas, or into a new image.
/// 4. For a more advanced task, try tinting the images according to a colour scheme,
///   and drawing more complex patterns using translate and rotate.
/// 5. Another advanced task is to use shape and texture coordinates
///   to crop and scale your composite images.
/// 
/// NOTES: This is fun if you use images with transparent backgrounds, 
///   like nose.png. You can use GIMP or PhotoShop or other means to edit the 
///   images, although this isn't a requirement.


/// ----- 1. Put some images here! -------------
/// You need to download them from somewhere, try and find
/// a source that has proper usage rights (Creative Commons 
/// non-commercial, or public domain)

/// ---- MAKE SURE TO PUT THE URL YOU FOUND THEM AT HERE, 
/// ---- OR LET US KNOW THE SOURCE ------------------------

// source: https://www.dreamstime.com/fat-man-shaggy-beard-fat-man-shaggy-beard-obese-people-dangers-belly-fat-fat-man-big-belly-men-image164241385
let fatMan; // fat man the other images are being placed onto

// source: https://patch.com/new-jersey/longvalley/can-your-cats-eyes-change-color
let cat; // cat eyes

// source:https://www.dailymail.co.uk/sciencetech/article-5520107/Most-people-identify-emotions-based-face-color.html
let face; // blurry face imposed onto fat man

/// --- PRELOAD ------------------------
/// This is useful to load an image  or do a task that is important to run
/// *before* the sketch is loaded. preload() runs once *before* setup

function preload() {  
  // load images from the assets folder
  fatMan = loadImage('assets/fatman.jpg');

  cat = loadImage('assets/cat.jpg');

  face = loadImage('assets/face.jpg');

  pixelDensity(1); // if you are on a very large screen, this can
  // help your images scale to the proper size when drawn
}


/// Setup -------------------------

function setup() {  

  createCanvas(fatMan.width, fatMan.height); // create a canvas EXACTLY the size of our image

}


/**
 * @param {Number} x center coordinate on canvas to start drawing 
 * @param {Number} y center coordinate on canvas to start drawing 
 * @param {Number} w (optional) width of image to draw on canvas 
 * @param {Number} h (optional) height of image to draw on canvas
 */
function drawLeftEye(x,y, w,h)
{
  // https://p5js.org/reference/#/p5/image

  image(cat, x-w/2,y-h/2, // subtracting 1/2 the dimensions 
                             // centers the image
                w,h,              
                309,189, // start coordinates of the cats left eye 
                309,278 // width and height of eye    
    );
}

function drawRightEye(x,y, w,h)
{
  image(cat, x-w/2,y-h/2, // subtracting 1/2 the dimensions 
                             // centers the image
                w,h,              
                968,203, // start coordinates of the cats right eye 
                297,252 // width and height of eye    
    );
}


/**
 * Draw a mask image onto the screen using SCREEN blend mode.
 * This means the black parts of this image will white out the
 * pixels below it, and the white parts of this image will let the 
 * pixels below show through unaltered.
 * 
 * @param {p5.Image} img Mask image
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} w 
 * @param {Number} h 
 */
function drawMask(img, x, y, w, h){
    // or try screen
    img.filter(BLUR,0.5);
    blendMode(SCREEN);
    imageMode(CENTER); // draw using center coordinate
    image(img, x, y, w, h);
}

///-----------------------------
///--- DRAW --------------------
///-----------------------------

function draw() {

  tint(255,255); // reset tint to full color and no transparency

  // make it so images don't blend, they replace what is under them
  blendMode(REPLACE);

  imageMode(CORNER);
    
  // draw the image to fill the canvas exactly
  image(fatMan, 0, 0);  

  // draw the mask image onto the background image
  drawMask(face, width/2, height/2, width, height);
  
  // blend using transparency (alpha)
  blendMode(BLEND);
  colorMode(RGB);

  tint(255,180); // make everything after this a little transparent
    
  imageMode(CORNER); // Keeps my trnaslated eyes from moving about with the mask applied

  // draw cropped eyes
  drawLeftEye(width/3, height/3, 100,80);
  drawRightEye(width/1.3, height/3, 100,80);

  // Draw upside-down eyes.

  // save current drawing state
  push();
  // Move to designed drawing position
    translate(1.9*width/3.1, height/5);
    // rotate cat eyes 180 degrees (PI)
    rotate(PI);
    // draw at current drawing position
    drawRightEye(0, 0, 100,80);

    // draw one beside it (we're upside-down now!)
    drawLeftEye(0+100, 0, 100,80);

    // reset transformations (drawing state) to original
  pop();

} // end draw()
