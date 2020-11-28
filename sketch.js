
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var paper1,box1,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,350,1200,20);
	paper1=new Paper(150,345,50)
	box1=new Box(700,310,20,100);
	box2=new Box(900,310,20,100)
	box3=new Box(800,310,220,20)





	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

	
	box1.display();
	ground.display();
	paper1.display();
	box2.display();
	box3.display();

	keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35,})
	}
}


