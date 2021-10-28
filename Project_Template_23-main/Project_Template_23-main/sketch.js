const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;
var playerbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  computerbase = new ComputerBase(width-150,height-200,100,100);
  playerbase = new Playerbase(width-1400,height-200,100,100);
  computer = new computer(width-150,height-340,95,200);	
  player = new player(width-1400,height-340,95,200)
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  computerbase.display();
  playerbase.show();
  computer.show();
  player.show();

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
