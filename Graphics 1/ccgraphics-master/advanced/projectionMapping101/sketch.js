function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  pg = createGraphics(800, 500);
  pg.x = 1;
}

function draw() {
  background(0);

  pg.background(150,0,0);
  pg.ellipse(pg.x, pg.height/2, 50, 50);
  pg.x+=2;
  pg.x%=pg.width;

  texture(pg);

  quad(100, 0,
       400, 0,
       300, -200,
       0, -200);
}
