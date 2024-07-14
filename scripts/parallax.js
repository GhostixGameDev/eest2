
function doParallaxY(element){
   var positionY = window.scrollY/2;
   document.getElementById(element).style.backgroundPosition = "0 -" + (positionY/4.2) + "px";
}