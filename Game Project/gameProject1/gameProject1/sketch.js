/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the code comments. The items should appear next to the text titles.

Each bit of scenery is worth three marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery
3 marks = You went a bit further with your graphics

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.

When you have completed your game scenery upload here as a zip file.


*/

var cloud_pos_x

function setup()
{
	createCanvas(1024, 576);
    
    cloud_pos_x = 0
}

function draw()
{
	background(123, 206, 250); //fill the sky blue

	noStroke();
	fill(0,128,0);
	rect(0, 432, 1024, 144); //draw some green ground

    //Addition: sun
    
    fill(255,255,224);
    ellipse(1024,0,150,150);
	
    //1. a cloud in the sky
	//... add your code here
    
    fill(255,255,255);
    rect(180+cloud_pos_x,45,130,40,20);
    ellipse(200+cloud_pos_x,55,30,30);
    ellipse(221+cloud_pos_x,52,38,38);
    ellipse(250+cloud_pos_x,50,45,45);
    ellipse(275+cloud_pos_x,55,60,60);
    
    cloud_pos_x = cloud_pos_x +1;
    
    if (cloud_pos_x>1024)
        {
            cloud_pos_x = 0;
        }
    
	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);
    
    noStroke();
    fill(112,128,144);
    beginShape:
        vertex(0,432);
        vertex(80,300);
        vertex(200,350);
        vertex(400,100);
        vertex(550,400);
        vertex(700,300);
        vertex(750,360);
        vertex(900,120);
        vertex(1024,432);
    endShape();
    
    noStroke();
    fill(119,136,153);
    triangle(200,432,400,150,550,432);
    noStroke();
    fill(119,136,153);
    triangle(750,432,900,150,1024,432);
    noStroke();
    fill(119,136,153);
    triangle(540,432,700,320,780,432);
    
	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);
    
    fill(169,169,169);
    rect(850,432,10,-40);
    rect(878,432,10,-60);
    rect(906,432,10,-40);
    
    fill(60,179,113);
    triangle(840,400,855,370,869,400);
    triangle(867,385,883,350,898,385);
    triangle(896,400,911,370,926,400);
    
    fill(0,250,154);
    triangle(840,390,855,365,869,390);
    triangle(867,372,883,345,898,372);
    triangle(896,390,911,365,926,390);
    
    fill(143,188,143);
    triangle(840,380,855,360,869,380);
    triangle(867,362,883,340,898,362);
    triangle(896,380,911,360,926,380);
    
	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);
    
    fill(0,0,0,100);
    rect(160,432,90,50);
    
    fill(0,0,0,150);
    rect(160,482,90,40);
    
    fill(0,0,0,200);
    rect(160,522,90,40);
     
    fill(0,0,0,250);
    rect(160,562,90,14);
    

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	//noStroke();
	fill(255);
    text("collectable item", 400, 400);
    
    fill(255);
    rect(358,412,5,12,30);
    
    fill(255,0,0);
    ellipse(360,410,20,12);
    
    fill(255,165,0)
    ellipse(355,409,4,4);
    ellipse(360,412,3,3);
    ellipse(365,409,5,5);
       
    
}