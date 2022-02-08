import { useState, useCallback, useEffect } from "react";
import { getProducts, deleteProduct } from "../api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  const fetchProducts = useCallback(
    async (options) => {
      const res = await getProducts(options);
      setProducts(res.data.reverse());
    },
    [setProducts]
  );

  const handleDelete = useCallback(async (id) => {
    await deleteProduct(id);
    await fetchProducts();
  }, [fetchProducts])

  useEffect(() => {
    (async () => {
      await fetchProducts({ filters, page });
    })();
  }, [fetchProducts, filters, page]);

  return {
    products,
    setFilters,
    page,
    setPage,
    handleDelete,
  };
};
