function openTab(stylingTarget, tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tab = document.getElementById(stylingTarget);
    const tabButtons = document.querySelectorAll('.tab-button');
    // Ocultar todo el contenido de las pestañas
    if(!tabContents || !tab || !tabButtons) return;
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    // Quitar clase activa de todos los botones
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    // Mostrar el contenido de la pestaña actual y añadir clase activa al botón
    document.getElementById(tabId).style.display = 'block';
    tab.classList.add('active');
}

/* para las materias*/ 

function toggleContent(id) {
    const item = document.getElementById(id).parentNode;
    item.classList.toggle("open");
}


