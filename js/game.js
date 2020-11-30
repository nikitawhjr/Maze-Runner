class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
  //player1.addImage("player1",player_img);
    
   player2 = createSprite(800,500);
   // player2.addImage("player2", player_img);
   // players=[player1,player2];

    //line1 = createSprite(displayWidth/2-500,displayHeight/2,5,600);
    //line2 = createSprite(displayWidth/2-378,displayHeight/2+300,245,5);
    line3 = createSprite(displayWidth/2+175,displayHeight/2+300,750,5);
    line4 = createSprite(displayWidth/2+547,383,5,600);
    line5 = createSprite(displayWidth/2-125,displayHeight/2-300,750,5);
    line6 = createSprite(1133,82,200,5);
    line7 = createSprite(260,345,5,400);
    line8 = createSprite(223,250,75,5);
    line9 = createSprite(700,615,875,5);
    line10 = createSprite(1140,425,5,225);
    line11 = createSprite(993,316,300,5);
    line12 = createSprite(458,545,400,5);
    line13 = createSprite(410,185,300,5);
    line14 = createSprite(800,517,5,200);
    line15 = createSprite(845,243,5,150);
    line16 = createSprite(500,283,5,200);
    line17 = createSprite(1036,170,5,170);
    line18 = createSprite(1085,170,100,5);
    line19 = createSprite(650,185,5,200);
    line20 = createSprite(500,380,150,5);
    line21 = createSprite(975,418,5,200);
    line22 = createSprite(660,475,275,5);
    line23 = createSprite(650,285,150,5);
    line24 = createSprite(850,170,130,5);
    line25 = createSprite(340,428,5,230);
    line26 = createSprite(350,314,120,5);
    line27 = createSprite(650,418,5,120);
    line28 = createSprite(655,578,5,70);
    Reward = createSprite(345,250,50,50);
  



        }

        maze(){
          
          
        }
    
    play(){
        
                form.hide();


                Player.getPlayerInfo();
                 //image(back_img, 0, 0, 1000, 800);
                 console.log(allPlayers);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                /* for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       

                     if(index === player.index){
                         
                         // to display player name on the basket.

                         
                     }
                    
                     //text to display player score.
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                     //fill code here, to destroy the objects. (Use the one in the class project 39)
                     // add the condition to calculate the score. and use update ti update the values in the database.
                  }*/
                

         
         

    }

    
}