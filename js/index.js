
var winWidth = 0;
var winHeight = 0;
var prop = 0;
var maxSize = 700;
var siteState = "home"; // latest // crew


var objImg =    ["constellation",    "map",    "teamwork",     "lca"];
var objSize =   [             60,       40,           60,          50];
var objXPos =   [            40,      60,          40,          60];
var objYPos =   [             100,       200,           400,          800];


var debugs = document.getElementById('debID');
var onresize = function(e) {
   var objectToMesure = document.getElementById("iframeID");
   winWidth = $(document).width();
   winHeight = $(document).height();
   prop = (winHeight/winWidth).toFixed(2);
  // debugs.innerHTML = winWidth + " : " + winHeight + " : " + prop; // + " " ;
   if (prop > 1.25) {
     document.getElementById("title").style.fontFamily = 'brandonlight';
     TweenMax.to("#logoCon", 1*aniSpeed, {ease: Power1.easeOut, css:{left:"120%"}})
     TweenMax.to("#logoConTop", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"20%"}})
   } else {
     document.getElementById("title").style.fontFamily = 'brandonthin';
     TweenMax.to("#logoCon", 1*aniSpeed, {ease: Power1.easeOut, css:{left:"100%"}})
     TweenMax.to("#logoConTop", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"-20%"}})
   }
}

window.addEventListener("resize", onresize);
window.addEventListener("DOMContentLoaded", onresize);




window.addEventListener("DOMContentLoaded", initStuff);
function initStuff (e) {
  //TweenMax.to("#cubettino", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"-10%",width:winWidth*1.2, height:winHeight*1.5}})
}
//document.getElementById("cubettino").onclick = function() {goToLatest()};
document.getElementById("latest").onclick = function() {next()};
var aniSpeed = 0.7;
function goToLatest() {
  if(siteState == "home"){
    TweenMax.to("#cubettino", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"-10%",width:winWidth*1.2, height:winHeight*1.5}})
    TweenMax.to("#latest", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"40%"}})
    TweenMax.to("#latestButton", 1*aniSpeed, {ease: Power1.easeOut, css:{fontSize:"9vw"}})

    document.getElementById("latestButton").style.fontFamily = 'brandonthin';
    TweenMax.to("#title", 1*aniSpeed, {ease: Power1.easeOut, css:{top:-800}})
    TweenMax.to("#canvaContainer", 0.6*aniSpeed, {ease: Power1.easeOut, css:{top:"45%",width:800, height:800}})
    siteState = "latest";

    //TweenMax.to("#latest", .5*aniSpeed, { opacity:0, delay:1.5});
  //  TweenMax.to("#latest", 2.5*aniSpeed, {css:{top:"-30%"}, delay:1.5});
    //setTimeout(startLatest, 1500);
  }
}
function startLatest() {
  if(siteState == "latest"){
      alert("f")
  }
}
function goToHome() {
  if(siteState == "latest"){
    TweenMax.to("#cubettino", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"81%",width:60, height:60}});
    TweenMax.to("#latest", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"82%"}});
    TweenMax.to("#latestButton", 1*aniSpeed, {css:{fontSize:"30px"}});

    setTimeout(function() {document.getElementById("latestButton").style.fontFamily = 'brandon';}, 500);
    TweenMax.to("#title", 2*aniSpeed, {ease: Power4.easeOut, css:{top:"50%"}})
    TweenMax.to("#canvaContainer", 1*aniSpeed, {ease: Power1.easeOut, css:{top:"50%",width:"100%", height:"100%"}});
    siteState = "home";
  }
}
function previous(){
  //debugs.innerHTML = siteState;
  if(siteState == "home"){
    //alert("nothing")
  } else if(siteState == "latest"){
    goToHome();
  }
}
function next(){
  //debugs.innerHTML = siteState;
  if(siteState == "home"){
    //window.open("https://www.linkedin.com/company/nautgmbh", "_blank");
  } else if(siteState == "latest"){
    //goToCrew();
  }
}
function goToCrew() {
  // crew
}// Based on http://www.sitepoint.com/html5-javascript-mouse-wheel/
var handleWheel = function (event) {
  // cross-browser wheel delta
  // Chrome / IE: both are set to the same thing - WheelEvent for Chrome, MouseWheelEvent for IE
  // Firefox: first one is undefined, second one is MouseScrollEvent
  var e = window.event || event;
  // Chrome / IE: first one is +/-120 (positive on mouse up), second one is zero
  // Firefox: first one is undefined, second one is -/+3 (negative on mouse up)
  delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  speedAdd = delta * 1.5;

  if(speedAdd > 0){
    next();
  } else if(speedAdd < 0) {
    previous();
  }
//  if (typeof (window.frames[0].passTrough) == "function"){
    window.frames[0].passTrough(speedAdd);
//  } else {alert("resultFrame.Reset NOT found");}
  //document.getElementById("status").innerHTML = delta;
  e.preventDefault();
}

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
