
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg, boy;

function preload(){
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100, 340, 50, 50);
	boy.addImage(boyImg);
	boy.scale = 0.09;

	//Create the Bodies Here.
	ground = new Ground(width/2, 390, width, 20);
	tree = new Tree(500, 100, 300, 300);
	stone = new Stone(100, 200, 50, 50);
	mango1 = new Mango(600, 125, 35, 35);
	mango2 = new Mango(650, 150, 35, 35);
	mango3 = new Mango(700, 200, 35, 35);
	mango4 = new Mango(530, 185, 35, 35);
	mango5 = new Mango(580, 225, 35, 35);
	mango6 = new Mango(730, 170, 35, 35);
	string = new Constraint(stone.body, {x:55, y:290});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  string.display();
  
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){
	string.release();
}

function keyPressed(){
	if(keyCode === 32){
		string.attach();
	}
}


