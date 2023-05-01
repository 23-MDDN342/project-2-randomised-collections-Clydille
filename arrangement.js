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

  // draw a 7x4 grid of faces
  // let w = canvasWidth / 7;
  // let h = canvasHeight / 4;
  // for(let i=0; i<4; i++) {
  //   for(let j=0; j<7; j++) {
  //     let y = h/2 + h*i;
  //     let x = w/2 + w*j;
     
        // center face
        let mediumdot_value = random(1, 2);
        let facecolor_value = random(2,4);
        let eyecolor_value = random(1, 2);
        let top_value = random(1,4);
        let is_cyclops = random(0, 100);

        if(is_cyclops < 10) {
          mediumdot_value = (1,5 )
          facecolor_value = (1,5);
          eyecolor_value = random(1, 5);
          top_value = random(0, 1.7);
        }

        push();
        translate(width/2, height/2);
        scale(15);
        orangeAlienFace(mediumdot_value, facecolor_value, eyecolor_value, top_value)
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
