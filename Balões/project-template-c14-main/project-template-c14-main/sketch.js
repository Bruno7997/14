var bow, arrow, bll1, bll2, bll3, bll4;
var backg;
var bowImg, arrowImg, green_bllImg, red_bllImg, pink_bllImg ,blue_bllImg, backgImg;

function preload(){
  ballons = new Group();
  arow = new Group();
  backgImg = loadImage("background0.png");
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");
  red_bllImg = loadImage("red_balloon0.png");
  green_bllImg = loadImage("green_balloon0.png");
  blue_bllImg = loadImage("blue_balloon0.png");
  pink_bllImg = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  backg = createSprite(0,0,400,400);
  backg.addImage(backgImg);
  backg.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImg); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  backg.velocityX = -3 

    if (backg.x < 0){
      backg.x = backg.width/2;
    }
  
  bow.y = World.mouseY
  
  
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  
  var alebll = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(alebll){
    case 1:
    redBalloon()
    break;
    case 2:
    blueBalloon()
    break;
    case 3:
    greenBalloon()
    break;
    case 4:
    pinkBalloon()
break;

  }}
  if (arow.collide(ballons)){
ballons.destroyEach()
arow.destroyEach()
  }
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arow.add(arrow)
}


function redBalloon() {
  var red
  red = createSprite(Math.round(random(20, 370)),0, 10, 10);
  red.addImage(red_bllImg);
  red.velocityY = 3;
  red.lifetime = 150;
  red.scale = 0.1;
ballons.add(red)
}

function blueBalloon() {
  var blue
  blue = createSprite(Math.round(random(20, 370)),0, 10, 10);
  blue.addImage(blue_bllImg);
  blue.velocityY = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  ballons.add(blue)
}

function greenBalloon() {
  var green
  green = createSprite(Math.round(random(20, 370)),0, 10, 10);
  green.addImage(green_bllImg);
  green.velocityY = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  ballons.add(green)
}

function pinkBalloon() {
  var pink
  pink = createSprite(Math.round(random(20, 370)),0, 10, 10);
  pink.addImage(pink_bllImg);
  pink.velocityY = 3;
  pink.lifetime = 150;
  pink.scale = 1.5;
  ballons.add(pink)
}
