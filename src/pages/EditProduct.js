import React from "react";
import { useParams } from "react-router-dom";
import { Page, ProductForm } from "../components";

export const EditProduct = () => {
  const { id } = useParams();
  return <Page pageTitle={`Edit product ${id}`}>
    <ProductForm id={id} />
  </Page>;
};
