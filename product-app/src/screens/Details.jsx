import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="message">Loading...</p>;

  return (
    <div className="details-page">
      <div className="details-card">
        <div className="details-left">
          <img
            className="main-image"
            src={product.thumbnail}
            alt={product.title}
          />

          <div className="image-gallery">
            {product.images.map((image, index) => (
              <img
                key={index}
                className="gallery-image"
                src={image}
                alt={product.title}
              />
            ))}
          </div>
        </div>

        <div className="details-right">
          <p className="details-brand">{product.brand}</p>
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <p className="details-price">${product.price}</p>

          <div className="tag-list">
            {product.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>

          <button className="cart-button" onClick={() => addToCart(product)}>
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