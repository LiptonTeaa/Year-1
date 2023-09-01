/*

The Game Project

3 - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = 883;
	treePos_y = floorPos_y;
    
    canyon = {x_pos: 160, width: 90}
    collectable = {x_pos: 358, y_pos: 412, size: 0}
    
    mountain = {x_pos: 0, y_pos: floorPos_y}
    cloud = {x_pos: 0, y_pos: 45}
}

function draw()
{
	background(123, 206, 250); //fill the sky blue

	noStroke();
	fill(0, 128, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

    
// Mountain
    noStroke(); 
    fill(112,128,144);
    beginShape();                               // RELATIVE to 0x 432y
        vertex(mountain.x_pos, mountain.y_pos);
        vertex(mountain.x_pos + 80, mountain.y_pos - 132);
        vertex(mountain.x_pos + 200, mountain.y_pos - 82);
        vertex(mountain.x_pos + 400, mountain.y_pos - 332);
        vertex(mountain.x_pos + 550, mountain.y_pos - 32);
        vertex(mountain.x_pos + 700, mountain.y_pos - 132);
        vertex(mountain.x_pos + 750, mountain.y_pos - 72);
        vertex(mountain.x_pos + 900, mountain.y_pos - 312);
        vertex(mountain.x_pos + 1024, mountain.y_pos);
    endShape();
    
    noStroke();
    fill(119,136,153);
    triangle(mountain.x_pos + 200, mountain.y_pos, mountain.x_pos + 400, mountain.y_pos - 282, mountain.x_pos + 550, mountain.y_pos);
    noStroke();
    fill(119,136,153);
    triangle(mountain.x_pos + 750, mountain.y_pos, mountain.x_pos + 900, mountain.y_pos - 282, mountain.x_pos + 1024, mountain.y_pos);
    noStroke();
    fill(119,136,153);
    triangle(mountain.x_pos + 540, mountain.y_pos, mountain.x_pos + 700, mountain.y_pos - 112, mountain.x_pos + 780, mountain.y_pos);
  
    
// Cloud
     fill(255,255,255);                     // RELATIVE to 0x 45y
    rect(cloud.x_pos + 180, cloud.y_pos, 130,40,20);
    ellipse(cloud.x_pos + 200, cloud.y_pos + 10, 30,30);
    ellipse(cloud.x_pos + 221, cloud.y_pos + 7, 38,38);
    ellipse(cloud.x_pos + 250, cloud.y_pos + 5, 45,45);
    ellipse(cloud.x_pos + 275, cloud.y_pos + 10, 60,60);
    
    cloud.x_pos = cloud.x_pos +1;
    
    if (cloud.x_pos > 1024)
        {
            cloud.x_pos = 0;
        }
    
    
// Trees
    fill(169,169,169);
    rect(treePos_x - 33, treePos_y, 10, -40); //1st tree
    rect(treePos_x - 5, treePos_y, 10, -60); //2nd tree  RELATIVE to 883x & 432y
    rect(treePos_x + 23, treePos_y, 10, -40); //3rd tree
    
    fill(60,179,113);
    triangle(treePos_x - 43, treePos_y - 32, treePos_x - 28, treePos_y - 62, treePos_x - 14, treePos_y - 32);
    triangle(treePos_x - 16, treePos_y - 47, treePos_x, treePos_y - 82, treePos_x + 15, treePos_y - 47);
    triangle(treePos_x + 13, treePos_y - 32, treePos_x + 28, treePos_y - 62, treePos_x + 43, treePos_y - 32);
    
    fill(0,250,154);
    triangle(treePos_x - 43, treePos_y - 42, treePos_x - 28, treePos_y - 67, treePos_x - 14, treePos_y - 42);
    triangle(treePos_x - 16, treePos_y - 60, treePos_x, treePos_y - 87, treePos_x + 15, treePos_y - 60);
    triangle(treePos_x + 13, treePos_y - 42, treePos_x + 28, treePos_y - 67, treePos_x + 43, treePos_y - 42);
    
    fill(143,188,143);
    triangle(treePos_x - 43, treePos_y - 52, treePos_x - 28, treePos_y - 72, treePos_x - 14, treePos_y - 52);
    triangle(treePos_x - 16, treePos_y - 70, treePos_x, treePos_y - 92, treePos_x + 15, treePos_y - 70);
    triangle(treePos_x + 13, treePos_y - 52, treePos_x + 28, treePos_y - 72, treePos_x + 43, treePos_y - 52);
    

// Canyon
    fill(0,0,0,100);
    rect(canyon.x_pos,432,canyon.width,50);
    
    fill(0,0,0,150);
    rect(canyon.x_pos,482,canyon.width,40);
    
    fill(0,0,0,200);
    rect(canyon.x_pos,522,canyon.width,40);
     
    fill(0,0,0,250);
    rect(canyon.x_pos,562,canyon.width,14);
    
    
// Collectable
    fill(255);
    rect(collectable.x_pos, collectable.y_pos, 5 + collectable.size, 12 + collectable.size, 30); // RELATIVE to 358x 412y, 0
    
    fill(255,0,0);
    ellipse(collectable.x_pos + 2, collectable.y_pos - 2, 20 + collectable.size, 12 + collectable.size);
    
    fill(255,165,0)
    ellipse(collectable.x_pos - 3, collectable.y_pos - 3, 4 + collectable.size, 4 + collectable.size);
    ellipse(collectable.x_pos + 2, collectable.y_pos, 3 + collectable.size, 3 +  collectable.size);
    ellipse(collectable.x_pos + 7, collectable.y_pos - 3, 5 + collectable.size, 5 + collectable.size);
    
    
// Game Character (Facing forward)
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

function mousePressed()
{
 // Draw game character at mouse position 
    gameChar_x = mouseX
    gameChar_y = mouseY

}
