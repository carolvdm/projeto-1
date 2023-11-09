function setup() {
    createCanvas(400, 400);
     background("pink");
  }
  
  function draw() {
   
    stroke("black");
     if(mouseIsPressed)  {
  rect(mouseX,mouseY,20, 20);
  }
  }