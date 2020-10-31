var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 60, 50);
  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "yellow";


}

function draw() {
  background(220,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("movingRect.y " +( movingRect.y - fixedRect.y));

   console.log("Height / 2 "+ ( (movingRect.height + fixedRect.height)/2));

if(movingRect.x - fixedRect.x < (movingRect.width/2 + fixedRect.width/2)
  && fixedRect.x - movingRect.x < (movingRect.width/2 + fixedRect.width/2)
  && movingRect.y - fixedRect.y < (movingRect.height/2 + fixedRect.height/2)
  && fixedRect.y  - movingRect.y < (movingRect.height/2 + fixedRect.height/2)
  )
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else
{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  drawSprites();
}