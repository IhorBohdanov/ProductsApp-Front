import { useCallback, useMemo } from "react";

export const usePagination = ({
  currentPage,
  totalElements,
  elementsPerPage,
  onPageChange,
}) => {
  const setPage = useCallback(
    (pageNumber) => {
      onPageChange(pageNumber);
    },
    [onPageChange]
  );

  const totalPages = useMemo(() => {
    return Math.ceil(totalElements / elementsPerPage);
  }, [totalElements, elementsPerPage]);

  const handlePrevPageClick = useCallback(() => {
    if (currentPage && currentPage > 1) {
      setPage(currentPage - 1);
    }
  }, [currentPage, setPage]);

  const handleNextPageClick = useCallback(() => {
    if (currentPage && currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  }, [currentPage, totalPages, setPage]);

  return {
    handlePrevPageClick,
    handleNextPageClick,
    totalPages,
    setPage,
  };
};
