let pointx; 
let pointy; 
let cor;
let pointx2; 
let pointy2; 
let cor2;
let pointx3;
let pointx4;
let pointy3;
  let pointy4;
  
function setup () {
  createCanvas(600, 400);
  background( "purple");
  cor=color( random(0, 255), random(0, 255), random(0, 255) )
  pointx=0
  pointx2=0
  pointy2=random(height)
  pointy=80
  pointx3=0
  pointx4=0
  pointy3=random(height)
  pointy4=random(height)
}


function draw() {
  if(mouseIsPressed)
  cor=random(0,255)
  pointx+=random(0, 3)
  pointy+=random(-3, 3);
  pointx2+=random(0, 3)
  pointy2+=random(-3, 3)
  pointy3+=random(-3, 3)
  pointy4+=random(-3, 3)
  pointx3+=random(0, 3)
  pointx4+=random(0, 3)
  fill(cor)
  circle(pointx, pointy, 50);
  circle(pointx2, pointy2, 50);
  circle(pointx3, pointy3, 50);
  circle(pointx4, pointy4, 50);
}