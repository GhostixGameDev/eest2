//Funcion que extiende el menu de la sidebar y demas.
function extendDiv(objective){
	const object = document.querySelector(objective);
	object.classList.toggle("active");
}
// Funcion que extiende la sección de tecnicaturas en index.
function openTecnicatura(event, objective, url){
	const container = document.getElementById(objective);
	if(!container || !event) return;
	if(!container.classList.contains("active")){
		extendDiv(container);
		extendDiv(event.currentTarget.classList);
		return;
	}
	
}