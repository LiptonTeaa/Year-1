function Rectangle()
{
	
    this.name = "rectangle";
	this.icon = "assets/rectangle.jpg";

    // Negitive starting values so there aren't any accidental shapes made without clicking after selecting the tool
    var startX = -1;
	var startY = -1;
	var drawing = false;

    // Rectangles drawn in this function
	this.draw = function(){
           
		if (mouseIsPressed == true) // Only draw on mouse click
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
				
                // Draws Shape
				rect(startX, startY, mouseX/2, mouseY/2);
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
