import React, { useState, useCallback, useEffect } from "react";
import { createCategory, getCategory, updateCategory } from "../api";

export const useCategory = ({id, navigate}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      if(id) {
        const res = await getCategory(id);
        setName(res.data[0]?.name);
      }
    })();
  }, [id, setName]);

  const handleSubmit = useCallback(async () => {
    if (id) {
      await updateCategory({
        id,
        name
      });
      navigate("/categories");
    } else {
      await createCategory({
        name,
      });
      navigate("/categories");
    }

  }, [id, name, navigate]);

  return {
    name,
    setName,
    handleSubmit,
  };
};
