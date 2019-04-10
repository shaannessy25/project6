var marcher, backgroundColor, marcherColor;

function setup () {
  createCanvas(400, 400);
  
  marcher = {
    x: 25,
    y: 500,
    size: 30,
    speed: 7,
  }
  
  backgroundColor = color("lightgrey");
  marcherColor = color("purple");
}

function draw () {
  background(backgroundColor);
  marcher.x = marcher.x + marcher.speed;
  // #4 Draw a tile floor // Bonus Challenge
  
  // #2 Make the marcher march back and forth

  stroke(75);
  //fill(marcherColor);
  ellipse(marcher.x, marcher.y, marcher.size, marcher.size);

   //updates the position of the object based on the speed

if(marcher.x >= width){   //conditional statement that makes the object move accrose the canvas
  marcher.speed = -7;

  } else if(marcher.x < 1){
  marcher.speed = 7;
  
}
for(var x = 0; x < width; x += 25){
  fill(212, 172, 130);
for( var y = 0; y < height; y += 25){
  rect(x, y, 25, 25);

}

}

var cloneY = 0;
while (cloneY < width){     //this loop creates multiple cicles in the y direction
  fill(0,122,122);
  ellipse(marcher.x - 10, cloneY, marcher.size, marcher.size);
  cloneY+=45;

}





}




