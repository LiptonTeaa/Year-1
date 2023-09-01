function Brush(){
	
    this.name = "brush";
	this.icon = "assets/brush.jpg";
	
    var size = 5;
    
    // So the ellipses drawn don't have outlines
    noFill(); 
    updatePixels();

    // Based on populate options from mirrorTool
    
    // Placed here so we have a value for our ellipses before the draw function is called 
    
    //Creates a HTML Slider with set values, this will allow us to change the size of the ellipses drawn
	this.populateOptions = function()
    {
		select(".options").html(
			'<input type="range" min="5" max="50" value="1" class="slider" id="myRange">');
        // Setting the value to 1 makes the slider start from the beginning
        
		//click handler
		select("#myRange").mouseClicked(function() {
            size = (myRange.value); // This should pass the value from our slider to the size variable
            });
	};
    
    this.draw = function()
    {
        if (mouseIsPressed) // Draw on click
        {
                loadPixels();
                
                //fill(255,0,255);
                ellipse( mouseX, mouseY, size);
                noStroke();

        }

    }
    
    
    // NOTE,
    // For whatever reason I couldn't get it to draw without picking a colour from the colour palatte first. 
    
    
} // End of Function