import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      {/* Clicking the image/title opens product details */}
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>

      <p className="brand">{product.brand}</p>
      <p className="category">{product.category}</p>
      <p className="price">${product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;