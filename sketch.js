
var astronaut

/*astronaut=createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.addAnimation("brushing",brush);
astronaut.addAnimation("gyming1",gym1,"gyming2",gym2);
astronaut.addAnimation("gyming11",gym11,"gyming12",gym12);
astronaut.addAnimation("eating1",eat,"eating2",eat2);
astronaut.addAnimation("drinking1",drink,"drinking2,drink");
astronaut.addAnimation("moving",move,"moving1",move);
astronaut.scale=0.1
*/

function setup() {
  createCanvas(800,400);
 astronaut= createSprite(300, 230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1
}

function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
  bath=loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png")
  eat=loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  
}

function draw() {
  background(bg);
  textSize(20)  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  if(keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0


  }
  if(keyDown("LEFT_ARROW"))
  {
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350
    astronaut.x=150

    astronaut.velocityX=0.5
    astronaut.velocityY=0.5


  }
  if(keyDown("RIGHT_ARROW"))
  {
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    
    astronaut.x=300
    astronaut.velocityX=0
    astronaut.velocityY=0


  }
  if(keyDown("DOWN_ARROW"))
  {
    astronaut.addAnimation("gymming",bath)
    astronaut.changeAnimation("gymming")
    
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0


  }
  drawSprites();
}
