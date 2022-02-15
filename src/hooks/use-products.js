import { useState, useCallback, useEffect } from "react";
import { getProducts, deleteProduct } from "../api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchProducts = useCallback(
    async (options) => {
      const res = await getProducts(options);
      setProducts(res.data);
      setTotalProducts(res.total);
    },
    [setProducts, setTotalProducts]
  );

  const handleDelete = useCallback(
    async (id) => {
      await deleteProduct(id);
      await fetchProducts();
    },
    [fetchProducts]
  );

  useEffect(() => {
    (async () => {
      await fetchProducts({ filters, page });
    })();
  }, [fetchProducts, filters, page]);

  return {
    products,
    setFilters,
    page,
    totalProducts,
    setPage,
    handleDelete,
  };
};
