var bg1,bg2,bg3,form,system,code,security;
var score=0;
var sec2;

function preload() {
 
   //load image for the treasure background
  bg1= loadImage("aladdin_cave.jpg")
  bg2= loadImage("aladdin_cave2.jpg")
  bg3= loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();

 
  
  
}

function draw() {
  background(bg1);
  clue1(); 
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background


if(score === 2){
  background(bg2);
  clue1(); 
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
}
  
 
  
if(score === 3) {
    clear()
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}