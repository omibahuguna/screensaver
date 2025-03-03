let cols, rows;
let size = 10;
let font;
let threshold = 100;
let angle = 0;

function preload() {
  font = loadFont("ibm.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / size;
  rows = height / size;
  textSize(size);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  angle += 0.02; // Increment the angle for animation

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size + 20 * cos(angle + i * 0.1);
      let y = size / 2 + j * size + 20 * sin(angle + j * 0.1);
      let d = dist(x, y, width / 2, height / 2);
      fill(255);
      textFont(font);
      if (d > threshold) {
        text("+", x, y);
      } else {
        text("+", x, y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}