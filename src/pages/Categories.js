import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";
import { Page, List, CategoryItem } from "../components";

const ActionButton = <Link to="" className="button button_style_add">+ Add category</Link>

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const res = await getCategories();
    setCategories(res.data?.reverse().map(item => <CategoryItem category={item}/>));
  }, [])

  return <Page pageTitle="Categories" wide suffix={ActionButton}>
    <List dataArray={categories} />
  </Page>;
};
