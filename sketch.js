const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world;
var maxDrops = 100;
var dropsArr = [];
var umbrella;
function preload(){
    
}

function setup(){
createCanvas(400,800);
engine = Engine.create();
world = engine.world;
umbrella = new Umbrella(200,500);
if(frameCount % 150 === 0){
    for(var i = 0; i<maxDrops; i++){
        dropsArr.push(new Drops(random(0,400),random(0,400)));
    }
}
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        dropsArr[i].showDrop()
        dropsArr[i].updateY()
    }
}