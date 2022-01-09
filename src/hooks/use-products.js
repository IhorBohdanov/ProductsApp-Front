import { useState, useCallback, useEffect } from "react";
import { getProducts } from "../api";

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
  };
};
