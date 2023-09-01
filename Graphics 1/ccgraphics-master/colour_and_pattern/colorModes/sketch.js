
function setup() {
  createCanvas(500,500);
  
  //HSB hue 360, saturation 100, brightness 100, alpha 1
  colorMode(HSB);
  
  for (i = 0; i < 360; i++) {
    for (j = 0; j < 100; j++) {
      stroke(i, j, 100);
      point(i, j);
    }
  }
  
  translate(0, 150);
  // RGB red 255, green 255, blue 255
  colorMode(RGB);
  
  for (i = 0; i < 255; i++) {
    for (j = 0; j < 255; j++) {
      stroke(i, j, 0);
      point(i, j);
    }
  }
}

function draw(){
  //do nothing
}