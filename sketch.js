var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
 
  fixedrect = createSprite(400, 200, 50, 100);
  movingrect = createSprite(500,200,100,50);
  
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  console.log(movingrect.x-fixedrect.x);

  if((movingrect.x - fixedrect.x) < (movingrect.width/2 + fixedrect.width/2)&&
  (fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 )){
    
    movingrect.shapeColor = "green";
    fixedrect.shapecolor = "blue";

  }
  else{
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "red";
  }
  drawSprites();
}