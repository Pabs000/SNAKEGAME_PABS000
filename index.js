
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



function clearScreen() {
    ctx.fillStyle = 'black;'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}
}

function drawSnake(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(HeadX * tileCount, HeadY* tileCount)

    for(let i=0; i < snakebody.length; i++) {
        let part = snakebody[i]
    }
}



document.body.addEventListener('keydown', keyDown);


FUNCTION keyDown(event){


}
            if (event.keyDown)




// keycodes (W,A,S,D) (87,65,83,68)/////////(UP,RIGHT,DOWN,LEFT)   (38,39,40,37)
clearScreen();
drawGame();
setTimeout();
drawSnake();