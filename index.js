
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


//GameBoard--------------------------------
let speed = 5
let tileCount = 100;
let tileSize = canvas.width / tileCount
//SNAKE------------------------------------
let HeadX =  20;
let HeadY = 20;
const SnakeBody = []
let Tail = 0


//SPEED-----------------------------------
let VelocityX = 0;
let VelocityY= 0;

let score = 0 

function drawGame(){
drawSnake();
clearSreen();
setTimeout(drawGame,1000/ speed)
}
function clearScreen() {
    ctx.fillStyle = 'black;'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}
function drawSnake() {
ctx.fillStyle = "blue";
for (let i = 0;i<snakeBody.length;i++) 
{
let part = snakeBody[i];
ctx.fillRect(HeadX * tileCount, HeadY * tileCount, tileSize, tileSize);
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