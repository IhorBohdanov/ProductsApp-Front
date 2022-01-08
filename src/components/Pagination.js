import { useCallback, useMemo } from "react";
import { usePagination } from "../hooks";

const PaginationItem = ({ children, active, onClick }) => {
  return (
    <li className="pagination__item">
      <button
        onClick={onClick}
        className={`button button_style_page ${active && "active"}`}
      >
        {children}
      </button>
    </li>
  );
};

export const Pagination = ({
  currentPage,
  totalElements,
  elementsPerPage,
  onPageChange,
}) => {
  const { handlePrevPageClick, handleNextPageClick, totalPages, setPage } =
    usePagination({
      currentPage,
      totalElements,
      elementsPerPage,
      onPageChange,
    });

  const pages = useMemo(() => {
    const buttons = [];
    for (let i = 1; i < totalPages + 1; i++) {
      buttons.push(
        <PaginationItem
          onClick={() => setPage(i)}
          active={currentPage === i}
          key={i}
        >
          {i}
        </PaginationItem>
      );
    }
    return buttons;
  }, [totalPages, currentPage, setPage]);

  return (
    <div className="pagination">
      <ul className="pagination__inner">
        <PaginationItem onClick={handlePrevPageClick}>{"<"}</PaginationItem>

        {pages}

        <PaginationItem onClick={handleNextPageClick}>{">"}</PaginationItem>
      </ul>
    </div>
  );
};
