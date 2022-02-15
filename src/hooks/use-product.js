import { useCallback, useEffect, useState, useRef } from "react";
import { getCategories, getProduct, updateProduct, createProduct } from "../api";

export const useProduct = ({ id, navigate} ) => {
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
    setPrice(res.data[0].price);
    console.log('category',   res.data[0].category)
    setProductCategories(res.data[0].category);
  }, [id, setProductCategories, setPrice, setDescription, setName]);

  const fetchCategories = useCallback(async () => {
    const res = await getCategories();
    setCategories(
      res.data.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  }, [setCategories]);

  useEffect(() => {
    (async () => {
      await fetchCategories();

      if (id) {
        await fetchProductData();
      }
    })();
  }, [fetchProductData, fetchCategories, id]);

  useEffect(() => {
    console.log(idRef.current);
    if (idRef.current == id || !categories.length || !productCategories.length) return;

    idRef.current = id;
    console.log({
      categories, 
      productCategories,
      id: idRef.current,  
    })
    setCategories(categories.map((item) => ({
      ...item,
      checked: productCategories.includes(item.id),
    })));    
  }, [productCategories, setCategories, id, categories])

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
    const category = categories
      .filter((item) => (item.checked ? item.id : false))
      .map((item) => item.id);
    try {
      let res;
      if (id) {
        await updateProduct({
          id,
          name,
          description,
          price,
          category,
        });
        navigate("/products");
      } else {
        await createProduct({
          name,
          description,
          price,
          category,
        });
        navigate("/products");
      }
    } catch(e) {
      console.error(e)
    }
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
