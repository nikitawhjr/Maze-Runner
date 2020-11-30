var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var player_img;
// create the variables for the score and displaying scores. and intialize with zero

function preload(){
 
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
 // text(mouseX+","+mouseY,mouseX,mouseY)
  game = new Game();
  game.getState();
  game.start();

 
  
  
}

function draw() {
  background("white");
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

}