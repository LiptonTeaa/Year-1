/*

The Game Project - 4

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var drop;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    drop = false;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    
    fill(0,0,0,100);
    rect(160,432,90,50);
    
    fill(0,0,0,150);
    rect(160,482,90,40);
    
    fill(0,0,0,200);
    rect(160,522,90,40);
     
    fill(0,0,0,250);
    rect(160,562,90,14);


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        
        fill( 139, 0, 0);
        rect( gameChar_x - 6.5, gameChar_y - 49, 11, 30, 5);
        stroke(0);
        rect( gameChar_x - 6.5, gameChar_y - 49, 11, 10);
        noStroke();
        rect( gameChar_x - 17, gameChar_y - 46.5, 10, 5);
        rect( gameChar_x - 3.5, gameChar_y - 20 , 5, 7);
        ellipse( gameChar_x - 1, gameChar_y - 54, 9, 12);
        triangle( gameChar_x - 5, gameChar_y - 52, gameChar_x - 5 , gameChar_y - 56, gameChar_x - 10, gameChar_y - 52);
        ellipse( gameChar_x - 1, gameChar_y - 11, 7.5, 7.5);
        rect( gameChar_x - 3.5, gameChar_y - 13, 16, 5);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        
        fill( 139, 0, 0);
        rect( gameChar_x - 6.5, gameChar_y - 49, 11, 30, 5);  
        stroke(0);
        rect( gameChar_x - 6.5, gameChar_y - 49, 11, 10);
        noStroke();
        rect( gameChar_x + 5, gameChar_y - 46.5, 10, 5);
        rect( gameChar_x - 3.5, gameChar_y - 20 , 5, 7); 
        ellipse( gameChar_x - 1, gameChar_y - 54, 9, 12);
        triangle( gameChar_x + 2, gameChar_y - 52, gameChar_x + 2 , gameChar_y - 56, gameChar_x + 8, gameChar_y - 52);
        ellipse( gameChar_x - 1, gameChar_y - 11, 7.5, 7.5);
        rect( gameChar_x - 15, gameChar_y - 13, 16, 5);


	}
	else if(isLeft)
	{
		// add your walking left code
        
        fill( 139, 0, 0);
        rect( gameChar_x - 6.5, gameChar_y - 44, 11, 30, 5);
        stroke(0);
        rect( gameChar_x - 6.5, gameChar_y - 44, 11, 10);
        rect( gameChar_x - 3.5, gameChar_y - 34, 5, 15);
        noStroke();
        rect( gameChar_x - 3.5, gameChar_y - 15, 5, 18);
        ellipse( gameChar_x - 1, gameChar_y - 49, 9, 12);
        triangle( gameChar_x - 5, gameChar_y - 47, gameChar_x - 5 , gameChar_y - 51, gameChar_x - 10, gameChar_y - 47);
        ellipse( gameChar_x - 2.5, gameChar_y - 8, 5, 5);

	}
	else if(isRight)
	{
		// add your walking right code
        
        fill( 139, 0, 0);
        rect( gameChar_x - 6.5, gameChar_y - 44, 11, 30, 5);
        stroke(0);
        rect( gameChar_x - 6.5, gameChar_y - 44, 11, 10);
        rect( gameChar_x - 3.5, gameChar_y - 34, 5, 15);
        noStroke();
        rect( gameChar_x - 3.5, gameChar_y - 15, 5, 18);
        ellipse( gameChar_x - 1, gameChar_y - 49, 9, 12);
        triangle( gameChar_x + 2, gameChar_y - 47, gameChar_x + 2 , gameChar_y - 51, gameChar_x + 8, gameChar_y - 47);
        ellipse( gameChar_x + 0.5, gameChar_y - 8, 5, 5);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        fill( 139, 0 ,0);
        rect( gameChar_x - 7, gameChar_y - 48, 15, 30, 5);       
        rect( gameChar_x - 13, gameChar_y - 48, 10, 7);          
        rect( gameChar_x + 4, gameChar_y - 48, 10, 7);          
        rect( gameChar_x - 18, gameChar_y - 47, 5, 5);
        rect( gameChar_x + 14, gameChar_y - 47, 5, 5);
        rect( gameChar_x - 6, gameChar_y - 20, 5 , 11);
        rect( gameChar_x + 2, gameChar_y - 20, 5 , 11);
        ellipse ( gameChar_x + 0.5, gameChar_y - 54 , 9, 12);
        ellipse( gameChar_x - 3.5, gameChar_y - 10.5, 5, 5);
        ellipse( gameChar_x + 4.5, gameChar_y - 10.5, 5, 5);
        stroke(0);
        line( gameChar_x + 0.5, gameChar_y - 51, gameChar_x + 0.5, gameChar_y - 54);

	}
	else
	{
		// add your standing front facing code
        
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

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

    
    if (isLeft == true){        // move left
        gameChar_x -= 3;
    }
    
    if (isRight == true){       // move right
        gameChar_x += 3;
    }
    
    if ((isFalling == true || isPlummeting == true) && gameChar_y == floorPos_y){  // jumping
        gameChar_y -= 100;
    }
    
    if (gameChar_y < floorPos_y){   // falling
        gameChar_y += 3;
        isFalling = true;
    }
    else{                           // stick to the floor 
        isFalling = false;
        gameChar_y = floorPos_y;
    }
    
    if (drop == true){              // spacebar drops to floor
        gameChar_y = floorPos_y
        isFalling = false
        isPlummeting = false
    }
        
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    
    if (keyCode == 65){     // the a key
        isLeft = true
    }
    
    if (keyCode == 68){     // the d key
        isRight = true
    }
    
    if (keyCode == 87){     // the w key
        isFalling = true
        isPlummeting = true
    }
    
    if (keyCode == 32){     // spacebar
        drop = true
    }

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    
    if (keyCode == 65){     // the a key
        isLeft = false
    }

    if (keyCode == 68){     // the d key
        isRight = false
    }
    
    if (keyCode == 87){     // the w key
        //isFalling = false
        isPlummeting = false
    }
    if (keyCode == 32){     // spacebar
        drop = false
        
    }
    
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
