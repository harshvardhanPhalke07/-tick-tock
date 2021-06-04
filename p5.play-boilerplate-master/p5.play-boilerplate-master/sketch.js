var scAngle, mnangle,hrAngle
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  // calculating time useing predifined functions
  hr= hour()
  mn= minute()
  sc=second()
}

function draw() {
  background(255,255,255);  
  drawSprites();
  scAngle = map(sc,0,60,0,360) 
  // drawing seconds hand 
  push()
  rotate (scAngle) // added angle of the second hand
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  mnAngle= map(sc,0,60,0,360)  
  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
 hrAngle(hr%12,0,12,0,360)
 push()
 rotate(hrAngle)
 stroke(0,0,255)
 strokeWeight(7)
 line(0,0,100,0)
 if(hr == 12 ){
 console.log("try opening the doors now !!")
 }
}
