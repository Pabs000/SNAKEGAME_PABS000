//creating game loop first 
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 5
let tileCount = 100
let tileSize = canvas.width / tileCount;
let snake = [headx,heady,snakebody,tail]
let headx =  1
let heady = 1
const snakebody = []
let tail = 0

let VelocityX = 0;
let VelocityY= 0;



function drawGame(){
drawSnake();
clearSreen();
setTimeout(drawGame,100/ speed)



function clearScreen() {
    ctx.fillStyle = 'black;'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}
}

function drawSnake(){
    ctx.fillStyle = 'light-blue'

    for(let i=0; i < snakebody.length; i++) {
        let part = snakebody[i]
    }
}


clearScreen();
drawGame();
setTimeout();
drawSnake();