import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Page, List, ProductItem, Pagination, Filters } from "../components";
import { useProducts } from "../hooks";

const addProductButton = (
  <Link to="/products/create" className="button button_style_add">
    + Add Product
  </Link>
);

export const Products = () => {
  const { products, setFilters, page, setPage, handleDelete } = useProducts();

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  const handleFilterSubmit = (filters) => {
    setFilters(filters);
  };

  const productsList = useMemo(() => {
    return products.map((product) => <ProductItem product={product} onDelete={handleDelete} />);
  }, [products]);

  return (
    <Page pageTitle="Products" suffix={addProductButton} wide>
      <Filters onSubmit={handleFilterSubmit} />

      <List dataArray={productsList} />

      <Pagination
        currentPage={page}
        totalElements={22}
        elementsPerPage={10}
        onPageChange={handlePageChange}
      />
    </Page>
  );
};
