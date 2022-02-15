import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";
import { Page, List, CategoryItem } from "../components";
import { useCategories } from "../hooks";

const ActionButton = <Link to="/categories/create" className="button button_style_add">+ Add category</Link>

export const Categories = () => {
  const {
    categories,
  } = useCategories({CategoryItem});  

  return <Page pageTitle="Categories" wide suffix={ActionButton}>
    <List dataArray={categories} />
  </Page>;
};
