var marcher, backgroundColor, marcherColor;

function setup () {
  createCanvas(400, 400);
  
  marcher = {
    x: 25,
    y: 25,
    size: 30,
    speed: 7,
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
  ellipse(marcher.x, marcher.y, marcher.size, marcher.size);

  marcher.x = marcher.x + marcher.speed;

if(marcher.x >= width){
  marcher.speed = -7;

} else if(marcher.x < 1){
  marcher.speed = 7;
}



  // #3 Use a while loop to draw clones of marcher

}
