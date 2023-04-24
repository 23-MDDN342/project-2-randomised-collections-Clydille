/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function orangeAlienFace(tilt_value, eye_value) {
  const bg_color3 = [231, 237, 123]; ///eyes
  const fg_color3 = [64, 39, 38]; ///face

  let headSize = 10
  let eyeSize = 2;
  let centerX = 0;
  let Iy = 2.5
  let distactBetweenEyes = 2
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, Iy, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX2, Iy, eyeSize, eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy+1, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy+1, eyeSize);
  }

  ///shrom top///

   fill(250, 163, 105) /// orange
  // stroke(199, 72, 34) 
  // strokeWeight(0.2);
  
  //shroomhead Top
  beginShape();
  vertex(0, 1);
  bezierVertex(-2, 1, -4.5, 1, -7.2, 0.5);
  bezierVertex(-9, -1, -10, -3, -10.5, -5.5);
  bezierVertex(-9.5, -8, -7.5, -9.5, -4.5, -10.5);
  bezierVertex(-2, -11, 0, -11.2, 4.5, -10.5);
  bezierVertex(7.5, -9.5, 9.5, -8, 10.5, -5.5);
  bezierVertex(10, -3, 9, -1, 7, 0.5);
  bezierVertex(4.5, 1, 2, 1, 0, 1);
  endShape();

  //shroomhead Top Dots

}


function simplePurpleFace() {
  fill(16, 18, 38);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-4, -4, 3);
  ellipse( 4, -4, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, 10, 1);
  ellipse( 2, 10, 1);
}
