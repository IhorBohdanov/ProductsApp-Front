import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";
import { Page } from "../components/Page";

export const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProduct({ id });
      setProduct(res.data[0]);
    })();
  }, []);

  return (
    <>
      {product ? (
        <Page pageTitle={product.name}>
          <div className="single-product">
            <div className="single-product__inner">
              <p className="single-product__description">
                <b>Description:</b> 
                {product.description}
              </p>
              <div className="single-product__price">
                <b>Price:</b>
                {product.price}
              </div>
              <div className="single-product__category">
                <b>CategoryId:</b>
                {product.category.join(',')}
              </div>
            </div>
          </div>
        </Page>
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
};
