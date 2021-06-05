var font, fontSize, initialText, listLength, rand; 
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]\:;"<,>.?/';

function preload(){
 font = loadFont('data/HoneyComb.otf') ;
}

function setup() {
createCanvas(windowWidth, windowHeight); 
  background(255, 218, 84);
  textSize(48); 
  textAlign(CENTER); 
  fill(255, 174, 0); 
  noStroke(); 
  textFont(font);  
  initialText="HoneyComb"; 
  listLength =letters. length; 
  
}


function draw() {
  push(); 
  fill(242, 133, 0);
  textSize(220); 
  text(initialText, width/2, 400); 
  pop(); 
  
  push(); 
  fill(242, 133, 0);
  textSize(100); 
 text("quick!", width/2, 600); 
 pop(); 
 
  push(); 
  fill(242, 133, 0);
  textSize(50); 
 text("scrape away the extra honeycomb", width/2, 700); 
 pop(); 
 
 
 frameRate(2); 
  rand = int(random(0, listLength-1)); 
  textSize(random(150, 500)); 
  text(letters[rand], random(width), random(height)); 
}

function mouseDragged(){
  push();
  fill(255, 218, 84);
  noStroke(); 
  polygon(mouseX, mouseY, 50, 6); 
  pop();
}

function mousePressed(){ 
  push();
  fill(255, 218, 84); 
  noStroke(); 
  polygon(mouseX, mouseY, 50, 6);
  pop(); 
}

function keyPressed(){
  if (key===' '){
   push(); 
    background(255, 218, 84);
     fill(242, 133, 0); 
  textSize(220); 
  text(initialText, width/2, 400);
  pop(); 
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
  }
