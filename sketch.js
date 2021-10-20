const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;


//Declare an array for arrows playerArrows = [ ]
var playerArrows = []; // declaration of an array --> var array_name = [];
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display(); 

 // Use for loop to display arrow using showArrow() function
 //include for loop  for (var = initial; var <= ending; increment/decrement){ code /instructions for action}
 for ( var i = 0; i < playerArrows.length; i++){
    showArrows(i,playerArrows);
 // actions
 }
  

}

function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;
                               
    var arrow = new PlayerArrow(posX, posY, 100, 10);

    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow);
  }
}

function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows

     if (playerArrows.length){

      var angle = playerArcher.body.angle + PI / 2;
      playerArrows[playerArrows.length -1].shoot(angle);

     }
  }


}

 

//Display arrow and Tranjectory
function showArrows(index, arrows) {

 arrows[index].display();

}
//Example of an array 
// var fruits = ["mango", "orange", "grapes"];
// var num = fruits.length;
// the value of num  = 2
//fruits[0]--- > mango // first element //fruits[index] index = 0
//fruits[1]---> orange

//fruits[2] ---> grapes

// last element  index =  array.length -1
// fruits.push("cherries");
//fruits--> mango,orange,grapes,cherries
// fruits.push("strawberries");
//fruits--> mango,orange,grapes,cherries, strawberries
// fruits.push("bannana ");
//fruits--> mango,orange,grapes,cherries, strawberries, banana




