function Eraser()
{
	
    this.name = "eraser";
	this.icon = "assets/eraser.jpg";
    
    var x = 5;
    
    //loadPixels();
    
    // Taken from brush to adjust eraser size.
    this.populateOptions = function()
    {
		select(".options").html(
			'<input type="range" min="5" max="80" value="1" class="slider" id="myRange">');
        
		//click handler
		select("#myRange").mouseClicked(function() {
            x = (myRange.value); // This should pass the value from our slider to the size variable
            });
	};
     
    this.eraserSize = function (){
        
        // Fill set to white to act as an eraser
                fill(255,255,255);
        
        // noStroke becasue setting a stroke leaves the outline behind
    			noStroke(0,0,0);

        // Eraser size set and adjusted to be centered around the mouse
                square(mouseX - x/2, mouseY - x/2, x);

    }
    
    
    
    this.draw = function(){

        // Will draw white squares onto the canvas to mimic an eraser 
			if (mouseIsPressed) {
                
                //updatePixels();
                this.eraserSize();

		  	}
    }


    // This wroks fine for the most part but you need to pick a colour after switching to a different tool to get the tools going again.
    
} // End of function 