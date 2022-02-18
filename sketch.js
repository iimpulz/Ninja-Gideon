var ninja,forest,samurai1,samurai2,samurai3,samurai4,end;
var forestImg,ninjaImg,samurai1Img,samurai2Img,samurai3Img,samurai4Img,endImg;
var enemysDefeat = 0;
var samurai1G,samurai2G,samurai3G,samurai4Group;
var warning, warningImg;
//GameState (Estados del juego)
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  forestImg = loadImage("ninjaForest.jpg");
  ninjaImg = loadAnimation("ninjaRunning1.png","ninjaRunning2.png","ninjaRunning3.png","ninjaRunning4.png","ninjaRunning5.png","ninjaRunning6.png");
  samurai1Img = loadImage("samurai1.png");
  samurai2Img = loadImage("samurai4.png");
  samurai3Img = loadImage("samurai3.png");
  samurai4Img = loadImage("samurai2.png");
  endImg = loadImage("gameOver.png");
  warningImg = loadImage("samurai2.png");
}

function setup(){
  createCanvas(500,600);
  
//  Mover el fondo
forest=createSprite(600,300);
forest.addImage(forestImg);
forest.velocityX = -4;

warning=createSprite(450,40);
warning.addImage(warningImg);
warning.scale=0.15;

ninja = createSprite(70,580,20,20);
ninja.addAnimation("running",ninjaImg);
ninja.scale=0.3;

end = createSprite(250,300);
end.addImage(endImg);
end.visible=false;

samurai1G=new Group();
samurai2G=new Group();
samurai3G=new Group();
samurai4Group=new Group();

}

function draw() {

if(gameState===PLAY){
background(0);
ninja.y = World.mouseY;

edges= createEdgeSprites();
ninja.collide(edges);

//código para reiniciar el fondo
if(forest.x < 0 ){
  forest.x = width/2;
}

  createsamurai1();
  createsamurai2();
  createsamurai3();
  createsamurai4();

  if (samurai1G.isTouching(ninja)) {
    samurai1G.destroyEach();
    enemysDefeat=enemysDefeat+50;
  }
  else if (samurai2G.isTouching(ninja)) {
    samurai2G.destroyEach();
    enemysDefeat=enemysDefeat+100;
    
  }
  else if(samurai3G.isTouching(ninja)) {
      samurai3G.destroyEach();


     enemysDefeat=enemysDefeat + 150;

  }
  else{
    if(samurai4Group.isTouching(ninja)) {
      gameState=END;

      end.visible=true
      
       ninja.destroy();
    
      samurai1G.destroyEach();
      samurai2G.destroyEach();
      samurai3G.destroyEach();
      samurai4Group.destroyEach();
      
      samurai1G.setVelocityYEach(0);
      samurai2G.setVelocityYEach(0);
      samurai3G.setVelocityYEach(0);
      samurai4Group.setVelocityYEach(0);
   
  }
}

drawSprites();
textSize(25);
fill("black");
text("Points: "+ enemysDefeat,30,50);
text("Avoid the chief: ",250,50)
}

}

function createsamurai1() {
if (frameCount % 200 == 0) {
var samurai1 = createSprite(500,40, 10, 10);
samurai1.y=Math.round(random(100, 550))
samurai1.addImage(samurai1Img);
samurai1.scale=0.3;
samurai1.velocityX = -3;
samurai1.lifetime = 260;
samurai1G.add(samurai1);
}
}

function createsamurai2() {
if (frameCount % 200 == 0) {
  var samurai2 = createSprite(500,40, 10, 10);
  samurai2.y=Math.round(random(100, 550))
samurai2.addImage(samurai2Img)
samurai2.scale=0.3;
samurai2.velocityX = -4;
samurai2.lifetime = 260;
samurai2G.add(samurai2);
}
}

function createsamurai3() {
if (frameCount % 300 == 0) {
  var samurai3 = createSprite(500,40, 10, 10);
  samurai3.y=Math.round(random(100, 550))
samurai3.addImage(samurai3Img);
samurai3.scale=0.3;
samurai3.velocityX = -6;
samurai3.lifetime = 260;
samurai3G.add(samurai3);
}
}

function createsamurai4(){
if (frameCount % 400 == 0) {
  var samurai4 = createSprite(500,40, 10, 10);
  samurai4.y=Math.round(random(100, 550))
samurai4.addImage(samurai4Img);
samurai4.scale=0.3;
samurai4.velocityX = -6;
samurai4.lifetime = 260;
samurai4Group.add(samurai4);
}
}
