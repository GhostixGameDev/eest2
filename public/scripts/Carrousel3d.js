// Code kindly given to us by another team. Creditos a Emiliano Grecco.

const items = Array.from(document.querySelectorAll('.carousel-3d div'));
let currentIndex = 0;
let startX = 0;
let isDragging = false;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('center', 'left', 'right', 'off-left', 'off-right');
        
        if (index === currentIndex) {
            item.classList.add('center');
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            item.classList.add('left');
        } else if (index === (currentIndex + 1) % items.length) {
            item.classList.add('right');
        } else if (index === (currentIndex - 2 + items.length) % items.length) {
            item.classList.add('off-left');
        } else if (index === (currentIndex + 2) % items.length) {
            item.classList.add('off-right');
        }
    });
}

function rotateCarousel(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    updateCarousel();
}

// Eventos de arrastre para ratón
document.querySelector('.carousel-3d').addEventListener('mousedown', (event) => {
    startX = event.clientX;
    isDragging = true;
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    const diff = event.clientX - startX;

    if (diff > 50) { // arrastre a la derecha
        rotateCarousel(-1);
        startX = event.clientX;
        isDragging = false;
    } else if (diff < -50) { // arrastre a la izquierda
        rotateCarousel(1);
        startX = event.clientX;
        isDragging = false;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Eventos de deslizamiento para pantallas táctiles
document.querySelector('.carousel-3d').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
});

document.querySelector('.carousel-3d').addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    const diff = event.touches[0].clientX - startX;

    if (diff > 50) { // deslizamiento a la derecha
        rotateCarousel(-1);
        startX = event.touches[0].clientX;
        isDragging = false;
    } else if (diff < -50) { // deslizamiento a la izquierda
        rotateCarousel(1);
        startX = event.touches[0].clientX;
        isDragging = false;
    }
});

document.querySelector('.carousel-3d').addEventListener('touchend', () => {
    isDragging = false;
});

// Inicializar la vista
updateCarousel();
