import React, { useEffect } from "react";
import { getProducts } from '../api';

export const Products = () => {
  useEffect(() => {
    ( () => {
      getProducts();
    })()
  }, [])

  return <div>Products</div>;
};
