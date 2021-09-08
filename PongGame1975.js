var hPadlet = 100; // Hoehe Padlet
var dPadlet = 10; // Breite Padlet
var yPos = 240;
var vX = 2.5
var xBall = 200;
var vY = 1.75;
var yBall = 200;
var scoreB = 0;
var scoreA = 0;
var decrease = hPadlet
var maxvX = 10;
var maxvY = 7;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  vX = vX * 1.0005;
  vY = vY * 1.0005;
  vX = constrain(vX, -maxvX, maxvX)
  
  decrease = decrease * 0.9997
  background(0);
  fill(0, 255, 0);
  noStroke();
  // Padlets zeichnen
  rect(dPadlet, mouseY - hPadlet / 2, dPadlet, decrease);
  rect(width - 2 * dPadlet, mouseY - hPadlet / 2, dPadlet, decrease);
  // Ball zeichnen
  rect(xBall, yBall, dPadlet, dPadlet);
  text(scoreB, width / 2 + 40, 50);

  // Ball bewegen
  xBall = xBall + vX;
  yBall = yBall + vY;

  // Reflexion Padlet
  if (xBall < 2 * dPadlet || xBall > width - 3 * dPadlet) {
    if (
      yBall > mouseY - hPadlet / 2 - dPadlet &&
      yBall < mouseY + hPadlet / 2
    ) {
      vX = vX * -1;
    }
  }
  // Reflexion Rand oben und unten
  if (yBall > height || yBall < 0) {
    vY = vY * -1;
  }

  // Reflexion Rand links und rechts
  //if (xBall > width || xBall < 0) {
  //  vX = vX * -1;
  //}

  //Score durch rausfliegen
  if (xBall < dPadlet || xBall > width - dPadlet) {
    scoreB = scoreB + 1;
    xBall = width / 2;
    yBall = height / 2;
    vX = 2.5;
    vY = 1.75;
    decrease = hPadlet
  }
}
