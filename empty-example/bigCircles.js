let saveCircleColor;
let circleSize;
let circleX, circleY;  // Position of circle button
let circleOver = false;
let baseHue;

let saveTasteColor;
let tasteX, tasteY;
let tasteOver = false;

let saveIngrColor;
let ingrX, ingrY;
let ingrOver = false;

let saveAmouColor;
let amouX, amouY;
let amouOver = false;

let saveConColor;
let conX, conY;
let conOver = false;

let saveOccaColor;
let occaX, occaY;
let occaOver = false;

let saveAestColor;
let aestX, aestY;
let aestOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255, 205, 8);
  colorMode(HSL, 360, 100, 100);
  circleX = width/2;
  circleY = height/2;
  circleSize = 200;
  
  baseHue = 123;

  tasteX = width/4;
  tasteY = height/3;
  ingrX = width/2;
  ingrY = height/3;
  amouX = width-(width/4);
  amouY = height/3;
  conX = width/4;
  conY = height-(height/3);
  occaX = width/2;
  occaY = height-(height/3);
  aestX = width-(width/4);
  aestY = height-(height/3);
  
}

function generateCircle(overVariable, x, y, size) {
  if (overVariable) {
    fill(mouseX-mouseY, 100, 50);
    circle(x, y, size);
  } else {
    fill(baseHue, 0, 50);
    circle(x, y, size);
  }
}

function draw() {
  console.log("calling draw")
  update(mouseX, mouseY);

  generateCircle(tasteOver, tasteX, tasteY, circleSize) //tastecircle
  generateCircle(ingrOver, ingrX, ingrY, circleSize) //ingredients circle
  generateCircle(amouOver, amouX, amouY, circleSize) //amount circle
  generateCircle(conOver, conX, conY, circleSize) //context circle  
  generateCircle(occaOver, occaX, occaY, circleSize) //occasion circle
  generateCircle(aestOver, aestX, aestY, circleSize) //aesthetics circle

  // letting the user know what color they just picked 
  //by making a smaller circle appear - will not work 
  //with multiple big circles
  if (mousePressed){
    fill(saveOccaColor, 100, 50);
    noStroke();
  }
  else {
    fill(360, 0, 100);
    noStroke();
  }
  
}

function update(x, y) {
  // const arr = [
  //   [tasteX, tasteY, tasteOver], [ingrX, ingrY, ingrOver], 
  //   [amouX, amouY, amouOver], [conX, conY, conOver], 
  //   [occaX, occaY, occaOver], [aestX, aestY, aestOver]];
    
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log("fooooooooooooooooor")
  //     console.log("arr[i][0]", arr[i][0])
  //     console.log("arr[i][1]", arr[i][1])
  //     if (overCircle(arr[i][0], arr[i][1], circleSize)) {
  //       arr[i][2] = true;
  //     } else {
  //       arr[i][2] = false;
  //     }
  //   }

    if( overCircle(circleX, circleY, circleSize) ) {
      circleOver = true;
    } else {
      circleOver = false;
    }
    if( overCircle(tasteX, tasteY, circleSize) ) {
      tasteOver = true;
    } else {
      tasteOver = false;
    }
    if( overCircle(ingrX, ingrY, circleSize) ) {
      ingrOver = true;
    } else {
      ingrOver = false;
    }
    if( overCircle(amouX, amouY, circleSize) ) {
      amouOver = true;
    } else {
      amouOver = false;
    }
    if( overCircle(conX, conY, circleSize) ) {
      conOver = true;
    } else {
      conOver = false;
    }
    if( overCircle(occaX, occaY, circleSize) ) {
      occaOver = true;
    } else {
      occaOver = false;
    }
    if( overCircle(aestX, aestY, circleSize) ) {
      aestOver = true;
    } else {
      aestOver = false;
    }
  }

function overCircle(x, y, diameter) {
    const disX = x - mouseX;
    const disY = y - mouseY;
    if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
      return true;
    } else {
      return false;
    }
  }


  // When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, circleX, circleY);
  //console.log(d);
  if (d < 100) {
    //   saveColx = mouseX; // gemmer x-positionen for at "blande" farven senere
    //   saveColy = mouseY; // gemmer y-positionen for at "blande" farven senere
    saveCircleColor = mouseX-mouseY; // gemmer farven med det samme som en hue-værdi til HSL ved at fratrække/blande med det samme
    console.log(saveCircleColor)
  }
  
  let t = dist(mouseX, mouseY, tasteX, tasteY);
  if (t < 100) {
      saveTasteColor = mouseX-mouseY; 
    }
  let i = dist(mouseX, mouseY, ingrX, ingrY);
  if (i < 100) {
        saveIngrColor = mouseX/2-mouseY; 
    }
  let a = dist(mouseX, mouseY, amouX, amouY);
  if (a < 100) {
        saveAmouColor = mouseX/3-mouseY; 
    }
  let c = dist(mouseX, mouseY, conX, conY);
  if (c < 100) {
        saveConColor = mouseX-(mouseY/2); 
    }
  let o = dist(mouseX, mouseY, occaX, occaY);
  if (o < 100) {
        saveOccaColor = (mouseX/1.5)-(mouseY/2); 
    }
  let ae = dist(mouseX, mouseY, aestX, aestY);
  if (ae < 100) {
        saveAestColor = (mouseX/2.5)-(mouseY/1.5); 
  }

}

let x = 0
let y = 0

function addCircle() {
  if (x < 0) {
    x = 0
  }
  if (y < 0) {
    y = 0
  }
  heightCircle = 50
  widthCircle = 50
  colour = saveTasteColor

  if (x+widthCircle < windowWidth && y == 0 ) {
    fill(colour, 50, 50)
    circle(x+(heightCircle /2), y+( widthCircle/2), heightCircle);
    x +=  widthCircle

  } else if ((x+heightCircle >= windowWidth) && (y < windowHeight)) {
    circle(x-(heightCircle /2), y+( widthCircle/2), heightCircle);
    fill(colour, 50, 50)
    y += heightCircle 

  } else if (y >= windowHeight && x > 0) {
    circle(x+(heightCircle /2), y-(widthCircle), heightCircle);
    fill(colour, 50, 50)
    x -=  widthCircle
    
  } else if (x <= 0) {
    circle(x+(heightCircle /2), y+(widthCircle/2), heightCircle);
    fill(colour, 50, 50)
    y -= heightCircle 
  }
}










//   // Draw the test circle in the center
//   // if (circleOver) {
//   //   fill(mouseX-mouseY, 100, 50);
//   //   circle(circleX, circleY, circleSize);
//   // }
//   // else {
//   //   fill(baseHue, 0, 50);
//   //   circle(circleX, circleY, circleSize);
//   // }

//   // Draw taste circle
//   if (tasteOver) {
//     fill(mouseX-mouseY, 100, 50);
//     circle(tasteX, tasteY, circleSize);
//   }
//   else {
//     fill(baseHue, 0, 50);
//     circle(tasteX, tasteY, circleSize);
//   }




//   // Draw ingredients circle
//   if (ingrOver) {
//     fill(mouseX/2-mouseY, 100, 50);
//     circle(ingrX, ingrY, circleSize);
//   }
//   else {
//     fill(baseHue, 0, 50);
//     circle(ingrX, ingrY, circleSize);
//   }


//   // Draw amount circle
//   if (amouOver) {
//     fill(mouseX/3-mouseY, 100, 50);
//     circle(amouX, amouY, circleSize);
//     }
//   else {
//     fill(baseHue, 0, 50);
//     circle(amouX, amouY, circleSize);
//     }



//   // Draw context circle
//   if (conOver) {
//     fill(mouseX-(mouseY/2), 100, 50);
//     circle(conX, conY, circleSize);
//     }
//   else {
//     fill(baseHue, 0, 50);
//     circle(conX, conY, circleSize);
//       }


//   // Draw occasion circle
//   if (occaOver) {
//     fill((mouseX/1.5)-(mouseY/2), 100, 50);
//     circle(occaX, occaY, circleSize);
//       }
//   else {
//     fill(baseHue, 0, 50);
//     circle(occaX, occaY, circleSize);
//   }


//   // Draw aesthetics circle
//   if (aestOver) {
//     fill((mouseX/2.5)-(mouseY/1.5), 100, 50);
//     circle(aestX, aestY, circleSize);
//       }
//   else {
//     fill(baseHue, 0, 50);
//     circle(aestX, aestY, circleSize);
//   }



// function overTaste(x, y, diameter) {
//     const disX = x - mouseX;
//     const disY = y - mouseY;
//     if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// function overIngr(x, y, diameter) {
//     const disX = x - mouseX;
//     const disY = y - mouseY;
//     if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// function overAmou(x, y, diameter) {
//     const disX = x - mouseX;
//     const disY = y - mouseY;
//     if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// function overCon(x, y, diameter) {
//     const disX = x - mouseX;
//     const disY = y - mouseY;
//     if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// function overOcca(x, y, diameter) {
//     const disX = x - mouseX;
//     const disY = y - mouseY;
//     if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// function overAest(x, y, diameter) {
//     const disX = x - mouseX;
//     const disY = y - mouseY;
//     if(sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
//       return true;
//     } else {
//       return false;
//     }
//   }