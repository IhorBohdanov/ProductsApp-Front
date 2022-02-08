import { useCallback } from "react";
import { useProduct } from "../hooks";

export const ProductForm = ({ productId }) => {
  const {
    name,
    description,
    price,
    categories,
    handleInputChange,
    handleCategoryClick,
    handleSubmit,
  } = useProduct(productId);

  const handleSubmitClick = useCallback(
    async (e) => {
      e.preventDefault();
      handleSubmit();
    },
    [handleSubmit]
  );

  return (
    <form className="form">
      <fieldset className="form__item">
        <legend className="form__title">Name</legend>
        <input
          className="input"
          placeholder="Name"
          value={name}
          onChange={handleInputChange("name")}
        />
      </fieldset>
      <fieldset className="form__item">
        <legend className="form__title">Description</legend>
        <textarea
          className="input"
          rows={2}
          placeholder="description"
          value={description}
          onChange={handleInputChange("description")}
        />
      </fieldset>
      <fieldset className="form__item">
        <legend className="form__title">Price</legend>
        <input
          className="input"
          placeholder="Price"
          value={price}
          onChange={handleInputChange("price")}
        />
      </fieldset>
      <fieldset className="form__item">
        <legend className="form__title">Categories</legend>
        
        {categories.map((cat) => (
          <label className="checkbox-item" key={cat.id}>
            <input
              type="checkbox"
              checked={cat.checked}
              onChange={() => handleCategoryClick(cat.id)}
            />
            {cat.name}
          </label>
        ))}
      </fieldset>
      <button className="button" type="submit" onClick={handleSubmitClick}>
        Submit
      </button>
    </form>
  );
};
