'use strict';

var drawMode = 1;

var img;

var m = 0;


function preload() {
  img = loadImage('data/kohht20200.png');
}

function setup() {
  createCanvas(603, 873);
  print(img.width + ' • ' + img.height);
  colorMode (RGB);
}

function draw() {
  background(255, 30);

  m++;

  var mouseXFactor = map(mouseX, 0, width, 0.05, 1);
  var mouseYFactor = map(mouseY, 0, height, 0.05, 1);

  for (var gridX = 0; gridX < img.width; gridX++) {
    for (var gridY = 0; gridY < img.height; gridY++) {
      // grid position + tile size
      var tileWidth = width / img.width;
      var tileHeight = height / img.height;
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;

      // get current color
      img.loadPixels();
      var c = color(img.get(gridX, gridY));
      // greyscale conversion
      var greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);

      switch (drawMode) {

      case 1:
        stroke(mouseX, greyscale, 0);
        noFill();
        push();
        translate(posX, posY);
        // rotate(frameCount / 50.0);
        rotate(greyscale / 255 * PI); //(frameCount / 20.0);
        strokeWeight(1);
        //ellipse(m, 0, 50 * mouseXFactor, 50 * mouseYFactor);
        ellipse(random()*5, random()*5, 50 * mouseXFactor, 50 * mouseYFactor);
        var w9 = map(greyscale, 0, 255, 15, 0.1);
        strokeWeight(w9);
        stroke(0, 0);
        ellipse(0, 0, 10, 5);
        pop();
        break;
      }
    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // change draw mode
  if (key == '1') drawMode = 1;
  if (key == '2') drawMode = 2;
  if (key == '3') drawMode = 3;
  if (key == '4') drawMode = 4;
  if (key == '5') drawMode = 5;
  if (key == '6') drawMode = 6;
  if (key == '7') drawMode = 7;
  if (key == '8') drawMode = 8;
  if (key == '9') drawMode = 9;
}
