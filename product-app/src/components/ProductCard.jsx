import { Link } from "react-router-dom";

function ProductCard({ product }) {
  let stockStatus;

  if (product.stock === 0) {
    stockStatus = "Sold Out";
  } else if (product.stock > 0 && product.stock < 5) {
    stockStatus = "Low Stock";
  } else {
    stockStatus = "In Stock";
  }

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
      <p className="stock">{stockStatus}</p>
    </div>
  );
}

export default ProductCard;