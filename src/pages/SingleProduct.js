import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteProduct, getProduct } from "../api";
import { Page } from "../components/Page";

const ActionButtons = ({id}) => {
  const navigate = useNavigate();
  const handleDelete = useCallback(async () => {
    const res = await deleteProduct({id});
    if (res.data.success) {
      navigate('/products');
    }
  }, id);

  return (
    <div className="suffix">
      <Link to={'/products/edit/' + id} className="button">Edit</Link>
      <button onClick={handleDelete} className="button">Delete</button>
    </div>
  );
};

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
        <Page pageTitle={product.name} suffix={<ActionButtons id={id}/>}>
          <div className="single-product">
            <div className="single-product__inner">
              <p className="single-product__description">
                {product.description}
              </p>
              <div className="single-product__price">{product.price}</div>
            </div>
          </div>
        </Page>
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
};
