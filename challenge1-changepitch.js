var xSpeed = [];
var ySpeed = [];
var circles = [];
var circleFreqs = [175, 195, 220, 245, 260];
var circlekeys = ['A', 'S', 'D', 'F', 'G'];
var circleSizes = [30, 40, 50, 60, 90];
var circleHue = [60, 180, 220, 260,300];


var playing = false;


function setup() {
 for (i = 0; i < circlekeys.length; i++) {
  circles[i] = {
   thekey: circlekeys[i],
   size: circleSizes[i],
   hue: circleHue[i],
   osc: new p5.Oscillator(),
   playing: false,
   x: i * 100 + 30,
   y: 200
  }
  circles[i].osc.setType('triangle');
  circles[i].osc.freq(circleFreqs[i]);
  circles[i].osc.amp(0);
  circles[i].osc.start();
 }

 createCanvas(600, 400);
 backgroundColor = color(0);
 colorMode(HSB, 360, 1, 1);
}

function draw() {
 background(0);

 for (i = 0; i < circles.length; i++) {
  var circle = circles[i];
	 if (circle.playing) {
   stroke(255);
   fill(circle.hue, 1, 1);
   ellipse(circle.x, circle.y, circle.size, circle.size);
  }
 }
}

function keyPressed() {
 print("got key press for ", key);

 for (i = 0; i < circles.length; i++) { 
  var circle = circles[i];
  if (circle.thekey == key) {
   circle.osc.amp(0.5, 0.1);
   circle.playing = true;
  }
 }
}

function keyReleased() {
 print("got key release for ", key);
 for (i = 0; i < circles.length; i++) {
  var circle = circles[i];
  if (circle.thekey == key) {
   circle.osc.amp(0, 0.5);
   circle.playing = false;
  }
 }
}
