import { useCallback, useEffect, useState } from "react";
import { getCategories } from "../api";

export const useFilters = ({
  onSubmit
}) => {
  const [search, setSearch] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const res = await getCategories();
    setCategories(res.data.map(category => ({ ...category, checked: false })))
  },[setCategories])

  const getHandler = useCallback((fieldName) => {
    switch(fieldName) {
      case 'search':
        return setSearch;
      case 'priceFrom': 
        return setPriceFrom;
      case 'priceTo':
        return setPriceTo;
    }

  }, [setSearch, setPriceFrom, setPriceTo])

  const handleCheckboxClick = useCallback((id) => {
    const newCatArr = categories.map(cat => {
      if(cat.id === id) {
        cat.checked = !cat.checked;
      }
      return cat;
    })

    setCategories(newCatArr); 
  }, [categories, setCategories])

  const handleInputChange = useCallback((fieldName) => {
    const handler = getHandler(fieldName);

    return (e) => {
      handler(e.target.value)
    }
  }, [getHandler])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const filters = {
      search,
      minPrice: priceFrom,
      maxPrice: priceTo,
      category: categories.filter(cat => cat.checked).map(cat => cat.id)
    }

    onSubmit(filters);
  }, [search, priceFrom, priceTo, categories])

  return {
    search,
    priceFrom,
    priceTo,
    categories,
    handleSubmit,
    handleCheckboxClick,
    handleInputChange,
  }
};


