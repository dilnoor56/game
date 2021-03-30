const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var P_circle,ground1,tittle,p_button,play,t_box
var gameState=I
var I
var P
var b1

function setup(){
   createCanvas(1200,600)
   engine = Engine.create();
   world = engine.world;

  t_box=createSprite(250,150,300,100) 
  t_box.shapeColor="white"
  p_button=createSprite(100,300,100,70)
  p_button.shapeColor="white"
  b1=new Ground(702,351,200,20)
   P_circle = new Circle(200,200,50)
   ground1=new Ground(600,height,1200,40)

}

function draw(){
    background("black");
    if(keyDown("space")){
        p_button.shapeColor="black"
        t_box.shapeColor=0
    }
   
    Engine.update(engine);
    P_circle.display()
    ground1.display()
    b1.display()
    drawSprites()
    textSize(40)
    fill("black")
    text("Supreme DashI",100,150)
    textSize(20)
    fill("black")
    text("Press space",50,300)
}