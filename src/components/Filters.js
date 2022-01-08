import { useFilters } from "../hooks";

export const Filters = ({onSubmit}) => {
  const {
    search,
    priceFrom,
    priceTo,
    categories,
    handleSubmit,
    handleCheckboxClick,
    handleInputChange,
  } = useFilters({
    onSubmit
  });

  return (
    <div className="filters">
      <form className="filters__inner form">
        <fieldset className="form__item">
          <legend className="form__title">Search</legend>
          <input
            className="input"
            placeholder="search"
            value={search}
            onChange={handleInputChange("search")}
          />
        </fieldset>

        <fieldset className="form__item">
          <legend className="form__title">Price</legend>
          <label>From</label>
          <input
            className="input"
            placeholder="10"
            value={priceFrom}
            onChange={handleInputChange("priceFrom")}
          />
          <label>To</label>
          <input
            className="input"
            placeholder="100"
            value={priceTo}
            onChange={handleInputChange("priceTo")}
          />
        </fieldset>
        <fieldset className="form__item">
          <legend className="form__title">Category</legend>
          {categories.map((cat) => (
            <label className="checkbox-item" key={cat.id}>
              <input
                className="input"
                type="checkbox"
                checked={cat.checked}
                onChange={() => handleCheckboxClick(cat.id)}
              />
              {cat.name}
            </label>
          ))}
        </fieldset>

        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
