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
          agent.play('IdleSideToSide');
          agent.play("GestureDown");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#text2"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#section2"),
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
  element: $("#rover"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#patents"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.play('LookDownLeft');
          agent.speak("Lookin' good, since 1997!");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#nass"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#g4vid"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.play('Hearing_1');
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#vidquote"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#characters"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("Whatever you want me to be");
          agent.play("GetArtsy");
          agent.play("GetTechy");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#wrong"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#section3"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.play("Writing");
          agent.play("Searching");
          agent.play("EmptyTrash");
          agent.play("Save");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#joke"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#gender"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("Ladies love me");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#genderquote"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#kevan"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
        agent.play("GestureLeft");
          agent.speak("That's my dad!");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#kevquote"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#polarized"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("Totally harsh, dude");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#worst"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#kindchen"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.play("GetAttention");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#4chars"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#liveson"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("Life after Office 97");
          agent.play("SendMail");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#lettermeme"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#ebook"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("Ooh la la!");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#conq"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#sexy"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("I AM a sexy paperclip");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#mpreg"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#knowme"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("They really like me!");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#explosion"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
  }
});
var waypoint = new Waypoint({
  element: $("#bottom"),
  handler: function(direction){
    if (direction == "down"){
      clippy.load('Clippy', function(agent) {
        agent.moveTo(50, 100);
        agent.show();
          agent.speak("Only shooting stars...");
          agent.play("GoodBye");
      });
    }
    else{
     $(".clippy").remove();
    }
  }
});
var waypoint = new Waypoint({
  element: $("#sources"),
  handler: function(){
     $(".clippy").remove();
     $(".clippy-balloon").remove();
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
