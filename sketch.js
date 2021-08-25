var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orange,leaf
var appleimg,orangeimg,leafimg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage('apple.png')
  orangeimg=loadImage('orangeLeaf.png')
  leafimg=loadImage('leaf.png')
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,3));
   if (frameCount % 80 == 0) {
      if (select_sprites == 1) {
         createapple(); 
        }
         else if (select_sprites == 2) { 

          createorange();
         }
          else {
             createleaf();
             } 
            }
  drawSprites();
}
function createorange(){
  orange=createSprite(random(50,350),40,10,10)
  orange.addImage(orangeimg)
  orange.scale=0.07
  orange.velocityY=3
  orange.lifetime=150
}
function createleaf(){
 leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage( leafimg)
  leaf.scale=0.07
  leaf.velocityY=3
  leaf.lifetime=150
}
function createapple(){
 apple =createSprite(random(50,350),40,10,10)
 apple.addImage( appleimg)
 apple.scale=0.07
 apple.velocityY=3
 apple.lifetime=150
}