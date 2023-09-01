/*
 * @name Vertices and texturing
 * @description Creating a vertex shape for texturing 
 * that can be updated when mouse is pressed.
 * @author Evan Raskob 2021 <e.raskob@gold.ac.uk> 
 * 
 * Image credit: Under the Wave off Kanagawa by Katsushika Hokusai (1830–32) 
 * From https://www.metmuseum.org/art/collection/search/45434 
 * 
 */

let img; // image for texturing
let shapes = [];

///-----------------------------------------------
///--- preload
///-----------------------------------------------
function preload() {
  img = loadImage("assets/wave.jpg");
}


///-----------------------------------------------
///--- setup
///-----------------------------------------------
function setup() {
  createCanvas(320, 240, WEBGL);

  let tempShape = new TexturedShape(img);

  //let aspectRatio = img.height / img.width;
  //console.log(aspectRatio);
  //console.log(img.width + "," + img.height);

  //let destWidth = width / 4;
  //let scaledHeight = destWidth * aspectRatio;
  //console.log(destWidth);
  //console.log(scaledHeight);

  // note that coordinates are counter-clockwise (CCW)
  // (or anti-clockwise)

  // (-w,-h)(0,0) ------------ (w,-h)(1,0)
  //             |            |
  //             |    0,0     |
  //             |            |
  // (-w, h)(0,1) ------------ w,h(1,1)

  tempShape.addVertex(
    new ShapeVertex({x:-width/4, y:-height/4, tx:0, ty:0}));
  tempShape.addVertex(
    new ShapeVertex({x:width/4, y:-height/4, tx:1, ty:0}));
  tempShape.addVertex(
    new ShapeVertex({x:width/4, y:height/4, tx:1, ty:1}));
  tempShape.addVertex(
    new ShapeVertex({x:-width/4, y:height/4, tx:0, ty:1}));

  shapes.push(tempShape);
}


///-----------------------------------------------
///--- draw
///-----------------------------------------------
function draw() {
  background(255);

  // top left
  push();
  noStroke();
  translate(-width / 4, -width / 4);
  fill(0, 255, 0);
  sphere(5);
  pop();

  // bottom right
  push();
  noStroke();
  translate(width / 4, width / 4);
  fill(0, 0, 255);
  sphere(5);
  pop();

  for (let i=0; i<shapes.length; i++)
  {
    drawTextureShape(shapes[i]);
  }
  
  fill(0,200,0,80);

  // get mouse coordinates in 3D (WebGL) space where 0,0,0 is centre
  let mouseCoords = mouseToWorld();
  
  // draw where the mouse is
  ellipse(mouseCoords[0], mouseCoords[1],10,10);
  
  // find any vertices in the shapes that are close to the mouse  
  let closeVerts = findClosestVerticesToPoint(mouseCoords, 20);

  // draw any close vertices
  stroke(0,255,0);
  closeVerts.map( v => ellipse(v.x,v.y, 40,40));

  //
  // Update any close vertices if mouse is pressed
  //
  if (mouseIsPressed)
  {
    closeVerts.map( 
      v => { 
        v.x = mouseCoords[0]; 
        v.y=mouseCoords[1];
      }
    );
  }
}

/**
 * Output a shape as code for copy/pasting later
 * @param {TexturedShape} shape 
 */
function shapeToCode(shape)
{
  let shapeString = 'shape.vertices =\n[';
  for (let vert of shape.vertices)
  {
    let current = '{';
    current += 'x:' + vert.x + ',';
    current += 'y:' + vert.y + ',';
    current += 'tx:' + vert.tx + ',';
    current += 'ty:' + vert.ty + '},';
    
    shapeString += '\n' + current
  }
  shapeString += '\n]';
  console.log(shapeString);
  
  return shapeString;
}

function keyTyped()
{
  if (key === 's' ) {
    shapeToCode(shapes[0]);
  }
}


/**
 * A function to draw a TexturedShape object.
 * @param {Number} texShape shape to draw
 */
function drawTextureShape(texShape) {
  textureMode(NORMAL);
  beginShape();
  texture(texShape.texture);

  // run this function for *all* vertex objects in this array
  texShape.vertices.map(function (vert) {
    // current object in the array
    vertex(vert.x, vert.y, vert.tx, vert.ty);
  });
  endShape();
}

/**
 * Get the mouse coordinates in 3D space (0,0,0 in centre of screen)
 * This doesn't REALLY work because you need to check for depth...
 * @return an array with mouse [x,y]
 */
function mouseToWorld()
{
  return [mouseX-width/2, mouseY-height/2];
}

/**
 * Find all the closest vertices to a given point in 3D space,
 * based on 2D distance.
 * @param {Number} param0 
 * @param {Number} radius
 * @returns {Array} Array of closes point objects {x,y,tx,ty} 
 */
function findClosestVerticesToPoint([x, y], radius) {
  let closestVertices = [];

  // Advanced stuff! Instead of using loop index counters,
  // just get *each* element in the shapes array in sequence
  // and call it "shape"
  for (let shape of shapes) {
    // let's add any vertices to our array using concat
    closestVertices = closestVertices.concat(
      // this is new: filter takes a true/false test
      // and returns only vertices that pass the test
      shape.vertices.filter((v) => dist(x, y, v.x, v.y) < radius)
    );
  }
  // uncomment to get some feedback:
  // console.log(closestVertices);

  return closestVertices;
}
///--- end findClosestVerticesToPoint----------------

class ShapeVertex {
  constructor({x,y,z,tx,ty}) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.tx = tx;
    this.ty = ty; 
  }
}


/**
 * A class to hold some basic 2D shape information -
 * texture, and x,y and texture coordinates.
 */
class TexturedShape {
  constructor(textureImage) {
    this.vertices = [];
    this.texture = textureImage;
  }

  /**
   * 
   * @param {ShapeVertex} shapeVertex 
   */
  addVertex(shapeVertex) {
    this.vertices.push(shapeVertex);
  }

  /**
   * set just the texture coordinates in the array by index
   * @param {Integer} index 
   * @param {Number} tx 
   * @param {Number} ty 
   */
  setTextureCoords(index, tx, ty) {
    this.vertices[index].tx = tx;
    this.vertices[index].ty = ty;
  }

  setVertex(index, shapeVertex) {
    this.vertices[index] = shapeVertex;
  }
}
///--- end TexturedShape class ----------------