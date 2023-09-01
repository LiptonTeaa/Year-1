/*

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//Additions for make it awsome (mia)

// New Variables

var trees_x;
var clouds;
var mountains;
var canyons;
var collectables;

var game_score;
var txtCount;
var flagpole;
var lives;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;

    // Make it awesome additions
    
    startGame();
    
    lives = 4;
}

function draw()
{   
	background(123, 206, 250); // fill the sky a nicer blue

	noStroke();
	fill(0,128,0);
	rect(0, floorPos_y, width, height/4); // draw some dark green ground
    
	// Draw clouds.
    
    push();
    translate(scrollPos, 0);
    
        drawClouds();
    
    pop();

	// Draw mountains.
    
    push();
    translate(scrollPos, 0);
    
        drawMountains();
    
    pop();
    
	// Draw trees.
    
    push();
    translate(scrollPos, 0);
    
        drawTrees();
    
    pop();
    
	// Draw canyons.
    
    push();
    translate(scrollPos, 0);
    
        for (var i = 0; i < canyons.length; i++){
    
            drawCanyon(canyons[i]);
            
            checkCanyon(canyons[i]); 
    
        }
    
    pop();

	// Draw collectable items.
    
    push();
    translate(scrollPos, 0);
    
        for (var i = 0; i < collectables.length; i++){
            
            checkCollectable(collectables[i]);
            
            if( collectables[i].isFound == false){
        
                drawCollectable(collectables[i]);
            
            }
        }
        
     pop();
    
    // Make it awesome additions
    
    // Score counter (currently broken)
        for (var i = 0; i < collectables.length; i++){
            
            if ( collectables[i].isFound == true){
                game_score =+ 1;                    // DOESNT INCREMENT BEYOND 1 OR INFINITE
            }
        }
    
    // Make it awesome additions
    
    // Adding counter text on screen
    
    textAlign( LEFT, BOTTOM);            
    text( txtCount + game_score, 20, 30); 
    
    // Make it awesome additions
    
    //Draw Flagpole
    
    push();
    translate(scrollPos, 0);
    
    if ( flagpole.isReached == false){
        checkFlagpole();
    }
    
        renderFlagpole();
    
    pop();
    
    // Make it awesome additions
    
    // Draw Life tokens 
    
    push();
    translate(scrollPos, 0);
    
    for (var i = 0; i < lives; i++){
        renderLife(i*30);
    }
        
    pop();
    
    // On screen text for death and completion game
    
    if ( lives < 1 ){
        textSize(25);
        textAlign(CENTER);
        fill( 255, 255, 240);
        text('Game over. Press space to continue', width/2, height/2 - 50);
    }
    
    if ( flagpole.isReached == true){
        textSize(25);
        textAlign(CENTER);
        fill( 255, 255, 240);
        text('Level complete. Press space to continue.', width/2, height/2 - 50);
    }
    
	// Draw game character.
    
    pop();
	
	   drawGameChar();

	// Logic to make the game character move or the background scroll.
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

	// Logic to make the game character rise and fall.
    
    // Make the game character fall (gravity)
    
    if ((isFalling == true || isPlummeting == true) && gameChar_y == floorPos_y){  
        gameChar_y -= 100;          // jumping
    }
    
    if (gameChar_y < floorPos_y){   // falling
        gameChar_y += 3;
        isFalling = true;
    }
    else{                           // stick to the floor 
        isFalling = false;
        gameChar_y = floorPos_y;
    }
    
    // To make the character drop into the canyon (canyon physics)
    
    if ( isPlummeting == true){ 
        gameChar_y += 250;
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
    
    // Make it awesome additions

    // Won't let startgame run if lives are less than zero 
    
    if ( lives > 0){
        
    // Restart game when fall into canyon
        
        if ( gameChar_y > floorPos_y + 200){
            
            startGame();
        }
    }
}

// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

    // To control the animation
    
	console.log("press" + keyCode);
	console.log("press" + key);
    
    // keys are pressed.
    
    if (keyCode == 65){     // the a key
        isLeft = true
    }
    
    if (keyCode == 68){     // the d key
        isRight = true
    }
    
    if (keyCode == 87){     // the w key
        isFalling = true
        //isPlummeting = true
    }
    
    if (keyCode == 32){     // spacebar
        drop = true
    }


}

function keyReleased()
{

    // To control animation
    
	console.log("release" + keyCode);
	console.log("release" + key);

    // keys are released.
    
    if (keyCode == 65){     // the a key
        isLeft = false
    }

    if (keyCode == 68){     // the d key
        isRight = false
    }
    
    if (keyCode == 87){     // the w key
        isFalling = false
        //isPlummeting = false
    }

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character

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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

function drawClouds(){
    
    for (var i = 0; i < clouds.length; i++){
        
        fill(255,255,255);                     
        rect(clouds[i].x_pos + 180, clouds[i].y_pos, 130,40,20);
        ellipse(clouds[i].x_pos + 200, clouds[i].y_pos + 10, 30,30);
        ellipse(clouds[i].x_pos + 221, clouds[i].y_pos + 7, 38,38);
        ellipse(clouds[i].x_pos + 250, clouds[i].y_pos + 5, 45,45);
        ellipse(clouds[i].x_pos + 275, clouds[i].y_pos + 10, 60,60);
    }

}

// Function to draw mountains objects.

function drawMountains(){
    
    for (var i = 0; i< mountains.length; i++){
    
        // beginShape for mountain backdrop and triangles for depth
        
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

}

// Function to draw trees objects.

function drawTrees(){
    
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

} 


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    // Cascading rectangles
    
        fill(0,0,0,100);
        rect(t_canyon.x_pos,432,t_canyon.width,50);

        fill(0,0,0,150);
        rect(t_canyon.x_pos,482,t_canyon.width,40);

        fill(0,0,0,200);
        rect(t_canyon.x_pos,522,t_canyon.width,40);

        fill(0,0,0,250);
        rect(t_canyon.x_pos,562,t_canyon.width,14);
    
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    
    if(gameChar_world_x > t_canyon.x_pos &&
       gameChar_world_x < t_canyon.x_pos + t_canyon.width &&
       gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
    
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    
            fill(255);
            rect(t_collectable.x_pos,
                 t_collectable.y_pos,
                 5 + t_collectable.size,
                 12 + t_collectable.size, 30); 

            fill(255,0,0);
            ellipse(t_collectable.x_pos + 2,
                    t_collectable.y_pos - 2,
                    20 + t_collectable.size,
                    12 + t_collectable.size);

            fill(255,165,0)
            ellipse(t_collectable.x_pos - 3,
                    t_collectable.y_pos - 3,
                    4 + t_collectable.size,
                    4 + t_collectable.size);
            ellipse(t_collectable.x_pos + 2,
                    t_collectable.y_pos,
                    3 + t_collectable.size,
                    3 +  t_collectable.size);
            ellipse(t_collectable.x_pos + 7,
                    t_collectable.y_pos - 3,
                    5 + t_collectable.size,
                    5 + t_collectable.size);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

    let D = dist( t_collectable.x_pos, t_collectable.y_pos, gameChar_world_x, gameChar_y);
    
    if( D < 30 ){
        t_collectable.isFound = true;
    }
    
}

//Make it awesome additions 

// Function to draw flagpole

function renderFlagpole(){
    
    if( flagpole.isReached == true){ 
        
        fill( 255, 255, 0);
        rect( flagpole.x_pos - 7, floorPos_y, 20, 10);
        fill( 192, 192, 192);
        rect( flagpole.x_pos , floorPos_y, 6, -140);
        fill( 139, 0, 0);
        rect( flagpole.x_pos + 7, floorPos_y - 140, 40, 20);
    }
    else{ 
        fill( 255, 255, 0);
        rect( flagpole.x_pos - 7, floorPos_y, 20, 10);
        fill( 192, 192, 192);
        rect( flagpole.x_pos , floorPos_y, 6, -140);
        fill( 139, 0, 0);
        rect( flagpole.x_pos + 7, floorPos_y - 20, 40, 20);
    }
}

function checkFlagpole(){
    
    let D = dist( flagpole.x_pos, floorPos_y, gameChar_world_x, gameChar_y);
    
    if( D < 30 ){
        flagpole.isReached = true;
    }
}

function startGame(){
    
    gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    
    trees_x = [-900, -400, 100, 500, 900, 1100, 1800];
    
    clouds = [
        {x_pos: 0, y_pos: 45},
        {x_pos: 120, y_pos: 150},
        {x_pos: 600, y_pos: 70},
        {x_pos: -600, y_pos: 60},
        {x_pos: -800, y_pos: 130},
        {x_pos: 900, y_pos: 80},
        {x_pos: 1400, y_pos: 100},
        {x_pos: 1600, y_pos: 20}
    ];
    
    mountains = [
        {x_pos: 50, y_pos: floorPos_y},
        {x_pos: -500, y_pos: floorPos_y},
        {x_pos: 800, y_pos: floorPos_y},
        {x_pos: 200, y_pos: floorPos_y},
        {x_pos: -800, y_pos: floorPos_y}
    ];
    
    canyons = [
        {x_pos: 170, width: 90, isFound: false},
        {x_pos: 700, width: 90, isFound: false},
        {x_pos: 1200, width: 90, isFound: false},
        {x_pos: -700, width: 90, isFound: false}
    ];
    
    collectables = [
        {x_pos: 358, y_pos: 412, size: 0, isFound: false},
        {x_pos: 658, y_pos: 412, size: 0, isFound: false},
        {x_pos: 1500, y_pos: 412, size: 0, isFound: false},
        {x_pos: -730, y_pos: 412, size: 0, isFound: false}
    ];
    
    // Make it awesome addtions
    
    // New variables for make it awesome
    
    game_score = 0;
    
    txtCount = "Score:";
    
    flagpole = { x_pos: 2000, isReached: false};
    
    lives = lives - 1;
}

function renderLife(x_pos){
    
    fill (255, 0, 0);
    ellipse ( gameChar_world_x + x_pos , 50, 13, 13);
    ellipse ( gameChar_world_x + 8 + x_pos, 50, 13, 13);
    ellipse ( gameChar_world_x + 4 + x_pos , 53, 18, 13);
}

// Refresh the page if you fall down, thats how you restart the game 

// need to add enemies and sound for dying, junmping, reaching the flagpole, general game music