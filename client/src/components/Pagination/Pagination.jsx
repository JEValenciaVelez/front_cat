import './Pagination.css';



const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxButtons = 10;
  let startPage, endPage;

  if (totalPages <= maxButtons) {
    // Mostrar todos los números de página si hay menos de 10 páginas en total
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calcular los números de página para mostrar alrededor de la página actual
    const maxVisiblePages = maxButtons - 2; // Restar 2 para los botones "Prev" y "Next"
    const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
    const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrent) {
      // Estamos en las primeras páginas
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      // Estamos en las últimas páginas
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      // Estamos en el medio de las páginas
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }
  }

  const pageNumbers = [...Array(endPage - startPage + 1).keys()].map((i) => startPage + i);

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <button onClick={() => paginate(currentPage - 1)}>Prev</button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li className={currentPage === totalPages ? "disabled" : ""}>
          <button onClick={() => paginate(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
};


export default Pagination;