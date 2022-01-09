import { useCallback, useEffect, useState } from "react";
import { getCategories, getProduct } from "../api";

export const useProduct = (id) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchProductData = useCallback(async () => {
    const res = await getProduct({ id });
    setName(res.data[0].name);
    setDescription(res.data[0].description);
    setPrice(res.data[0].description);
  }, [id]);

  const fetchCategories = useCallback(async () => {
    const res = await getCategories();
    const newCatArr = res.data.map((cat) => ({ ...cat, checked: false }));
    setCategories(newCatArr);
  }, [setCategories]);

  useEffect(() => {
    (async () => {
      await fetchCategories();
      if (id) {
        await fetchProductData();
      }
    })();
  }, [fetchProductData, fetchCategories]);

  const getHandler = useCallback(
    (fieldName) => {
      switch (fieldName) {
        case "name":
          return setName;
        case "description":
          return setDescription;
        case "price":
          return setPrice;
      }
    },
    [setName, setDescription, setPrice]
  );

  const handleInputChange = useCallback(
    (fieldName) => {
      const handler = getHandler(fieldName);

      return (e) => {
        handler(e.target.value);
      };
    },
    [getHandler]
  );

  const handleCategoryClick = useCallback(
    (id) => {
      const newCatArr = categories.map((cat) => {
        if (cat.id === id) {
          cat.checked = !cat.checked;
        }
        return cat;
      });

      setCategories(newCatArr);
    },
    [categories, setCategories]
  );

  const handleSubmit = useCallback(async () => {
    console.log("asdasds");
  }, []);

  return {
    name,
    description,
    price,
    categories,
    handleInputChange,
    handleCategoryClick,
    handleSubmit,
  };
};
