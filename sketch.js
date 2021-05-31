var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, runner1, runner2, runner3, runner4;
var runner1Img, runner2Img, runner3Img, runner4Img, pathImg;

function preload(){
  //runner1Img = loadImage("runnergame.gif");
  //pathImg = loadImage("background11.jpeg");
  //path2Img = loadImage("pathImage.jpeg");

}

function setup(){
    database = firebase.database();
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
  drawSprites();
}
