let slideIndex = 0;
window.onload = setup;

function setup(){
	//Aca corremos todo lo que deba correrse en la carga.
	showSlides(); //Llamamos al carrousel.
	/* delayAnimation("arrow", 3000); */ //Establecemos delay a las flechitas NOT WORKING.
}
function showSlides() {
	let i;

	//CREAMOS UN ARRAY PARA LAS IMAGENES DEL SLIDER.
	var slides = [];
	slides[0] = document.getElementById("slideimg1");
	slides[1] = document.getElementById("slideimg2");
	slides[2] = document.getElementById("slideimg3");
	slides[3] = document.getElementById("slideimg4");

	for (i = 0; i < slides.length; i++) {
		//Establecemos que ninguna imagen pueda verse.
		slides[i].style.display = "none";
	}

	//Le sumamos 1 al indice de las imagenes.
	slideIndex++;

	//Si el slider llega a la ultima imagen se reinicia.
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	slides[slideIndex - 1].style.display = "block";

	// Delay para el cambio de imagenes (En ms).
	setTimeout(showSlides, 6000);
}
//Funcion que da delay a las animaciones.
/* function delayAnimation(classToSearch, delay){
	var elements = document.getElementsByClassName(classToSearch);
	var length = elements.length;
	for (var i = 0; i < length; i++) {
		elements[i].classList.add("animated");
		(function(elements){
			setTimeout(function(){
				elements.classList.remove("animated");
				setTimeout(function(){elements.classList.add("animated");}, delay);}, delay); //Duración de la animación
		})(elements[i]);
	}
	
} */

//Funcion que extiende el menu.
function extendMenu(){
	const sidebar = document.querySelector(".sidebar");
	sidebar.classList.toggle("active");
}
//Extender modalidades.
function extendModalidades(){
	const modalidades = document.querySelector(".modalidadesDesplegable");
	modalidades.classList.toggle("active");
}