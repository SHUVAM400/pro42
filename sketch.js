var bg,ISS,spacecraft,issimg,scimg,scimg1,scimg2,scimg3;
var hasDocked=false;




function preload(){
  bg=loadImage("spacebg.png");
issimg = loadImage("iss.png");
scimg = loadImage("spacecraft1.png");
scimg1 = loadImage("spacecraft2.png");
scimg2 = loadImage("spacecraft3.png");
scimg3 = loadImage("spacecraft4.png");
}




function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(250,360);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.2;
  ISS = createSprite(300,200);
  ISS.addImage(issimg);
  ISS.scale = 0.9;

}

function draw() {
  background(bg); 
  if(!hasDocked){
spacecraft.x = spacecraft.x+random(-1,1)
if(keyDown("UP_ARROW")){
spacecraft.y = spacecraft.y-2;
}
if(keyDown("LEFT_ARROW")){
  spacecraft.x = spacecraft.x-2;
  spacecraft.addImage(scimg3);
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x+2;
    spacecraft.addImage(scimg2);
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y+2;
      spacecraft.addImage(scimg1);
      }

     
  }

  if(spacecraft.y<=(ISS.y+70) && spacecraft.x<=(ISS.x-20)){
hasDocked = true;
textSize(20);
fill("red")
text("Docking Sucssesful", 500,200);
  }
  drawSprites();
}