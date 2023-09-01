/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    
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
    

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    
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
    
    

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    
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
    
    65
    
	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
    
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

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    
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

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    
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
