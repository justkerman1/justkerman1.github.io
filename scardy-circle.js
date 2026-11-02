let circleX = 200;
let circleY = 200;
let distToMouse = 0;
let circleSpeed = 0;
let slopeX = 0;
let slopey = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  moveCircle();
  circle(circleX, circleY, 30);
  
}

function moveCircle() {
  distToMouse = dist(circleX, circleY, mouseX, mouseY);
  slopeX = circleX - mouseX;
  slopeY = circleY - mouseY;
  circleSpeed = (2 - distToMouse/50);
  if(circleSpeed < .1) {
    circleSpeed = .1;
  }
  if(distToMouse < 33) {
    circleSpeed = 2.5;
  }
  if(circleX > 15 && circleY > 15) {
    if(circleX < width-15 && circleY < width-15) {
      circleX += circleSpeed*(slopeX/distToMouse);
      circleY += circleSpeed*(slopeY/distToMouse);
    } else {
      if(circleX >= width-15) {
        circleX = width-16;
      }
      if(circleY >= width-15) {
        circleY = width-16;
      }
    }
  } else {
    if(circleX <= 15) {
      circleX = 16;
    }
    if(circleY <= 15) {
      circleY = 16;
    }
  }
}