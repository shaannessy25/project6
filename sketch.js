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

  marcher.x = marcher.x + marcher.speed; //updates the position of the object based on the speed

if(marcher.x >= width){   //conditional statement that makes the object move accrose the canvas
  marcher.speed = -7;

} else if(marcher.x < 1){
  marcher.speed = 7;

}

var cloneY;
cloneY = 0;
marcher.y = marcher.y + cloneY;

while(cloneY >= 0){
  ellipse(marcher.x, cloneY, marcher.size, marcher.size);
  cloneY = cloneY + 1;

}

}
