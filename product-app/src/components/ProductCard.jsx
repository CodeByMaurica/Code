import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>
        <Link to={`/product/${product.id}`} className="product-title-link">
          {product.title}
        </Link>
      </h3>

      <p className="brand">{product.brand}</p>
      <p className="category">{product.category}</p>
      <p className="price">${product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;