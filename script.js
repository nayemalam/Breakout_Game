var c = document.getElementById('canv'); //canvas
var ctx = c.getContext('2d');

setInterval(draw, 10); //function, milliseconds

var x = c.width/2;
var y = c.height - 30;
var dx = 2; //offset
var dy = -2;
var ballRadius = 10;


function drawBall() {
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,2*Math.PI);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height); //prevent trailing
  // drawing code
  drawBall();

  if(y + dy < 0){
    dy = -dy;
  }
  if(y + dy > c.height)
    dy = -dy;
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
