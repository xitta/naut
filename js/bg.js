var allImage;
var looper;
var degrees = 0;
var toAdd = 0.002;
var speedAdd = 0;
var delta;

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  allImage = document.getElementsByTagName("IMG");
  rotateAnimation();
}

setInterval(rotateAnimation, 10);
function rotateAnimation(){
	if(navigator.userAgent.match("Chrome")){
    for(let i = 0; i < allImage.length; i++){
       allImage[i].style.WebkitTransform = "rotate("+degrees+"deg)";
    }
	}
	degrees = degrees + toAdd + speedAdd;

  if(speedAdd>0){
    speedAdd = speedAdd - 0.01;
  } else if(speedAdd<0){
    speedAdd = speedAdd + 0.01;
  }
	if(degrees > 360){
		degrees = 1;
	}
}
function passTroughWheel(arg_speedAdd){
  speedAdd = arg_speedAdd*0.6;
}
/*
// Based on http://www.sitepoint.com/html5-javascript-mouse-wheel/
var handleWheel = function (event) {
  // cross-browser wheel delta
  // Chrome / IE: both are set to the same thing - WheelEvent for Chrome, MouseWheelEvent for IE
  // Firefox: first one is undefined, second one is MouseScrollEvent
  var e = window.event || event;
  // Chrome / IE: first one is +/-120 (positive on mouse up), second one is zero
  // Firefox: first one is undefined, second one is -/+3 (negative on mouse up)
  delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  speedAdd = delta * 1.5;
  document.getElementById("status").innerHTML = delta;
  e.preventDefault();
};

var addMouseWheelEventListener = function (scrollHandler) {
  if (window.addEventListener) {
    // IE9+, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHandler, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHandler, false);
  } else {
    // // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHandler);
  }
}
addMouseWheelEventListener(handleWheel);
*/
