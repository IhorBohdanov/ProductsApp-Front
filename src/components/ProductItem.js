import { Link } from "react-router-dom";

export const ProductItem = ({ product, onDelete }) => {
  return (
    <div className="product">
      <div className="product__inner">
        <div className="product__id">{product.id}</div>
        <div className="product__meta">
          <h2 className="product__name">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h2>
          <p className="product__price">{product.price}</p>
        </div>
        <div className="product__action">
          <Link to={"/products/edit/" + product.id} className="button">
            Edit
          </Link>
          <button className="button button_style_danger" onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
