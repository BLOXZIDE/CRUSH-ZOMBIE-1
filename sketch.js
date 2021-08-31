const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1, wall2;
var bridge;
var con;
var jointLink,jointPoint;
var stones= []
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall1 = new Base(width-465,height-280,200,200)
  wall2 = new Base(width-1280,height-280,200,200)
  ground = new Base(width/2,height-10,width,10)
  bridge = new Bridge(15,{x:width/2-400,y:height/2});
  jointPoint = new Base(width-600,height/2 + 10, 40 ,20);
  Matter. Composite. add(bridge.body,jointPoint);
  jointLink = new Link(bridge, jointPoint);
   
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for(var i = 0; i< 8; i++){
    var x = random(width/2 - 200, width/2 + 100);
    var y = random(-10, 140);
    var stone = new Stone(x,y,40);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  wall1.show()
  wall2.show()
  ground.show()
  bridge.show()

  for(var stone of stones){
    stone.display();
  }
}
