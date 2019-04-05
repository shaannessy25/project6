var marcher, backgroundColor, marcherColor;

function setup () {
  createCanvas(400, 400);
  
  marcher = {
    x: 25,
    y: 25,
    size: 30,
    speed: 1,
  }
  
  backgroundColor = color("lightgrey");
  marcherColor = color("purple");
}

function draw () {
  background(backgroundColor);
  
  // #4 Draw a tile floor // Bonus Challenge
  
  // #2 Make the marcher march back and forth

  stroke(75);
  fill(marcherColor);
  ellipse(marcher.x + marcher.speed, marcher.y, marcher.size, marcher.size);
  
  while(marcher.x <= width){
    marcher.speed++;
    
  }
  // #3 Use a while loop to draw clones of marcher
}