import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Product fetch error:", error));
  }, [id]);

  const formatCategoryName = (category) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleAddToCart = () => {
    addToCart(product);

    toast.success("Added to cart!");
  };

  if (!product) {
    return <p className="message">Loading...</p>;
  }

  return (
    <div className="details-page">
      <div className="details-card">
        <div className="details-left">
          <img
            className="main-image"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="details-right">
          <p className="details-brand">{product.brand}</p>

          <h1>{product.title}</h1>

          <p className="description">{product.description}</p>

          <p>
            <strong>Category:</strong> {formatCategoryName(product.category)}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <p className="details-price">${product.price}</p>

          <button className="cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="back-button" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;