import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

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

      <button className="add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;