const tabContents = document.querySelectorAll('.tab-content');
function openTab(stylingTarget, tabId) {
    // Ocultar todo el contenido de las pestañas
    if(!tabContents) return;
    const tab = document.getElementById(stylingTarget);
    if(!tab) return;
    closeTabs();
    console.log(tab);
    console.log(tabContents);
    // Mostrar el contenido de la pestaña actual y añadir clase activa al botón
    document.getElementById(tabId).style.display = 'block';
    tab.classList.add('active');
}

function closeTabs(){
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    // Quitar clase activa de todos los botones
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
}
