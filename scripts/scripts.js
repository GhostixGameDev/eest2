let slideIndex = 0;
window.onload = showSlides; //Llamamos al slider una vez la pagina esta cargada.


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
