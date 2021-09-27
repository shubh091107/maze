class Player{
    constructor(){
        this.index = null
        this.name = null
    }
    getCount(){
        var playercountRef = database.ref("PlayerCount")
        playercountRef.on("value",(data)=>{
            PlayerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            PlayerCount : count
        })
    }
    update(){
        var playerCount = "players/player"+ this.index
        database.ref(playerCount).set({
            name:this.name
        })
    }
    
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}   