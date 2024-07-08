const thumbnails = document.querySelectorAll('.thumbnails img');
const preview = document.querySelector('.preview img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Función para mostrar una imagen específica
function showImage(index) {
  if (index < 0) {
    currentIndex = thumbnails.length - 1;
  } else if (index >= thumbnails.length) {
    currentIndex = 0;
  }
  preview.src = thumbnails[currentIndex].src;
  preview.alt = thumbnails[currentIndex].alt;
}

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);

// Event listeners para los botones de flecha
prevButton.addEventListener('click', () => {
  showImage(--currentIndex);
});

nextButton.addEventListener('click', () => {
  showImage(++currentIndex);
});

// Event listeners para las miniaturas
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});