function openTab(event, tabId) {
    // Ocultar todo el contenido de las pestañas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Quitar clase activa de todos los botones
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar el contenido de la pestaña actual y añadir clase activa al botón
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}