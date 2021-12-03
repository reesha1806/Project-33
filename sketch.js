const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var snow = [];
var snow2 = [];
function preload(){
  bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%60===0){
    snow.push(new Snow(random(0,800), 0,50,50));
  }
}

function draw() {
  background(bg);  

  Engine.update(engine);

  for(var k = 0; k < snow.length; k++){
    snow[k].display();
  }
  
  drawSprites();
}
