//need to make the star a shape so it can take a fill

// function star(x, y, w, c) {
//   let r = w / 2;
//   push();
//   translate(x, y);
//   line(-c, -c, 0, -r);
//   line(0, -r, c, -c);
//   line(c, -c, r, 0);
//   line(r, 0, c, c);
//   line(c, c, 0, r);
//   line(-c, -c, -r, 0);
//   line(-r, 0, -c, c);
//   line(-c, c, 0, r);
//   pop();
// }

//Star blinking every second
// Moon phases every 30 seconds
// Color change from light to dark blue over one minute

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  push();
  //background/sky (one minute = 4 zeroes)
  let pbg = 60000;
  let cbg = millis() % pbg;
  // hue background
  let hbg = map(cbg, 0, pbg, 0, 255);
  background(0, 0, hbg);
  pop();

  push();
  //moon base
  fill("gold");
  stroke("gold");
  ellipse(width / 2, height / 2, 200);

  //moon overlap (30 seconds= 4 zeroes)
  let pm = 30000;
  let cm = millis() % pm;
  let dm = map(cm, 0, pm, width / 2 - 205, width / 2 + 205);
  fill(0, 0, hbg);
  stroke(0, 0, hbg);
  ellipse(dm, height / 2, 200);
  dm = dm + 1;
  pop();

  //star (1 second)
  fill("gold");
  stroke("gold");
  strokeWeight(10);

  push();
  beginShape();
  translate(width / 3, height / 3);
  let op1 = 10; //outer point
  let ip1 = 3; //inner point
  vertex(0, -op1);
  vertex(ip1, -ip1);
  vertex(op1, 0);
  vertex(ip1, ip1);
  vertex(0, op1);
  vertex(-ip1, ip1);
  vertex(-op1, 0);
  vertex(-ip1, -ip1);
  endShape(CLOSE);
  pop();

  push();
  beginShape();
  translate(width / 5, height / 5);
  let op2 = 10; //outer point
  let ip2 = 3; //inner point
  vertex(0, -op2);
  vertex(ip2, -ip2);
  vertex(op2, 0);
  vertex(ip2, ip2);
  vertex(0, op2);
  vertex(-ip2, ip2);
  vertex(-op2, 0);
  vertex(-ip2, -ip2);
  endShape(CLOSE);
  pop();

  //need to make them twinkle somehow > cover em up?

  push();
  fill(0, 0, hbg);
  stroke(0, 0, hbg);
  let ps1 = 2000; //period star
  let cs1 = millis() % ps1;
  if (cs1 > 1000) {
    ellipse(width / 3, height / 3, 50);
  }
  pop();

  push();
  fill(0, 0, hbg);
  stroke(0, 0, hbg);
  let ps2 = 2000; //period star
  let cs2 = millis() % ps2;
  if (cs2 < 1000) {
    ellipse(width / 5, height / 5, 50);
  }
  pop();

  pop();
}
