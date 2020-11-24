
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var d1,d2,d3,ground,paper,options,bg,dust,pull
var waterMarkImg;

function preload()
{dustImg = loadImage("dustbingreen.png")
	bg=loadImage("bg.jpg")
	waterMarkImg=loadImage("Tushar Punia.png")
}

function setup() {
	createCanvas(1200, 550);
    options = {
		isStatic : true
	}

	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(600,520,1200,20,options);
	World.add(world,ground);
	d1=new Dustbin(1000,450,200,20);
	d2=new Dustbin(910,365,20,150);
	d3=new Dustbin(1090,365,20,150);
    paper=new Paper(100,400);
	pull=new constraint(paper.body,{x:100,y:400})
	Engine.run(engine);
   
	dust=createSprite(1000,395,200,200);
	dust.addImage("d",dustImg);
	dust.scale=0.7;


}


function draw() {
    background(bg);
  rectMode(CENTER);

  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,20);
  imageMode(CENTER)
  image(waterMarkImg,150,50,280,60)

 
  pull.display();
  paper.display();
  drawSprites();
  
 textSize(80);
 fill("black");
 stroke("red");
 text("Stretch to throw",300,170)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:-55});
	   }
}


function mouseDragged()
{
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  pull.fly();
}
