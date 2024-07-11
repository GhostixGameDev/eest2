

//Funcion que maneja carrouseles.
function showSlides(slidesID, delay, slideIndex) {
	let i;
	let length = slidesID.length;
	var slides = new Array(length);
	for(i=0; i < length; i++) {
		slides[i] = document.getElementById(slidesID[i]);
	}

	for (i = 0; i < length; i++) {
		//Establecemos que ninguna imagen pueda verse.
		slides[i].style.display = "none";
	}

	//Le sumamos 1 al indice de las imagenes.
	slideIndex++;

	//Si el slider llega a la ultima imagen se reinicia.
	if (slideIndex > length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";

	// Delay para el cambio de imagenes (En ms).
	if(delay != 0){
		setTimeout(function(){
			showSlides(slidesID, delay, slideIndex)
		}, delay);
	}
	//Si el delay es de 0 se maneja manualmente mediante flechas.
	var rightArrow = document.getElementById("sliderMoveRight");
	var leftArrow = document.getElementById("sliderMoveLeft");
	
	rightArrow.onclick = (function() {
		showSlides(slidesID, delay, slideIndex);
	});
	leftArrow.onclick = function(){
		if(slideIndex != 1){
			showSlides(slidesID, delay, slideIndex-2);
		}else{
			showSlides(slidesID, delay, length-1);
		}
	};

}



//Funcion que extiende el menu de la sidebar y demas.
function extendDiv(objective){
	const object = document.querySelector(objective);
	console.log(object);
	object.classList.toggle("active");
}
