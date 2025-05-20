// Configuración del libro
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

// Asegurar que la primera página sea visible al cargar
function initBook() {
  pages.forEach((page, index) => {
    page.style.transform = index === 0 ? 'rotateY(0deg)' : 'rotateY(180deg)';
    page.style.zIndex = totalPages - index;
    page.style.backfaceVisibility = 'hidden';
  });
}

// Animación de página
function flipPage(direction) {
  // Deshabilitar botones durante la animación
  document.querySelectorAll('button').forEach(btn => btn.disabled = true);
  
  if (direction === 'next' && currentPage < totalPages - 1) {
    pages[currentPage].style.transform = 'rotateY(-180deg)';
    pages[currentPage + 1].style.transform = 'rotateY(0deg)';
    currentPage++;
  } else if (direction === 'prev' && currentPage > 0) {
    pages[currentPage].style.transform = 'rotateY(180deg)';
    currentPage--;
    pages[currentPage].style.transform = 'rotateY(0deg)';
  }
  
  // Actualizar z-index después de la animación
  setTimeout(() => {
    pages.forEach((page, index) => {
      page.style.zIndex = totalPages - Math.abs(index - currentPage);
    });
    document.querySelectorAll('button').forEach(btn => btn.disabled = false);
  }, 1000);
}

// Event listeners mejorados
document.querySelector('.prev-button').addEventListener('click', () => flipPage('prev'));
document.querySelector('.next-button').addEventListener('click', () => flipPage('next'));

// Inicialización
initBook();