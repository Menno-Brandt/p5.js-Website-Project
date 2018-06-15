function setup() {
  //Canvas
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(250, 250, 100);

}

function draw() {
  noCursor()
  background(250, 250, 100);

  //Crosshair

  //Middle Dot Ellipse
  ellipse(mouseX, mouseY, 7, 7);

  //Top Rectangle
  noStroke();
  rect(mouseX-2, mouseY-35, 5, 25);

  //Bottom Rectangle
  rect(mouseX+9, mouseY, 25, 5);




}
