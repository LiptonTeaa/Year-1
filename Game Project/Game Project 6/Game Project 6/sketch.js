/*

The Game Project 6 - Side scrolling

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;

var canyons;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    
    trees_x = [-900,-400,100,500,900,1100,1800];
    
    clouds = [
        {x_pos: 0, y_pos: 45},
        {x_pos: 120, y_pos: 150},
        {x_pos: 600, y_pos: 70},
        {x_pos: -600, y_pos: 60},
        {x_pos: -800, y_pos: 130},
        {x_pos: 900, y_pos: 80},
        {x_pos: 1400, y_pos: 100},
        {x_pos: 1600, y_pos: 20},
    ];
    
    mountains = [
        {x_pos: 50, y_pos: floorPos_y},
        {x_pos: -500, y_pos: floorPos_y},
        {x_pos: 800, y_pos: floorPos_y},
        {x_pos: 200, y_pos: floorPos_y},
        {x_pos: -800, y_pos: floorPos_y}
    ];
    
    canyons = [
        {x_pos: 170, width: 90},
        {x_pos: 700, width: 90},
        {x_pos: 1200, width: 90},
        {x_pos: -700, width: 90}
    ];
    
    collectables = [
        {x_pos: 358, y_pos: 412, size: 0},
        {x_pos: 658, y_pos: 412, size: 0},
        {x_pos: 1500, y_pos: 412, size: 0},
        {x_pos: -730, y_pos: 412, size: 0}
    ];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.
    
    push();
    translate(scrollPos, 0);
    
    console.log(clouds[2].x_pos);
    
    for (var i = 0; i < clouds.length; i++){
        
        fill(255,255,255);                     
        rect(clouds[i].x_pos + 180, clouds[i].y_pos, 130,40,20);
        ellipse(clouds[i].x_pos + 200, clouds[i].y_pos + 10, 30,30);
        ellipse(clouds[i].x_pos + 221, clouds[i].y_pos + 7, 38,38);
        ellipse(clouds[i].x_pos + 250, clouds[i].y_pos + 5, 45,45);
        ellipse(clouds[i].x_pos + 275, clouds[i].y_pos + 10, 60,60);
    }

    pop();
    
	// Draw mountains.
    
    push();
    translate(scrollPos, 0);

    for (var i = 0; i< mountains.length; i++){
    
        noStroke(); 
        fill(112,128,144);
        beginShape();                               
            vertex(mountains[i].x_pos, mountains[i].y_pos);
            vertex(mountains[i].x_pos + 80, mountains[i].y_pos - 132);
            vertex(mountains[i].x_pos + 200, mountains[i].y_pos - 82);
            vertex(mountains[i].x_pos + 400, mountains[i].y_pos - 332);
            vertex(mountains[i].x_pos + 550, mountains[i].y_pos - 32);
            vertex(mountains[i].x_pos + 700, mountains[i].y_pos - 132);
            vertex(mountains[i].x_pos + 750, mountains[i].y_pos - 72);
            vertex(mountains[i].x_pos + 900, mountains[i].y_pos - 312);
            vertex(mountains[i].x_pos + 1024, mountains[i].y_pos);
        endShape();

        noStroke();
        fill(119,136,153);
        triangle(mountains[i].x_pos + 200, mountains[i].y_pos,
                 mountains[i].x_pos + 400, mountains[i].y_pos - 282,
                 mountains[i].x_pos + 550, mountains[i].y_pos);
        noStroke();
        fill(119,136,153);
        triangle(mountains[i].x_pos + 750, mountains[i].y_pos,
                 mountains[i].x_pos + 900, mountains[i].y_pos - 282,
                 mountains[i].x_pos + 1024, mountains[i].y_pos);
        noStroke();
        fill(119,136,153);
        triangle(mountains[i].x_pos + 540, mountains[i].y_pos,
                 mountains[i].x_pos + 700, mountains[i].y_pos - 112,
                 mountains[i].x_pos + 780, mountains[i].y_pos);
    }
    
    pop();
    
	// Draw trees.
    
    push();
    translate(scrollPos, 0);
    
    for (var i = 0; i < trees_x.length; i++){
        
        fill(169,169,169);
        rect(trees_x[i] - 33, floorPos_y, 10, -40); //1st tree
        rect(trees_x[i] - 5, floorPos_y, 10, -60); //2nd tree  
        rect(trees_x[i] + 23, floorPos_y, 10, -40); //3rd tree

        fill(60,179,113);
        triangle(trees_x[i] - 43, floorPos_y - 32,
                 trees_x[i] - 28, floorPos_y - 62,
                 trees_x[i] - 14, floorPos_y - 32);
        triangle(trees_x[i] - 16, floorPos_y - 47,
                 trees_x[i], floorPos_y - 82,
                 trees_x[i] + 15, floorPos_y - 47);
        triangle(trees_x[i] + 13, floorPos_y - 32,
                 trees_x[i] + 28, floorPos_y - 62,
                 trees_x[i] + 43, floorPos_y - 32);

        fill(0,250,154);
        triangle(trees_x[i] - 43, floorPos_y - 42,
                 trees_x[i] - 28, floorPos_y - 67,
                 trees_x[i] - 14, floorPos_y - 42);
        triangle(trees_x[i] - 16, floorPos_y - 60,
                 trees_x[i], floorPos_y - 87,
                 trees_x[i] + 15, floorPos_y - 60);
        triangle(trees_x[i] + 13, floorPos_y - 42,
                 trees_x[i] + 28, floorPos_y - 67,
                 trees_x[i] + 43, floorPos_y - 42);

        fill(143,188,143);
        triangle(trees_x[i] - 43, floorPos_y - 52,
                 trees_x[i] - 28, floorPos_y - 72,
                 trees_x[i] - 14, floorPos_y - 52);
        triangle(trees_x[i] - 16, floorPos_y - 70,
                 trees_x[i], floorPos_y - 92,
                 trees_x[i] + 15, floorPos_y - 70);
        triangle(trees_x[i] + 13, floorPos_y - 52,
                 trees_x[i] + 28, floorPos_y - 72,
                 trees_x[i] + 43, floorPos_y - 52);
    }
    
    pop();

	// Draw canyons
    
    push();
    translate(scrollPos, 0);
    
    for (var i = 0; i < canyons.length; i++){
        
        console.log( canyons[i].x_pos);
        fill(0,0,0,100);
        rect(canyons[i].x_pos,432,canyons[i].width,50);

        fill(0,0,0,150);
        rect(canyons[i].x_pos,482,canyons[i].width,40);

        fill(0,0,0,200);
        rect(canyons[i].x_pos,522,canyons[i].width,40);

        fill(0,0,0,250);
        rect(canyons[i].x_pos,562,canyons[i].width,14);
    }
    
    pop();

	// Draw collectables[i] items
    
    push();
    translate(scrollPos, 0);
    
    for (var i = 0; i < collectables.length; i++){
    
        fill(255);
        rect(collectables[i].x_pos, collectables[i].y_pos, 5 + collectables[i].size, 12 + collectables[i].size, 30); 

        fill(255,0,0);
        ellipse(collectables[i].x_pos + 2, collectables[i].y_pos - 2, 20 + collectables[i].size, 12 + collectables[i].size);

        fill(255,165,0)
        ellipse(collectables[i].x_pos - 3, collectables[i].y_pos - 3, 4 + collectables[i].size, 4 + collectables[i].size);
        ellipse(collectables[i].x_pos + 2, collectables[i].y_pos, 3 + collectables[i].size, 3 +  collectables[i].size);
        ellipse(collectables[i].x_pos + 7, collectables[i].y_pos - 3, 5 + collectables[i].size, 5 + collectables[i].size);
    }
    
    pop();

	// Draw the game character - this must be last
    pop();
    
    fill( 139, 0 ,0);                                        // Colour
    rect( gameChar_x - 7, gameChar_y - 43, 15, 30, 5);       // Torso
    rect( gameChar_x - 13, gameChar_y - 43, 10, 7);          // Left Shouder
    rect( gameChar_x + 4, gameChar_y - 43, 10, 7);           // Right Shoulder
    rect( gameChar_x - 12, gameChar_y - 38, 4, 18);          // Left Arm
    rect( gameChar_x + 9 , gameChar_y - 38, 4, 18);          // Right Arm
    rect( gameChar_x - 6, gameChar_y - 15, 5 , 18);          // Left Leg
    rect( gameChar_x + 2, gameChar_y - 15, 5 , 18);          // Right Leg
    ellipse ( gameChar_x + 0.5, gameChar_y - 48 , 9, 12);    // Head
    ellipse( gameChar_x - 3.5, gameChar_y - 8, 6, 6);     // Left Knee
    ellipse( gameChar_x + 4.5, gameChar_y - 8, 6, 6);     // Right Knee
    stroke(0);
    line( gameChar_x + 0.5, gameChar_y - 46, gameChar_x + 0.5, gameChar_y - 49); //Nose


	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
