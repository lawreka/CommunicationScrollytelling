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

var waypoint = new Waypoint({
  element: $("#top"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
          agent.moveTo(50, 100);
          agent.show();
          agent.play('LookLeft');
          agent.play('Wave');
          agent.speak("That's me!");
          agent.play("GestureDown");
      });
    }
  }
});
var waypoint = new Waypoint({
  element: $("#text2"),
  handler: function(direction){
    if (direction == "down"){
      $(".clippy").remove();
      $(".clippy-balloon").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#text3"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
          agent.moveTo(50, 100);
          agent.show();
          agent.speak("Mi casa es su CASA!");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#patents"),
  handler: function(direction){
    if (direction == "down"){
      $(".clippy").remove();
      $(".clippy-balloon").remove();
    }
  }
});

// ["Congratulate", "LookRight", "SendMail", "Thinking", "Explain", "IdleRopePile", "IdleAtom", "Print", "Hide", "GetAttention", "Save", "GetTechy", "GestureUp", "Idle1_1", "Processing", "Alert", "LookUpRight", "IdleSideToSide", "GoodBye", "LookLeft", "IdleHeadScratch", "LookUpLeft", "CheckingSomething", "Hearing_1", "GetWizardy", "IdleFingerTap", "GestureLeft", "Wave", "GestureRight", "Writing", "IdleSnooze", "LookDownRight", "GetArtsy", "Show", "LookDown", "Searching", "EmptyTrash", "Greeting", "LookUp", "GestureDown", "RestPose", "IdleEyeBrowRaise", "LookDownLeft"]

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
