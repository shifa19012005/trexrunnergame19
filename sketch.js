
var trex,treximage,edges,ground,groundimage,invisibleground,cloudImage,obstaclesImage1,obstaclesImage2,obstaclesImage3,obstaclesImage4,obstaclesImage5,obstaclesImage6;
function preload(){
  treximage = loadAnimation("trex1.png","trex3.png","trex4.png");
  GroundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstaclesImage1 = loadImage("obstacle1.png");
  obstaclesImage2 = loadImage("obstacle2.png");
  obstaclesImage3 = loadImage("obstacle3.png");
  obstaclesImage4 = loadImage("obstacle4.png");
  obstaclesImage5 = loadImage("obstacle5.png"); 
  obstaclesImage6 = loadImage("obstacle6.png");
                              
}

function setup(){
  createCanvas(600,200);
  trex=createSprite(50,180);
  trex.addAnimation("running",treximage);
  trex.scale=0.5;
  edges = createEdgeSprites();
  ground=createSprite(50,180);
  ground.addImage(GroundImage);
  invisibleground=createSprite(60,200,600,5);
  invisibleground.visible=false;
  
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY +0.8;   trex.collide(invisibleground); 
  spawnClouds()
  SpawnObstacles();
  
  drawSprites();
  

}
function spawnClouds(){
  if (frameCount % 60 === 0){
var cloud = createSprite(600,120,10,10);
    cloud.addImage(cloudImage);
  cloud.scale = 0.5;
  cloud.velocityX = -3;
    cloud.y = random (50,100);
    cloud.lifetime = 200
  }
}
  function SpawnObstacles(){
    if (frameCount % 60 === 0){
    var Obstacles = createSprite(600,170,5,5);
    
    Obstacles.scale = 0.5;
    Obstacles.velocityX = -3;
      var rand = Math.round(random(1,6))
      switch(rand){
          case 1:
          Obstacles.addImage(obstaclesImage1);
          break;
          case 2:
          Obstacles.addImage(obstaclesImage2);
          break;
        case 3:
          Obstacles.addImage(obstaclesImage3);
          break;
          case 4:
          Obstacles.addImage(obstaclesImage4);
          break;
          case 5:
          Obstacles.addImage(obstaclesImage5);
          break;
          case 6:
          Obstacles.addImage(obstaclesImage6);
          break;
          
          
      }
      Obstacles.lifetime = 200;
    } 
    
  }