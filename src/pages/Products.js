import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api";
import { Page, List, ProductItem } from "../components";

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

  return (
    <Page pageTitle="Products" suffix={addProductButton} wide>
      <List dataArray={products} />
    </Page>
  );
};
