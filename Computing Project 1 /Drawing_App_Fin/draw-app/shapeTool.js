/*
    1. Plot out a shape as a series of vertices, 
        * Add a button switching between creating new vertices and editing.
        * Click the canvas to add a vertex.
        * Don't draw right away, add vertex to an array, then draw but don't save to canvis.
        ( We cant draw right away to the canvis, we use updatePixels every frame to edit our shape first by saving the vertices to an array and then use loadPixels to finally save the vertices to our pixel array which draws to our canvas )
    
    2. Edit the vertices using a mouse drag,
        * If editing is on;
        * Highlight the location of the verticies (for the shape currently being drawn that can be edited)
        * when mouse pressed is near an editable vertex, (using dist function) update the vertex x and y with the mouseX and mouseY (basically being able to drage the vertex around) 
    
    3. Confirm the final shape.
*/

function ShapeTool()
{ 

this.name = "shapeTool";
this.icon = "assets/shape.jpeg";

var editButton;
var finishButton;

var editMode = false;
var currentShape = [];

    
    noFill();
    loadPixels(); 

    // I took this method of putting things into the options elements from mirrorDraw
    // I can't get both buttons to populate next to eachother in the options elements
    
//    this.populateOptions = function() {
//		select(".options").html(
//			"<button id='directionButton'>Edit Shape</button>");
//		//click handler
//		select("#directionButton").mouseClicked(function() {
//			var button = select("#" + this.elt.id);
//			if ( editMode == true) {
//				
//                editMode = false;
//				button.html('Edit Shape');
//                
//			} else {         // Switches the text on the button and the mode
//				
//                editMode = true;
//				button.html('Add Vertices');
//			}
//		});
//	};
  
    
//    this.populateOptions = function() {
//		select(".options").html(
//			"<button id='directionButton'>finish shape</button>");
//		//click handler
//		select("#directionButton").mouseClicked(function() {
//			var button = select("#" + this.elt.id);
    
    // I need this seperated portion in the reference to the options class
//			if (self.axis == "x") {
//				self.axis = "y";
//				self.lineOfSymmetry = height / 2;
    
//                editMode = false;
//                this.draw();
//                loadPixels();
//                currentShape = [];
//				button.html('Make Vertical');
//			}
//		});
//	};
    
    editButton = createButton('Edit Shape');
    
    editButton.mousePressed(function(){
        if (editMode) // editMode == true
            {
                editMode = false;
                editButton.html("Edit Shape");
            }
        else    // Switches the text on the button and the mode 
            {
                editMode = true;
                editButton.html("Add Vertices");
            }
    })
    
    
    finishButton = createButton('finish shape');
    
    finishButton.mousePressed(function(){
        editMode = false;
        draw(); // Manually calling draw here will redraw the canvas with the red ellipse, SHouldn't this have been this.draw?
        loadPixels();
        currentShape = []; // Clearing the array to start a new shape 
    })


this.draw = function()
{   // Calling updatePixels here will stop the dragged vertex from being repeatedly drawn in edit mode
    updatePixels();                               // mouseIsPressed built into p5 like mouseX or mousePressed
    if ( this.mousePressOnCanvas(c) && mouseIsPressed) // mouseIsPressed will become true next time draw is called
        {
            if (!editMode) // editMode == false
            { 
                currentShape.push({  // We're pushing an object to the array,
                    x: mouseX,       // our current mouse coordinates to draw our lines 
                    y: mouseY
                });
            }
            else
            {   // In the else we're grabbing our vertex and updating its position to our mouse's current position
                for ( var i = 0; i < currentShape.length; i++)
                    {
                        if ( dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15)
                            {
                                currentShape[i].x = mouseX;
                                currentShape[i].y = mouseY;
                            }
                    }
            }
        }
    
    beginShape();   // This is where our lines are being drawn and their red ellipse in edit mode
    
    for ( var i = 0; i < currentShape.length; i++)
        {
            vertex(currentShape[i].x, currentShape[i].y);
            if (editMode)
                {
                    fill('red');
                    ellipse( currentShape[i].x, currentShape[i].y, 10);
                    noFill();
                }
        }
    
    endShape();
};

// This function will check if our mouse pressed is in our canvas's area or not
this.mousePressOnCanvas = function(c)
{

    // I was initally doing this by passing it a new canvas before but I seem to have figured it out now.
    
    if ( mouseX > c.elt.offsetLeft &&
         mouseX < (c.elt.offsetLeft + c.width) &&
         mouseY > c.elt.offsetTop &&
         mouseY < (c.elt.offsetTop + c.height) )
        {
            return true;
        }
    return false;
}

} // End of shapeTool function