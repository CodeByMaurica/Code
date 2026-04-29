function ProductCard({ product }) {
  return (
    <div className="card">
      {/* image */}
      <img src={product.thumbnail} alt={product.title} />

      {/* title */}
      <h3>{product.title}</h3>

      {/* category */}
      <p className="category">{product.category}</p>

      {/* price */}
      <p className="price">${product.price}</p>

      {/* rating */}
      <p className="rating">⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;