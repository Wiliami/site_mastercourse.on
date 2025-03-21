// Função para mudar para a página especificada
function changePage(pageNumber) {
  // Limpa a classe "active" de todas as páginas
  for (let i = 1; i <= 3; i++) {
    document.getElementById('page' + i).classList.remove('active');
  }

  // Adiciona a classe "active" à página atual
  document.getElementById('page' + pageNumber).classList.add('active');
}

// Event listener para o clique na página anterior
document.getElementById('previousPage').addEventListener('click', () => {
  // Aqui você pode implementar a lógica para ir para a página anterior
  // Por exemplo: changePage(currentPage - 1);
  console.log('Previous button clicked');
});

// Event listener para o clique na próxima página
document.getElementById('nextPage').addEventListener('click', () => {
  // Aqui você pode implementar a lógica para ir para a próxima página
  // Por exemplo: changePage(currentPage + 1);
  console.log('Next button clicked');
});

// Event listeners para as páginas
for (let i = 1; i <= 3; i++) {
  document.getElementById('page' + i).addEventListener('click', () => {
    // Aqui você pode implementar a lógica para ir para a página i
    // Por exemplo: changePage(i);
    console.log('Page ' + i + ' clicked');
  });
}