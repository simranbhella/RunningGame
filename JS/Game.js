class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      runner1 = createSprite(100,200);
      runner1.addImage(runner1Img);
      
    }
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      player.getCarsAtEnd();
  
      
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        //index of the array
        var index = 0;
        background("black");
        image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
        //x and y position of the cars
        var x = 200;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          
  
          if (index === player.index){
            stroke(10)
            fill("red")
            ellipse(x,y,70,70);
            runners[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
  
      console.log(player.distance);
      if(player.distance > 4420){
        gameState = 2;
        player.rank += 1
        Player.updateCarsAtEnd(player.rank);
        
      }
      drawSprites();
    }
    end(){
        console.log("Game Over.")
        console.log(player.rank);
    }
  }
