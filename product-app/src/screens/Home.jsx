import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      let url = "https://dummyjson.com/products";

      if (query) {
        url = `https://dummyjson.com/products/search?q=${query}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.products || []);
    } catch (err) {
      console.log("Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <h1 className="title">Product Store</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <h1 className="title">Product Store</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1 className="title">Product Store</h1>

      <div className="search-container">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="search-input"
        />

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="products">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    </div>
  );
}

export default Home;