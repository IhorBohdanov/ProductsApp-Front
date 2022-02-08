import { useCallback, useEffect, useState, useRef } from "react";
import { getCategories, getProduct, updateProduct } from "../api";

export const useProduct = (id) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const idRef = useRef(null);

  const fetchProductData = useCallback(async () => {
    const res = await getProduct({ id });
    setName(res.data[0].name);
    setDescription(res.data[0].description);
    setPrice(res.data[0].description);
    setProductCategories(res.data[0].category);
  }, [id, setProductCategories, setPrice, setDescription, setName]);

  const fetchCategories = useCallback(async () => {
    const res = await getCategories();
    setCategories(res.data.map((item) => ({
      ...item,
      checked: false,
    })));
  }, [setCategories]);

  useEffect(() => {
    (async () => {
      if (id) {
        await fetchCategories();
        await fetchProductData();
      }
    })();
  }, [fetchProductData, fetchCategories, id]);

  // useEffect(() => {
  //   if (!idRef.current || !productCategories.length || !categories.length) {
  //     idRef.current = id;
  //     setCategories(categories.map((item) => ({
  //       ...item,
  //       checked: productCategories.includes(item.id), 
  //     })));
  //   }
  // }, [productCategories, setCategories, id, categories])

  const getHandler = useCallback(
    (fieldName) => {
      switch (fieldName) {
        case "name":
          return setName;
        case "description":
          return setDescription;
        case "price":
          return setPrice;
        default:
          return;
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
      // console.log(id)
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
    await updateProduct({
      id,
      name,
      description,
      price, 
      category: categories.filter(item => item.checked ? item.id : false).map(item => item.id),
    })
  }, [id, name, description, price, categories]);

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
