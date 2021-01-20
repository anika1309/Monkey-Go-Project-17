
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(100,340,20,50);
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1;

ground = createSprite(400,350,800,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);

FoodGroup = new Group();
obstaclesGroup = new Group();

score = 0;

  
}


function draw() {
background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/60) 
  text("Survival Time: "+ survivalTime, 100,50);
}

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addAnimation("banana",bananaImage);
    banana.scale=0.10;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }  
}


function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addAnimation("obstacle",obstacleImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 200;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}




