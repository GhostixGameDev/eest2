
function doParallaxY(element, speed){
   var positionY = window.scrollY/2;
   document.getElementById(element).style.backgroundPosition = "0 -" + (positionY/speed) + "px";
}