var database;
var game, player, form;
var gameState = 0;
var playerCount;
var allPlayers;
var car1, car2, car3, car4, cars;


function setup(){
  database = firebase.database();
  createCanvas(displayWidth-40,displayHeight-150);

game = new Game()
game.getState();
game.start()

  
}

function draw(){
  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear();
    game.play()
  }
  
}
