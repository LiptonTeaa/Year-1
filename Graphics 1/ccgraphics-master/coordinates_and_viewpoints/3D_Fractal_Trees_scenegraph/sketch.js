/**
 * @description 3D tree, recursively using  simple scene graph.
 * @author Evan Raskob <e.raskob@gold.ac.uk> 2021
 * @license Creative Commons Attribution share-alike 3.0
 *
 **/


let angleSlider;
let levels = 6; // how many levels to draw down

let rootObject; // main (parent) object of this scene

/**
 * This is a basic object that can be drawn to the screen,
 * with a list of "children" that are drawn after it. It
 * is also a basic tree data structure (with only "child"
 * information stored, not "parents")
 */
class SceneObject {
  /**
   * constructor
   * @param {Function} drawFunction The function that draws this
   */
  constructor(drawFunction) {
    // do some error checking if nothing passed in
    if (!drawFunction) {
      throw "new SceneObject: No drawing function passed in!";
    }

    // a function to draw this object.
    // use _ because it's internal!
    this._drawFunction = drawFunction;

    // a list of *other* SceneObjects to draw after this one
    this.children = [];
  }

  draw() {
    push(); // save drawing state (push matrix onto stack)

    this._drawFunction(); // draw ourself!

    // draw all children:
    // for (let childIndex = 0; childIndex < this.children.length; childIndex++)
    // {
    //   this.children[childIndex].draw();
    // }

    // this is another way to do this using ES6:
    for (let child of this.children) {
      child.draw();
    }

    pop(); // return to drawing state (push matrix onto stack)
  }
  // end SceneObject
}

function setup() {
  createCanvas(320, 200, WEBGL);
  angleSlider = createSlider(0, TWO_PI, PI / 4, 0.01);

  // build tree
  rootObject = buildTreeNode(levels);
}

function draw() {
  colorMode(HSB);

  //lights();

  translate(0,width/8);

  background(0);
  push();
  fill(180,100,100);
  stroke(200,100,100);
  rootObject.draw();
  pop();

  push();
  rotate(PI, [0, 1, 0]);
  fill(190,100,100);
  stroke(200,100,100);
  rootObject.draw();
  pop();

  push();
  rotate(PI/3, [0, 1, 0]);
  fill(60,80,100);
  stroke(200,100,100);
  rootObject.draw();
  pop();

  push();
  rotate(-PI/3, [0, 1, 0]);
  fill(200,60,60);
  stroke(200,100,100);
  rootObject.draw();
  pop();

  push();
  rotate(-2*PI/3, [0, 1, 0]);
  fill(210,60,60);
  stroke(200,100,100);
  rootObject.draw();
  pop();
}

/**
 * Build a tree-like scene of parent/child "branch" objects, recursively.
 * @param {Number} currentLevel The current level (from root to branch, large to small)  
 */
function buildTreeNode(currentLevel) {
  
  // NOTE: currentLevel will decrease every time we run this.

  // we don't want to run forever!
  // end if levels are too small
  if (currentLevel < 2) return null;


// this is the draw() function for this branch. We create it
// on-the-fly.
  let branchDrawFunction = function () {
    let scaleDown = 3 / 4; // fraction of size for child branches
    let length = 8; // length multiplier for each branch (y)

    // draw branch
    box((currentLevel * length) / 3, currentLevel * length, (currentLevel * length) / 3);
    // move to end of branch
    translate(0, -currentLevel * length);

    // next branch is slightly rotated from its centre
    translate(0, (currentLevel * length * scaleDown) / 2);
    rotate(angleSlider.value());
    translate(0, (-currentLevel * length * scaleDown) / 2);
  };

  let branchNode = new SceneObject(branchDrawFunction);

  let childNode = buildTreeNode(currentLevel - 1);
  if (childNode) branchNode.children.push(childNode);

  return branchNode;
}
