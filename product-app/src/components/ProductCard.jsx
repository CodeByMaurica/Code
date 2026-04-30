function ProductCard({ product }) {
  // Determine stock status
  let stockStatus = "";

  if (product.stock === 0) {
    stockStatus = "Sold Out";
  } else if (product.stock > 0 && product.stock < 5) {
    stockStatus = "Low Stock";
  } else {
    stockStatus = "In Stock";
  }

  return (
    <div className="card">
      {/* image */}
      <img src={product.thumbnail} alt={product.title} />

      {/* title */}
      <h3>{product.title}</h3>

      {/* brand */}
      <p className="brand">Brand: {product.brand}</p>

      {/* category */}
      <p className="category">{product.category}</p>

      {/* price */}
      <p className="price">${product.price}</p>

      {/* rating */}
      <p className="rating">⭐ {product.rating}</p>

      {/* stock status */}
      <p className="stock">{stockStatus}</p>
    </div>
  );
}

export default ProductCard;