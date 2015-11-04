
      // Gets a handle to the element with id canvasOne.
      var canvas = document.getElementById("canvas");
      // Get a 2D context for the canvas.
      var ctx = canvas.getContext("2d");
      


var player={
    x:10,
    y:10,
    r:3,
    draw: function(){
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
      // An object for the ball.
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
   
    
    window.requestAnimationFrame(main);
}
window.requestAnimationFrame(main);
      // Add an event listener to the keypress event.
      window.addEventListener("keydown", function(event) { 
    
          
      });