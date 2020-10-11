var fixedrect
var movingrect
function setup() {
  
  createCanvas(800,400);
   movingrect= createSprite(300, 200, 100, 100);
  fixedrect=createSprite(600,200,100,100);
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
}

function draw() {
  background("b"); 

  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
{
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red" 
}
else
{
  movingrect.shapeColor="green"
fixedrect.shapeColor="green"
}
  drawSprites();
}