import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api";
import { Page, List, ProductItem, Pagination } from "../components";

const addProductButton = <Link to="/products/create" className="button button_style_add">+ Add Product</Link>;



export const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const res = await getProducts();
    setProducts(res.data.reverse().map((item) => <ProductItem product={item} />));
  }, [setProducts]);

  useEffect(() => {
    (async () => {
      await fetchProducts();  
    })();
  }, [fetchProducts]);

  const [page, setPage] = useState(1);


  const handlePageChange = (pageNum) => {
    console.log(pageNum)
    setPage(pageNum)
  }

  return (
    <Page pageTitle="Products" suffix={addProductButton} wide>
      <Pagination 
        currentPage={page}
        totalElements={22}
        elementsPerPage={10}
        onPageChange={handlePageChange}
      />

      <List dataArray={products} />
    </Page>
  );
};
