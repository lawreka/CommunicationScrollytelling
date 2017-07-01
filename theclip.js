//this is how wapoints work
var waypoint = new Waypoint({
  element: $("#title"),
  handler: function(){
    console.log("waypoint");
  }
});
//load clippy
// clippy.load('Clippy', function(agent) {
//     // Do anything with the loaded agent
//     agent.show();
// });
//play an animation
// agent.Play('Searching');
//play a random animation
// agent.animate();
//get a list of all the animations
// agent.animations();
//show text balloon
// agent.speak('Blah');
//move to the given point, use animation if available
// agent.moveTo(100, 100);
//gesture at a given point (if gesture animation is available)
// agent.gestureAt(200,200);
//stop the current animation in the queue
// agent.stopCurrent();
//stop all actions in the queue and go back to idle mode
// agent.stop();
