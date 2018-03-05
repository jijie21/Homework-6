//var millisecond = millis();
var x = 0;
var c;
var colors;


function setup() {
  createCanvas(400, 400);
  setTimeout(hello, 1000);
  colorMode(HSB, 360, 1, 1);
  //colors = color(random(0,360), 1, 1);
}

function hello() {
  noStroke(); 
  c = color(random());
  fill(c); 
  ellipse(35, 35, 55, 55);
  setTimeout(hello, 1000);

}

function draw() {
  background(255);
  stroke(random(0,100),50,20)
  line(x, 0, x, height);
  ellipse(35, 35, 55, 55);

  if (x > width) {
    x = 0
  }
  x = x + 3;
  
}
