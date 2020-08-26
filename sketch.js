var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  
  thickness= random(22,38);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;
 

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);
 
  //if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    
    if(bullet.collide(wall)){
      bullet.speed=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>40){
    bullet.shapeColor=color(255,0,0);
  }

  if(damage<40){
    bullet.shapeColor=color(0,255,0);
  }
}

//}

  //if(hascollided(bullet,wall))
  //{
    //bullet.velocityX=0;
    //var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    //if(damage>10)
    //{
      //wall.shapeCOlor=color(255,0,0);
    //}

    //if(damage<10){
      //wall.shapeColor=color(0,255,0);
    //}

  //}
  
  drawSprites();
}

//function hascollided(Ibullet,Iwall){

  //  bulletRightEdge=Ibullet.x+Ibullet.width;
    //wallLeftEdge=Iwall.x;
    //if(bulletRightEdge>=wallLeftEdge)
    //{
      //return true;
    
    //}
    //return false;
//}