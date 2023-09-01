/**
 * @name parent_child_objects
 * @description Demonstrating inheritance in 3D: a simple scene graph.
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


function preload()
{
    img = loadImage('texture.jpg'); // Loading up the texture we're going to be using 
    
    // Source for texture: https://www.dreamstime.com/stock-images-white-crumpled-paper-texture-background-image28688694
}


function setup() {
  createCanvas(520, 440, WEBGL);

  // how cool is this: we can put a new function
  // in a function as an argument! (It has no name)
  rootObject = new SceneObject(
    function() {
      colorMode(HSB);
        
      texture(img);    // Adding texture to our parent box
        
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
      rotateZ(PI/6);
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
      rotate(PI/8, [1,0,0]); // rotation along the x axis
      box(width/10, height/20, height/20); // draw box

      // move drawing centre to end of box
      translate(width/10,0);
    }
  );


  // Now add to our child object
  childObject.children.push(childObject2);
    

    //Adding 3rd child to parent class
  let childObject3 = new SceneObject(
    function() {
      colorMode(HSB);
      fill(80,180,120,40);
      rotate(PI/6); // rotation along the x axis
      sphere(width/25, 3, 24); // draw a irregular sphere

      // move drawing centre to end of box
      translate(width/10,0);
      push();
    }
  );


  // Now add to our child object
  childObject.children.push(childObject3);
    
    
    // Adding our 4th child to parent 
    let childObject4 = new SceneObject(
    function() {
      pop();
      colorMode(HSB);
      fill(80,180,180,40);
      texture(img);
      rotate(PI/2, [0,1,0]); // rotation along the y axis
      torus(width/10, height/50); // draw a dount
        
      // Failed attempts at moving the shape 
      translate(width/2,height/5);
          
      //translate( map(childObject4, 0, 320, -width/2, width/2), 0);
     
    }
  );


  // Now add to our child object
  childObject.children.push(childObject4);



  // WARNING! NEVER put a child object back inside it's 
  // parent! That will create a circular reference that will 
  // crash your browser because it will draw the parent, then
  // child, then parent, then child... forever.
}

/**
 * This is simple -- we only draw the root, and the rest get drawn automatically!
 */
function draw() {

  background(255);

  // draw root (parent) node
  rootObject.draw();
    
  // Looking at the sketch from above, slightly to the left    
  camera(-150, -250, 300, 0, 0, 0, 0, 1, 0);
    
}

// As for inspiration, it isn't much but I'm linking a screenshot from cyberpunk 2077 that demonstrates its raytracing capabilities. I like how the textures are done but especiallt how the light reflects of the wet road because of the lights sources around it.
// Screenshot: https://media.techeblog.com/images/cyberpunk-2077-ray-tracing-nvidia.jpg
