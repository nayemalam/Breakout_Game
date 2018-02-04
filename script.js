var c = document.getElementById('canv'); //canvas
var ctx = c.getContext('2d');

setInterval(draw, 10); //function, milliseconds

var x = c.width/2;
var y = c.height - 30;
var dx = 2; //offset
var dy = -2;
var ballRadius = 10;
var paddeHeight = 10;
var paddleWidth = 75;
var paddleX = (c.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed == true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed == false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}


function drawBall() {
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,2*Math.PI);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, c.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}



function draw() {
  ctx.clearRect(0, 0, c.width, c.height); //prevent trailing
  // drawing code
  drawBall();
  drawPaddle();


  if(y + dy >c.height || y + dy < 0){
    dy = -dy;
  }
  if(x + dx >c.width || x + dx < 0){
    dx = -dx;
  }
  if(rightPressed && paddleX < c.width-paddleWidth){
    paddleX += 7;
  }else if(leftPressed && paddleX > 0) {
    paddleX -=7;
  }

  x = x+dx; //change in x
  y = y+dy; //change in y
}



/* //controller
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#45C37B";
ctx.fill();
ctx.closePath();

//circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

//enemy
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.stroke();
ctx.closePath(); */
