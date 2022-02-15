import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../hooks";

export const CategoryForm = ({ id }) => {
  const navigate = useNavigate();
  const { name, setName, handleSubmit } = useCategory({ id, navigate});

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
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>
      <button className="button" type="submit" onClick={handleSubmitClick}>
        Submit
      </button>
    </form>
  );
};
