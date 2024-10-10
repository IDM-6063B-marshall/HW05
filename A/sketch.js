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
// Moon phases every minute
// Color change from light to dark blue over one hour

function setup() {
  createCanvas(windowWidth, windowHeight);

}

let x = 0;

function draw() {

  push();
  //background/sky (one minute = 4 zeroes)
  //want to make it fade back out also??
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
  ellipse(width / 3, height / 2, 100);

  //moon overlap (30 seconds= 4 zeroes)
  let pm = 30000;
  let cm = millis() % pm;
  let dm = map(cm, 0, pm, width / 3 - 105, width / 3 + 105);
  fill(0, 0, hbg);
  stroke(0, 0, hbg);
  ellipse(dm, height / 2, 100);
  dm = dm + 1;
  pop();

  push();
  //star (1 second)
  fill("gold");
  stroke("gold")
  strokeWeight(10);
  // let ps = 1000;
  // let cs = millis() % ps;
  // let ds = map(cs, 0, ps, 30, 3);
  // star(width / 2, height / 2, 10, 3);

  beginShape();
  translate(width / 2, height / 2);
  let op = 100; //outer point
  let ip = 15; //inner point
  vertex(0, -op);
  vertex(ip, -ip);
  vertex(op, 0);
  vertex(ip, ip);
  vertex(0, op);
  vertex(-ip, ip);
  vertex(-op, 0);
  vertex(-ip, -ip);
  endShape(CLOSE);

  pop();
  
  
}
