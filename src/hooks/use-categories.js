import React, { useCallback, useEffect, useState } from 'react';
import { getCategories, deleteCategory } from "../api";

export const useCategories = ({CategoryItem}) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    const res = await getCategories();
    setCategories(res.data?.reverse().map(item => <CategoryItem category={item} onDelete={handleDelete}/>));
  }, [setCategories]);

  const handleDelete = async (id) => {
    await deleteCategory(id);
    await fetchCategories();
  }

  useEffect(() => {
    (async () => {
      await fetchCategories();
    })();
  }, [fetchCategories])

  return {
    categories,
  };
};