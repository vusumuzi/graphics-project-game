
      // Gets a handle to the element with id canvas.
      var canvas = document.getElementById("canvas");
      // Get a 2D context for the canvas.
      var ctx = canvas.getContext("2d");
      
var scores=0;
var times=0;
var start=false;
var pauses=false;

//Creating the Player object
var player={
    x:100,
    y:200,
    r:3,
    
    //This function draws a player
    draw: function(){
        //
        //console.log("1");
        ctx.clearRect(0,0,1000,1000);
        ctx.beginPath();
        ctx.arc(player.x,player.y,player.r,0,2*Math.PI);
        ctx.fill();
    },
    //Player collision function
    collisions: function(){
    if(player.x<=0+player.r){player.x=1+player.r;}
        if(player.x>=canvas.width-player.r){player.x=canvas.width-player.r;}
       if(player.y<=0+player.r){player.y=1+player.r;}
        if(player.y>=canvas.height-player.r){player.y=canvas.height-player.r;}
    }
}

      //Creating ball1
      // An object for the ball with its position, radius, velocity and accelaration
      var ball1 = {
        position: {x: 200, y: 10}
        , radius: 3
        , velocity: {x: 10, y: 0}
	, acceleration: {x: 0, y: 0.000001}
   ,draw:function(){
        // Drawing the ball.
	ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.beginPath();
        ctx.arc(ball1.position.x, ball1.position.y, ball1.radius, 0, 2 * Math.PI);
        ctx.fill();
		
   }
   ,update: function(){     
          // Updating  the y location.
	ball1.velocity.y = 1;
	ball1.position.x += ball1.velocity.x;
        ball1.position.y += ball1.velocity.y;
   }
   ,collisions: function(){
		// Keep the animation going while the ball has not touched the canvas bottom.
       //When ball touches the canvas a new ball comes up again
        if ((ball1.position.x >= canvas.width - ball1.radius) ||  (ball1.position.x <= ball1.radius))
          ball1.velocity.x = -ball1.velocity.x;    
	if ((ball1.position.y >= canvas.height - ball1.radius) ){
          ball1.velocity.y = -ball1.velocity.y;
         ball1.position.y=10;
    }
   }
      }
      
      
      // Calculate difference between centres
	var distX = player.x - ball1.position.x;
	var distY = player.y - ball1.position.y;
	// Get distance using  Pythagoras theory
	var dist = Math.sqrt((distX * distX) + (distY * distY));
 var req;	

// Main function of the game. It gives the ball upadate, draws the player, draws the ball and has the player and ball collisions
function main(){
    if(start==true){
   //console.log("1");
    ball1.update();
    player.draw();
    ball1.draw();
    ball1.collisions();
    player.collisions();
    ctx.font="10px Verdana";
	ctx.fillText("score: "+scores,10,30);
    ctx.fillText("time: "+times,10,10);
	ctx.fillStyle = "#ff0000";
var distX = player.x - ball1.position.x;
	var distY = player.y - ball1.position.y;
        
	// Get distance using the  Pythagoras formular
	var dist = Math.sqrt((distX * distX) + (distY * distY));
        if(dist<player.r+ball1.radius){
            ctx.clearRect(0,0,1000,1000);
            ctx.font="30px Verdana";
            ctx.fillText("score: "+scores,10,60);
            ctx.fillText("time: "+times,10,30);
            ctx.fillText("Game Over: ",10,90);
            ctx.fillStyle = "#ff0000";
            start=false;
            man=0;
                 return;
            console.log("finished");
        }
    }
    req=window.requestAnimationFrame(main);
}

//Function to calculate the scores in the game
setInterval(function score(){scores+=10;},100);

//Function to calculate time interval. Sets the time when the ball will be released
setInterval(function time(){times+=1;ball1.radius+=0.5;},1000);

       // Add an event listener to the keypress event.
       //Pressing the arrow keys for the player 
      window.addEventListener("keydown", function(event) { 
        // Just log the event to the console.
          if(event.keyCode==39){//right arrow key
            player.x+=10;
              //console.log(event);
          }
          if(event.keyCode==37){//left arrow key
            player.x-=10;
              //console.log(event);
          }
          if(event.keyCode==40){//down arrow key
            player.y+=10;
              //console.log(event);
          }
          if(event.keyCode==38){//up arrow key
            player.y-=10;
             // console.log(event);
          }
          
      });
var man=0;
var man1=0;

// A function to start playing  the game
function starts(){
    ctx.clearRect(0,0,1000,1000);
    start=true; 
    stops=false;
    player.x=100;
    player.y=200;
    ball1.radius=1;
    ball1.position.x=10;
    ball1.position.y=10;
    times=0;
    scores=0; 
    if(man==0){
        man++;
    main();
        
    }
}
//A fuction to pause the game
// Can stop the  game and play again
function pause(){
    if(man1==0){
    pauses=true;
    start=false;
    ctx.clearRect(0,0,1000,1000);
    ctx.font="60px Verdana";
	ctx.fillText("Game Paused: ",120,60);
	ctx.fillStyle = "#ff0000";
        man1++;
    }
    else{
        pauses=false;
        start=true;
        man1--;
    }
    
}
