
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
    
    }
}

function main(){
   
    
    window.requestAnimationFrame(main);
}
window.requestAnimationFrame(main);
      // Add an event listener to the keypress event.
      window.addEventListener("keydown", function(event) { 
    
          
      });