function setup() {
    createCanvas(600, 600);
    background("rgb(255,0,0)");}
  
  function draw() {
    fill("rgb(255,0,0)");
    stroke("rgb(0,0,0)")
    strokeWeight(5);
    
    if(mouseIsPressed)
  
    circle(mouseX, mouseY, 30);
  }
  