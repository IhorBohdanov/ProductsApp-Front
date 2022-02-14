import React from "react";
import { useParams } from "react-router-dom";
import { CategoryForm, Page } from "../components";

export const EditCategory = () => {
  const { id } = useParams();

  return (
    <Page pageTitle={`Edit category ${id}`}>
      <CategoryForm id={id}/>
    </Page>
  )
}