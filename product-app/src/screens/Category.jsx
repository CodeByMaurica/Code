import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Category() {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // This makes words look nice
  // Example: "mens-shirts" becomes "Mens Shirts"
  const formatCategoryName = (category) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Category fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [slug]);

  if (loading) {
    return <p className="message">Loading...</p>;
  }

  return (
    <div className="page">
      <h1 className="category-title">
        Category: {formatCategoryName(slug)}
      </h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;