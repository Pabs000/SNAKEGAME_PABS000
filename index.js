
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


//GameBoard--------------------------------
let speed = 10
let tileCount = 100;
let tileSize = canvas.width / tileCount
//SNAKE------------------------------------
let HeadX =  10;
let HeadY = 10;
const snakebody = []
let tail = 0


//SPEED-----------------------------------
let VelocityX = 0;
let VelocityY= 0;

let score = 0 

function drawGame(){
drawSnake();
clearSreen();
setTimeout(drawGame,100/ speed)
}
function clearScreen() {
    ctx.fillStyle = 'black;'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}
function drawSnake() {
ctx.fillStyle = "blue";
for (let i = 0; i < snakeParts.length; i++) {
let part = snakeParts[i];
ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }
}



document.body.addEventListener("keyup", keyUp);

//up
function keyUp(event)

{
    if (event.keyCode == 38 || event.keyCode == 87) {
   
        if (inputsYVelocity == 1) return;
        inputsYVelocity = -1;
        inputsXVelocity = 0;
      }
    
      //down
      if (event.keyCode == 40 || event.keyCode == 83) {
    
        if (inputsYVelocity == -1) return;
        inputsYVelocity = 1;
        inputsXVelocity = 0;
      }
    
      //left
      if (event.keyCode == 37 || event.keyCode == 65) {
      
        if (inputsXVelocity == 1) return;
        inputsYVelocity = 0;
        inputsXVelocity = -1;
      }
    
      //right
      if (event.keyCode == 39 || event.keyCode == 68) {

        if (inputsXVelocity == -1) return;
        inputsYVelocity = 0;
        inputsXVelocity = 1;
      }
    }



// keycodes (W,A,S,D) (87,65,83,68)/////////(UP,RIGHT,DOWN,LEFT)   (38,39,40,37)
clearScreen();
drawGame();
setTimeout();
drawSnake();