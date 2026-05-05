import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("search");

        let url = "https://dummyjson.com/products";

        if (searchQuery) {
          url = `https://dummyjson.com/products/search?q=${searchQuery}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]);

  if (loading) return <p className="message">Loading products...</p>;
  if (error) return <p className="message">Error: {error}</p>;

  return (
    <div className="page">
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;