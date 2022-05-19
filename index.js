//creating game loop first 
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 5

let snake = [headx,heady,snakebody,tail]
let headx =  1
let heady = 1
const snakebody = []
let tail = 0


functiondrawGame(){
    
clearSreen();
setTimeout(drawGame,100/ speed)

for(let i=0; i < snakebody.length; i++) {
    let part = snakebody[i]
}

function clearScreen() {
    ctx.fillStyle = 'black;'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.height);
}
}

drawGame();