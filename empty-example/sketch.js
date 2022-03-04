
let x = 0
let y = 0
let windowHeight = 600
let windowWidth = 600

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 205, 8);
  input = []
}

function addCircle() {
  if (x < 0) {
    x = 0
  }
  if (y < 0) {
    y = 0
  }
  height = 50
  width = 50
  colour = 0
  
 console.log("lastXCoordinate + height: ", x+height)
 console.log("canvas width: ", windowWidth)
  
  console.log("X: ", x)
  console.log("Y: ", y)
  if (x+width < windowWidth && y == 0 ) {
    arc(x+(height/2), y+(width/2), height, width, colour, PI + PI, CHORD);
    x += width
  } else if (x+height >= windowWidth && y < windowHeight) {
    arc(x-(height/2), y+(width/2), height, width, colour, PI + PI, CHORD);
    y += height
  } else if (y >= windowHeight && lastXCoordinare > 0) {
    arc(x+(height/2), y-(width/2), height, width, colour, PI + PI, CHORD);
    x -= width
  } else if (x <= 0) {
    arc(x+(height/2), y+(width/2), height, width, colour, PI + PI, CHORD);
    y -= height
  }
}