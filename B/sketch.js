function preload() {
  peas = loadImage(
    "https://i5.walmartimages.com/seo/Great-Value-Sweet-Peas-32-oz-Bag-Frozen_44272457-5c93-48c8-a673-749880e5667c.1dcb35c5d672df13f83ba041c3f77239.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(peas, 50, 100, 500, 500);
}

// function mouseClicked() {
//   stroke("green");
//   fill("green");
//   ellipse(mouseX, mouseY, 15);
// }


function draw() {
  stroke("green");
  fill("green");
  ellipse(mouseX, mouseY, 15);
}

