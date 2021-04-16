var snake,snakedImg;
var fruit1,fruit1Img;
var fruit2,fruit2Img;
var ground,backgrndImg;
var fruitGroup,fruit1,fruit2;

function preload(){
fruit1=loadImage("apple.png")
fruit2=loadImage("banana.png.png")
snakeImg=loadImage("snake.png")
backgrndImg=loadImage("background image.jpg")


}

function setup(){
ground=createSprite(300,180,600,20)
ground.addImage("ground",backgrndImg)
ground.scale=1.8
ground.x = ground.width /2;
ground.velocityX=-2

snake=createSprite(300,300,20,20)
snake.addImage("snake",snakeImg)
snake.scale=0.1
fruitGroup=createGroup()


}

function draw(){
createCanvas(900,900)

if(keyDown ("Right_Arrow")){
    snake.velocityX=2;
}

if(keyDown("Left_Arrow")){
    snake.velocityX=-2
}

if(keyDown("Up_Arrow")){
    snake.velocityY=-2
}

if(keyDown("Down_Arrow")){
    snake.velocityY=2
}


if(snake.isTouching(fruit1)){
    snake.scale=snake.scale+0.1
    fruit1.destroy()
}

if(snake.isTouching(fruit2)){
    snake.scale=snake.scale+0.1
    fruit2.destroy()
}


if (ground.x < 0){
    ground.x = ground.width/2;
  }
fruits()
drawSprites()
}


  function fruits(){
    if(World.frameCount%80===0){
      position = Math.round(random(1,2));
      fruit=createSprite(400,200,20,20);
      console.log(position)
       //using random variable change the position of fruit, to make it more challenging
      
      if(position==1)
      {
      fruit.x=400;
      fruit.velocityX=-(7+(score/4));
      }
      else
      {
        if(position==2){
        fruit.x=0;
        
    //Increase the velocity of fruit after score 4 or 10
        fruit.velocityX= (7+(score/4));
        }
      }
      
      fruit.scale=0.2;
       //fruit.debug=true;
       r=Math.round(random(1,4));
      if (r == 1) {
        fruit.addImage(fruit1);
      } else if (r == 2) {
        fruit.addImage(fruit2);
      } 
      
      fruit.y=Math.round(random(50,340));
     
      
      fruit.setLifetime=100;
      
      fruitGroup.add(fruit);
    }
}
