import { Link } from "react-router-dom";

export const CategoryItem = ({ category, onDelete }) => {
  return (
    <div className="category">
      <div className="category__inner">
        <div className="category__id">{category.id}</div>
        <div className="category__meta">
          <h2 className="category__name">
            {category.name}
          </h2>
        </div>  
        <div className="category__action">
          <Link to={"/categories/edit/" + category.id} className="button">Edit</Link>
          <button className="button button_style_danger" onClick={() => onDelete(category.id)} >Delete</button>
        </div>
      </div>
    </div>
  );
};
