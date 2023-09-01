function CorgiButt()
{
    this.name = "corgiButt";
    this.icon = "assets/butt.jpeg";
    
    // Loading BUTTS here
    var img =  loadImage("assets/buttP.jpeg"); 
    
    // Variable to store butt in after .get used on img
    var container;
    
    this.draw = function()
    {
        // Nested for loop to draw butt
        for ( var i = 0; i < img.width; i += 2)
            {
                for ( var j = 0; j < img.height; j += 2)
                    {
                        container = img.get(i, j); // Passing butt pixels to container
                        stroke( color(container)); // Setting the stroke to be butt pixel coloured
                        
                        // Perfect value, higher pixelates the butt and the pixels arent properly drawn if any lower
                        strokeWeight(4); 
                        
                        // Drawing the butt as individual pixels using the nested loop
                        point(i, j);
                    }
            }
    }
    
} // End of function