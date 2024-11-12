//Funcion que extiende el menu de la sidebar y demas.
function extendDiv(objective){
	const object = document.querySelector(objective);
	console.log(object);
	object.classList.toggle("active");
}
