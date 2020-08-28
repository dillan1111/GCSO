var car1, car2, wall1, wall2;
var speed, weight, speed2, weight2;
function setup() {
  createCanvas(1200,600);
  speed=random(55,90);
  weight=random(400,1500);
  speed2=random(55,90);
  weight2=random(400,1500);
  car1 = createSprite(50, 150, 50, 50);
  car1.velocityX = speed;
  car2 = createSprite(50, 380, 50, 50);
  car2.velocityX = speed2;
  wall1 = createSprite(1100,150,50,200);
  wall1.shapeColor = color(80,80,80)
  wall2 = createSprite(1100,380,50,200);
  wall2.shapeColor = color(80,80,80)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (wall1.x-car1.x < (wall1.width + car1.width)/2){
    car1.velocityX = 0;
    var deformation1 = 0.5 * weight* speed* speed/22509;
    if(deformation1 > 180){
      car1.shapeColor = color(255,0,0);
    }
    if(deformation1 < 180 && deformation1 > 100){
      car1.shapeColor = color(230,230,0);
    }
    if(deformation1 < 100){
      car1.shapeColor = color(0,255,0);
    }
  }
  if (wall2.x-car2.x < (wall2.width + car2.width)/2){
    car2.velocityX = 0;
    var deformation2 = 0.5 * weight2* speed2* speed2/22509;
    if(deformation2 > 180){
      car2.shapeColor = color(255,0,0);
    }
    if(deformation2 < 180 && deformation2 > 100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformation2 < 100){
      car2.shapeColor = color(0,255,0);
    }
  }
}