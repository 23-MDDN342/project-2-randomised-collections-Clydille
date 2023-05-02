/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [199, 185, 201];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

        // center face
        let dot_value = random(-11, 3);
        let facecolor_value = random(100);
        let eyecolor_value = random(100);
        let top_value = random(0, 5);

        ///middle shroom
        push();
        translate(width/2, height/2);
        scale(15);
        orangeAlienFace(facecolor_value, eyecolor_value, top_value, dot_value)
        pop();

        ///left shroom
        push();
        translate(width/4.5, height/2);
        scale(10);
        orangeAlienFace(facecolor_value, eyecolor_value, top_value, dot_value)
        pop();

        ///right shroom
        push();
        translate(748, height/2);
        scale(10);
        orangeAlienFace(facecolor_value, eyecolor_value, top_value, dot_value)
        pop();
      
    }
//   }
// }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
