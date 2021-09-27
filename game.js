class Game{
    constructor(){
    
    }
    getState(){
        var gamestates = database.ref('GameState')
        gamestates.on("value",function(data){
            GameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            GameState: state
        })
    }
  async  start(){
        if (GameState === 0){
            forms = new Form()
            player = new Player()
            var playerRef  = await database.ref('PlayerCount').once("value")
            if (playerRef.exists()){
                PlayerCount  = playerRef.val()
                player.getCount()
            }
            
            forms.display()
        }
    }
    play(){
        if (GameState === 1){
        forms.hide()
        player1 = createSprite(windowWidth/2,windowHeight/2+175,10,10)
        player1.addImage(im1)
        player1.scale = 0.5
        player2 = createSprite(windowWidth/2-100,windowHeight/2+175,10,10)
        player2.addImage(im2)
        player2.scale = 0.5
        players = [player1,player2];
        w= createSprite(windowWidth/2+400,windowHeight/2+100,40,40)
        a= createSprite(windowWidth/2+350,windowHeight/2+150,40,40)
        s= createSprite(windowWidth/2+400,windowHeight/2+150,40,40)
        d= createSprite(windowWidth/2+450,windowHeight/2+150,40,40)

        if(allPlayers !== undefined ){
            var index = 0;
            var x;
            var y;
            for (var plr in allPlayers){
                index = index + 1;
                x = displayWidth - allPLayers[plr].distance;
                y = displayHeight - allPlayers[plr].distance;
                players[index-1].x = x;
                players[index-1].y = y;

                if(index === player.index){
                    stroke(10);
                    fill("black");
                    ellipse(x,y,100,100)
                    players[index-1].shapeColor = "black";
                }
            }
        }
        if (keyDown(UP_ARROW)|| mouseIsOver(w)){
            player2.y = player2.y-10
            player2.update()
        }   
        if (keyDown(DOWN_ARROW)|| mouseIsOver(s)){}
        if (keyDown(RIGHT_ARROW)|| mouseIsOver(d)){}
        if (keyDown(LEFT_ARROW)|| mouseIsOver  (a)){}
       
    
    
}
    drawSprites()
    }

}
