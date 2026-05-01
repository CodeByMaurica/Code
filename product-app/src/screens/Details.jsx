import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <p className="loading">Loading...</p>;
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
          <h1>{product.title}</h1>

          <p className="description">{product.description}</p>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <div className="tags">
            <strong>Tags:</strong>

            <div className="tag-list">
              {product.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button className="back-button" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;