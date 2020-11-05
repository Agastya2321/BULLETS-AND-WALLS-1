var bullet,wall,thickness
var speed;
var weight;




function setup() {
  createCanvas(1600,400);
  wall = createSprite(900, 200, 50, 200);
  
  bullet =  createSprite(170,200,40,10)
  bullet.shapeColor = "white"

  thickness = random(22,83);
  speed =  Math.round(random(55,90))
  weight = Math.round(random(400,1500));
  
 }
  
  


function draw() {
  background("blue")
  
  drawSprites();
  
  bullet.velocityX = speed;
  
  textSize(15);
  text("Speed of the Bullet: "+speed,220,30)
  
  textSize(15)
  text("Weight of the Bullet: "+weight,220,50)

  

  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
    
   
  }

  function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>= wallLeftEdge){
      return true
    }
    return false;
  }
  
  

 



