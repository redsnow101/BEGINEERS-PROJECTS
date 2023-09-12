let board;
let boardWidth = 500;
let boardHeight = 500;
let context;


let snakeX = 250;
let snakeY =250;
let snake = {
    x : snakeX,
    y : snakeY,
    width : 10,
    height : 10,
    speed: 10,
    dx : 0,
    dy : 0
}

let foodX = 100;
let foodY = 100;
let food = {
    x : foodX,
    y : foodY,
    width : 10,
    height : 10
}

window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    // button for snake movement
    document.addEventListener("keydown", handleKeyPress);

    drawGame();
    setInterval(update, 100);
}

function drawGame(){

    // to clear the board for next time
    context.clearRect(0,0, boardWidth,boardHeight);

    //board 
    context.fillStyle = "black";
    context.fillRect(0, 0, boardWidth, boardHeight);

    // snake
    context.fillStyle = "green";
    context.fillRect(snake.x, snake.y, snake.width, snake.height);

    // food
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, 10, 10);
}

function update(){
    // food.x = Math.floor(Math.random() * boardWidth);
    // food.y = Math.floor(Math.random() * boardHeight);

    snake.x += snake.dx;
    snake.y += snake.dy;

    // collision check
    if (snake.x < 0) {
        snake.x = 0;
    } else if (snake.x + snake.width > boardWidth) {
        snake.x = boardWidth - snake.width;
    }

    if (snake.y < 0) {
        snake.y = 0;
    } else if (snake.y + snake.height > boardHeight) {
        snake.y = boardHeight - snake.height;
    }

    drawGame();
}

function handleKeyPress(event){

    switch(event.key){
        case "ArrowUp":
            snake.dx = 0;
            snake.dy = -snake.speed;
            break;
        
        case "ArrowDown":
            snake.dx = 0;
            snake.dy = snake.speed;
            break;

        case "ArrowLeft":
            snake.dy = 0;
            snake.dx = -snake.speed;
            break;

        case "ArrowRight":
            snake.dy = 0;
            snake.dx = snake.speed;
            break;

    }

}