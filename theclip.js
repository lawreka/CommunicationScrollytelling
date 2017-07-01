setInterval(function () {
        moveRight();
    }, 3000);
var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;
$('#slider').css({ width: slideWidth, height: slideHeight });
$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
$('#slider ul li:last-child').prependTo('#slider ul');
function moveRight() {
  $('#slider ul').animate({
      left: - slideWidth
      }, 200, function () {
         $('#slider ul li:first-child').appendTo('#slider ul');
         $('#slider ul').css('left', '');
       });
};

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
