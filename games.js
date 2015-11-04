
      // Gets a handle to the element with id canvasOne.
      var canvas = document.getElementById("canvas");
      // Get a 2D context for the canvas.
      var ctx = canvas.getContext("2d");
      
var scores=0;
var times=0;

var player={
    x:100,
    y:200,
    r:3,
    draw: function(){
        //
        //console.log("1");
        ctx.clearRect(0,0,1000,1000);
        ctx.beginPath();
        ctx.arc(player.x,player.y,player.r,0,2*Math.PI);
        ctx.fill();
    },
    collisions: function(){
    if(player.x<=0+player.r){player.x=1+player.r;}
        if(player.x>=canvas.width-player.r){player.x=canvas.width-player.r;}
       if(player.y<=0+player.r){player.y=1+player.r;}
        if(player.y>=canvas.height-player.r){player.y=canvas.height-player.r;}
    }
}
      // An object for the ball with its position, radius, velocity and accelaration
      var ball1 = {
        position: {x: 200, y: 10}
        , radius: 3
        , velocity: {x: 10, y: 0}
	, acceleration: {x: 0, y: 0.000001}
   ,draw:function(){
        // Draw the ball.
	ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        ctx.arc(ball1.position.x, ball1.position.y, ball1.radius, 0, 2 * Math.PI);
        ctx.fill();
		
   }
   ,update: function(){     
          // Update the y location.
	ball1.velocity.y = 1;
	ball1.position.x += ball1.velocity.x;
        ball1.position.y += ball1.velocity.y;
   }
   ,collisions: function(){
		// Keep the animation going while the ball has not touched the canvas bottom.
        if ((ball1.position.x >= canvas.width - ball1.radius) ||  (ball1.position.x <= ball1.radius))
          ball1.velocity.x = -ball1.velocity.x;    
	if ((ball1.position.y >= canvas.height - ball1.radius) ||  (ball1.position.y <= ball1.radius)){
          ball1.velocity.y = -ball1.velocity.y;
         ball1.position.y=10;
    }
   }
      }
      
      
      // Calculate difference between centres
	var distX = player.x - ball1.position.x;
	var distY = player.y - ball1.position.y;
	// Get distance with Pythagoras
	var dist = Math.sqrt((distX * distX) + (distY * distY));
 var req;	

function main(){
   //console.log("1");
    ball1.update();
    player.draw();
    ball1.draw();
    ball1.collisions();
    player.collisions();
    ctx.font="10px Verdana";
	ctx.fillText("score: "+scores,10,150);
    ctx.fillText("time: "+times,200,150);
	ctx.fillStyle = "#ff0000";
var distX = player.x - ball1.position.x;
	var distY = player.y - ball1.position.y;
	// Get distance with Pythagoras
	var dist = Math.sqrt((distX * distX) + (distY * distY));
        if(dist<player.r+ball1.radius){
            ctx.clearRect(0,0,1000,1000);
            ctx.font="30px Verdana";
            ctx.fillText("score: "+scores,10,50);
            ctx.fillText("time: "+times,10,90);
            ctx.fillStyle = "#ff0000";
                 return;
            console.log("finished");
        }
    
    req=window.requestAnimationFrame(main);
}
//Function to calculate the scores
setInterval(function score(){scores+=10;},100);
//Function to calculate time interval
setInterval(function time(){times+=1;ball1.radius+=0.5},1000);
req=window.requestAnimationFrame(main);
       // Add an event listener to the keypress event.
      window.addEventListener("keydown", function(event) { 
        // Just log the event to the console.
          if(event.keyCode==39){//right
            player.x+=10;
              //console.log(event);
          }
          if(event.keyCode==37){//left
            player.x-=10;
              //console.log(event);
          }
          if(event.keyCode==40){//down
            player.y+=10;
              //console.log(event);
          }
          if(event.keyCode==38){//up
            player.y-=10;
             // console.log(event);
          }
          
      });
