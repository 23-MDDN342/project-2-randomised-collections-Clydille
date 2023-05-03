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
        let dot_value = random(-10, 1);
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
      

        /// SHURBSS
   
        push()
        
        ///background
        //grass
        fill(178, 209, 153) ///light green
        circle(100, 500, 325) ///left
        circle(300, 500, 150) ///left
        circle(760, 500, 250) ///right
        circle(580, 500, 125) ///right

        ///forground 
        
        ///grass
        fill(128, 163, 100) /// darker green
        //left bush
        circle(0, 500, 350) ///left
        circle(960, 500, 290) ///right
        //right bush
        circle(200, 500, 200) ///left
        circle(760, 500, 190) ///right

        ///highlights top left shurbs
        fill(163, 199, 133) /// highlight
        circle(20, 400, 100) ///left

        fill(128, 163, 100) /// darker green
        circle(25, 415, 100) ///left

        //highlights middle
        fill(163, 199, 133) /// highlight
        circle(20, 455, 100) ///left
        circle(62, 455, 100) ///left
        circle(115, 490, 100) ///left
        circle(175, 490, 100) ///left

        ///shadow for highlights
        fill(128, 163, 100) /// darker green
        circle(5, 460, 100) ///left
        circle(60, 470, 100) ///left
        circle(115, 500, 100) ///left
        circle(175, 500, 100) ///left

        ///highlights top right shurbs
        translate(725,65)
        fill(163, 199, 133) /// highlight
        circle(20, 400, 100) ///right
        fill(128, 163, 100) /// darker green
        circle(25, 415, 100) ///right

        //highlights middle
        fill(163, 199, 133) /// highlight
        circle(20, 455, 100) ///right
        circle(62, 455, 100) ///right
        circle(150, 420, 100) ///right

        ///shadow for highlights
        fill(128, 163, 100) /// darker green
        circle(5, 460, 100) ///right
        circle(60, 470, 100) ///right
        circle(175, 500, 100) ///right
        circle(155, 429, 100) ///right

  
       pop()


    }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
