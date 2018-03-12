var positionX = [];
var positionY = [];
var size = [];
var velocity = [];
var colors = [];

var xSpeed = [];
var ySpeed = [];
var circles = [];
var circleFreqs = [175, 195, 220, 245, 260, 280];
var circlekeys = ['A', 'S', 'D', 'F', 'G', 'H'];
var circleSizes = [30, 40, 50, 60, 80, 100];
var circleHue = [60, 180, 220, 260, 300, 30];

var playing = false;
var huevalue = 0;

function setup() {

  createCanvas(600, 400);
  backgroundColor = color(0);
  colorMode(HSB, 360, 1, 1);


  for (var i = 0; i < 100; i++) {
    positionX[i] = random(width);
    positionY[i] = random(height);
    size[i] = random(10, 20);
    colors[i] = color(random(circleHue), 1, 1);
    velocity[i] = random(-1, 1);
  }

  for (i = 0; i < circlekeys.length; i++) {
    circles[i] = {
      thekey: circlekeys[i],
      size: circleSizes[i],
      hue: circleHue[i],
      osc: new p5.Oscillator(),
      playing: false,
      x: random(width),
      y: random(height)
    }
    circles[i].osc.setType('triangle');
    circles[i].osc.freq(circleFreqs[i]);
    circles[i].osc.amp(0);
    circles[i].osc.start();
  }
}

function draw() {
  background(0);



  for (var a = 0; a < 100; a++) {

    fill(colors[a]);

    var mycolor = colors[a];
    if ((hue(mycolor) == huevalue) && playing) {
      ellipse(positionX[a], positionY[a], size[a] + 30);
     } else {
    ellipse(positionX[a], positionY[a], size[a]);
    }
    positionY[a] += velocity[a];
    positionX[a] += velocity[a];
  }



  for (var a = 0; a < 100; a++) {
    if (positionY[a] > height || positionY[a] < 0) {
      velocity[a] = -velocity[a];
    }
    if (positionX[a] > width || positionX[a] < 0) {
      velocity[a] = -velocity[a];
    }
  }


  for (i = 0; i < circles.length; i++) {
    var circle = circles[i];
    if (circle.playing) {
      //stroke(255);
      //strokeWeight(1.5);
      fill(circle.hue, 1, 1);
      ellipse(circle.x, circle.y, circle.size, circle.size);
    }
  }
}

function keyPressed() {
  print("got key press for ", key);
  stroke(255);
  strokeWeight(1.5);
  for (i = 0; i < circles.length; i++) {
    var circle = circles[i];
    if (circle.thekey == key) {
      circle.osc.amp(0.5, 0.1);
      circle.playing = true;
      playing = true;
      huevalue = circle.hue;
    }
  }
}

function keyReleased() {
  stroke(255);
  strokeWeight(0);
  print("got key release for ", key);
  playing = false;
  for (i = 0; i < circles.length; i++) {
    var circle = circles[i];
    if (circle.thekey == key) {
      circle.osc.amp(0, 0.5);
      circle.playing = false;
    }
  }
