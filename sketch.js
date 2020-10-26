const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var block1, block2;
var polygon;
var ball;
var slingshot;

function preload()
{
  polygon = loadImage("Polygon.jpg")
}
function setup() 
{
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 360, 150, 15);
  ground2 = new Ground(625, 180, 150, 15);

  block1 = new Block(340, 335, 20, 40);
  block2 = new Block(360, 335, 20, 40);
  block3 = new Block(380, 335, 20, 40);
  block4 = new Block(400, 335, 20, 40);
  block5 = new Block(420, 335, 20, 40);
  block6 = new Block(440, 335, 20, 40);
  block7 = new Block(460, 335, 20, 40);

  block8 = new Block(360, 295, 20, 40);
  block9 = new Block(380, 295, 20, 40);
  block10 = new Block(400, 295, 20, 40);
  block11 = new Block(420, 295, 20, 40);
  block12 = new Block(440, 295, 20, 40);

  block13 = new Block(380, 255, 20, 40);
  block14 = new Block(400, 255, 20, 40);
  block15 = new Block(420, 255, 20, 40);

  block16 = new Block(400, 215, 20, 40);

  block17 = new Block(565, 155, 20, 40);
  block18 = new Block(585, 155, 20, 40);
  block19 = new Block(605, 155, 20, 40);
  block20 = new Block(625, 155, 20, 40);
  block21 = new Block(645, 155, 20, 40);
  block22 = new Block(665, 155, 20, 40);
  block23 = new Block(685, 155, 20, 40);

  block24 = new Block(585, 115, 20, 40);
  block25 = new Block(605, 115, 20, 40);
  block26 = new Block(625, 115, 20, 40);
  block27 = new Block(645, 115, 20, 40);
  block28 = new Block(665, 115, 20, 40);

  block29 = new Block(605, 75, 20, 40);
  block30 = new Block(625, 75, 20, 40);
  block31 = new Block(645, 75, 20, 40);

  block32 = new Block(625, 35, 20, 40);

  ball = Bodies.circle(50,200,20); 
  World.add(world,ball);

  slingshot = new Slingshot(ball, {x : 100, y : 200});

  Engine.run(engine);

}

function draw() {
  background(0);  

  Engine.update(engine);

  fill("brown");
  ground1.display();
  ground2.display();

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("darkblue");
  block13.display();
  block14.display();
  block15.display();
  fill("midnightblue");
  block16.display();

  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("blue");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("darkblue");
  block29.display();
  block30.display();
  block31.display();
  fill("midnightblue");
  block32.display();

  image(polygon, ball.position.x, ball.position.y, 40, 40);

  slingshot.display();
  
  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        slingshot.attach(ball);
    }
}