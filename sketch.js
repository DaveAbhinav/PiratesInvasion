const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower,towerImage;
function preload(){
    towerimage = loadImage("./assets/tower.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

tower = new Tower(150,350,160,310);

ground = new Ground(0,height-1,width*2,1);
    
}

function draw(){
    background(189);
    Engine.update(engine);
   tower.display();
   ground.display();
}
