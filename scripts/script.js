let currentPage = -1;
const pages = document.querySelectorAll('.page');

function updateBook() {
  pages.forEach((page, index) => {
    if (index <= currentPage) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }
    page.style.zIndex = pages.length - index;
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }
}

function prevPage() {
  if (currentPage >= 0) {
    currentPage--;
    updateBook();
  }
}

updateBook(); // Inicializa el libro
