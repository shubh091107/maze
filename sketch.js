var database
var im1,im2,im3,im4,im5,im6,im7,im8
var player1,player2
var players;
var an1,an
var PlayerCount
var forms,player,game,GameState=0
var sound
let capture
var w,a,s,d
var allPlayers;
function preload(){
    
im1 =loadImage("images/2.png")
im2 =loadImage("images/4.png")
im3 =loadImage("images/6.png")
im4 =loadImage("images/8.png")
im5 =loadImage("images/10.png")
im6 =loadImage("images/12.png")
im7 =loadImage("images/14.png")
im8 =loadImage("images/16.png")
    
}


function setup(){
var canvas = createCanvas(windowWidth-100,windowHeight-100)
database = firebase.database()
game = new Game()
game.getState()
game.start()

}
/*capture = createCapture(VIDEO)
capture.size(250,200)
}
function draw(){
image(capture,windowWidth/2+300,windowHeight/2-300,150,100)
}*/
function draw(){
    background(255)
if (PlayerCount == 2){
    game.update(1)
}
if (GameState ===1){
    clear()
    game.play() 
}

    
}