let arRacerX = [30, 25, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;
let raceOver = false;

function setup() {
  createCanvas(600, startY + yStep * arRacerX.length);
}

function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < arRacerX.length; i++) {
    let y = startY + yStep * i;
    if (arRacerX[i] < finishX && raceOver == false) {
      arRacerX[i] += random(1, 3);
      if (arRacerX[i] >= finishX) {
        raceOver = true;
      }
    } else {
      if (arRacerX[i] >= finishX) {
        fill(255, 255, 255);
        stroke(0);
        strokeWeight(2);
        textAlign(CENTER, CENTER);
        text('Winner!', arRacerX[i], y - 27);
        strokeWeight(1);
        fill(255, 230, 230);
      } else {
        fill(255, 255, 255);
      }
    }
    circle(arRacerX[i], y, 24);
  }
  if(raceOver) {
    fill(255, 255, 255);
    circle(300, height/2, 100);
  }
}