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
function orangeAlienFace(tilt_value,eye_value, mediumdot_value) {
  let orange = (43, 27, 26)

  const bg_color3 = [248, 255, 125]; ///eyes
  const fg_color3 = [orange]; ///face

  let headSize = 9
  let eyeSize = 1.5;
  let centerX = 0;
  let Iy = 2.5
  let distactBetweenEyes = 2
  
  // rotation in degrees
  angleMode(DEGREES);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, Iy, headSize, headSize);

  // 2 traditonal eyes
    fill(bg_color3);
   
// middle eye

    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy+1, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy+1, eyeSize);


  let bigdot = 5


  ///shrom top///

   fill(250, 163, 105) /// orange
   stroke(199, 72, 34) 
   strokeWeight();
  
  //shroomhead Top
  push()
  translate(0, 1)
  beginShape();
  vertex(0, 1);
  bezierVertex(-2, 1, -4.5, 1, -7, 0.5);
  bezierVertex(-9, -1, -10, -3, -9.8, -5.5);
  bezierVertex(-9.5, -8, -7.5, -9.5, -4.5, -10.5);
  bezierVertex(-2, -11, 0, -11.2, 4.5, -10.5);
  bezierVertex(7.5, -9.5, 9.5, -8, 9.8, -5.5);
  bezierVertex(10, -3, 9, -1, 7, 0.5);
  bezierVertex(4.5, 1, 2, 1, 0, 1);
  endShape();
  pop()

  //shroomhead Top Dots
  fill(250, 202, 140) /// lighter orange 

  if(mediumdot_value>= 1.5){

  ///left 
  ellipse(-5, 0.5, mediumdot_value, mediumdot_value) /// bottom left dot
  ellipse(-1, -5, mediumdot_value +0.5, mediumdot_value +0.5) /// left little near big right dot
  ellipse(-5.9, -5, 5.5, 5.5) /// bottom left dot

  ///right
  ellipse(3, -3, bigdot, bigdot) /// right big dot
  ellipse(7, -6, mediumdot_value +0.5, mediumdot_value +0.5) /// right big dot
}

  ///SHADOW
  fill(182, 162, 186) ///shadow color 
  stroke(149, 130, 153) 
  ellipse(0, 8.2, 15, 1) /// shadow 
}


/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  
  const bg_color3 = [248, 255, 125]; ///eyes
  const fg_color3 = [43, 27, 26]; ///face

  let headSize = 10
  let eyeSize = 2;
  let centerX = 0;
  let Iy = 3
  let distactBetweenEyes = 2
 
// head
 noStroke();
fill(fg_color3);
 ellipse(centerX, Iy, headSize, headSize); 

  // eyes

    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy+1, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy+1, eyeSize);

  
/// square shroom top
fill(252, 138, 136) /// red
rect(-10, -10, 20, 12, 5, 5, 1, 1);

///dots
fill(255, 197, 196)
ellipse(-1, -2, 2, 2) /// left little near big right dot
ellipse(-5, 0.5, 1.5, 1.5) /// bottom left dot
ellipse(-5.9, -5, 5.5, 5.5) /// top left dot

  ///right
  ellipse(2, -3, 5, 5) /// right big dot
  ellipse(7, -6, 2, 2) /// right big dot
}
