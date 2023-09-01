/**
 * @name parent_child_objects
 * @description Demonstrating inheritance in 3D: a simple scene graph (with slider).
 * @author Evan Raskob <e.raskob@gold.ac.uk>, 2021
 */

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
    if (!drawFunction)
    {
      throw "new SceneObject: No drawing function passed in!";
    }

    // a function to draw this object.
    // use _ because it's internal!
    this._drawFunction = drawFunction; 
    
    // a list of *other* SceneObjects to draw after this one  
    this.children = [];
  }

  draw()
  {
    push(); // save drawing state (push matrix onto stack)

    this._drawFunction(); // draw ourself!

    // draw all children:
    for (let childIndex = 0; childIndex < this.children.length; childIndex++)
    {
      this.children[childIndex].draw();
    }

    // this is another way to do this using ES6:
    // for (let child of this.children)
    // {
    //   child.draw();
    // }

    pop(); // return to drawing state (push matrix onto stack)

  }
// end SceneObject
} 


let rotationSlider;

function setup() {
  createCanvas(320, 240, WEBGL);

  rotationSlider = createSlider(0,100);
  
  // how cool is this: we can put a new function
  // in a function as an argument! (It has no name)
  rootObject = new SceneObject(
    function() {
      colorMode(HSB);
      fill(40,80,80,40);
      box(width/5, height/10, height/10); // draw box

      // move drawing centre to end of box
      translate(width/5,0);
    }
  );

  // this object will inherit the drawing state from rootObject (parent)
  let childObject = new SceneObject(
    function() {
      colorMode(HSB);
      fill(120,80,80,40);
      rotate(
        map(rotationSlider.value(),0,100,-PI,PI),
       [0,0,1]
       );
      box(width/10, height/20, height/20); // draw box

      // move drawing centre to end of box
      translate(width/10,0);
    }
  );


  // add to our root object
  rootObject.children.push(childObject);

  // create another one, for fun:
  let childObject2 = new SceneObject(
    function() {
      colorMode(HSB);
      fill(180,80,80,40);
      rotate(PI/6, [0,0,1]); // rotation is from centre!
      box(width/10, height/20, height/20); // draw box

      // move drawing centre to end of box
      translate(width/10,0);
    }
  );


  // Now add to our child object
  childObject.children.push(childObject2);
}

/**
 * This is simple -- we only draw the root, and the rest get drawn automatically!
 */
function draw() {

  background(255);

  // draw root (parent) node
  rootObject.draw();
}

