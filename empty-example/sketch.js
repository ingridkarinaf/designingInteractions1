function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(123, 91, 191);
  } else {
    fill(255, 204, 0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}