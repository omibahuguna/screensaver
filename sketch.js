let cols, rows;
let size = 10;
let font;
let threshold = 100;

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

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = size / 2 + i * size;
      let y = size / 2 + j * size;
      let d = dist(x, y, width / 2, height / 2);
      fill(40);

      fill(255);
      textFont(font);
      if (d > threshold) {
        text("+", x, y);
      } else {
        text(".", x, y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}