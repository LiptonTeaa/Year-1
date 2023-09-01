function Oval()
{
	
    // Similar to retangle.js, but it draws ovals
    
    this.name = "oval";
	this.icon = "assets/oval.png";
    
    // Negitive values to avoid accidental drawing 
    var startX = -1;
	var startY = -1;
	var drawing = false;

    
	//draws the line to the screen 
	this.draw = function()
    {

		if (mouseIsPressed == true) // Only draw on mouse click (click and hold, false once released)
        {
			// Check for the anit-accident values passed in setup before (first shape after tool selection)
			if (startX == -1)
            {
                drawing = true;
				startX = mouseX;
				startY = mouseY;
                
				// Save the current pixel Array
				loadPixels();
                
			}
			else
            {
				// Update the canvas with the saved pixels of shapes previoulsy drawn
				updatePixels();
                
				// Draws shape (ovals in this case, any kind of round shape really)
				ellipse(startX, startY, mouseX/2, mouseY/2); 
                // The size is divided by 2 because it has to be scalled someway
            
			}

		}
		else if (drawing == true)
        {
			// Save the most recent shape and reset the values to the setup ones
			loadPixels();
			startX = -1;
			startY = -1;
            drawing = false;
            
		}
        
	};
}
