import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  // store products
  const [products, setProducts] = useState([]);

  // loading state
  const [loading, setLoading] = useState(true);

  // error state
  const [error, setError] = useState("");

  // search text
  const [query, setQuery] = useState("");

  // 🔍 ASYNC SEARCH HANDLER (this is what you needed to add)
  const handleSearch = async () => {
    setLoading(true); // start loading

    try {
      // default URL (get all products)
      let url = "https://dummyjson.com/products";

      // if user typed something, use search
      if (query) {
        url = `https://dummyjson.com/products/search?q=${query}`;
      }
//AWAIT: dont move on until the line is done
      // wait for API response
      const res = await fetch(url);
      // wait for JSON data
      const data = await res.json();

      // save products to state
      setProducts(data.products || []);
    } catch (err) { //CATCH: if anything flase do this code
      console.log("Error:", err.message);
      setError(err.message);  //save error
    } finally {   //FiNALLY: a;ways runs in the end
      setLoading(false); // ALWAYS stop loading
    }
  };

  // run one time when app loads
  useEffect(() => {
    handleSearch();
  }, []);

  // loading screen
  if (loading) {
    return (
      <div className="app">
        <h1 className="title">Product store</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  // error screen
  if (error) {
    return (
      <div className="app">
        <h1 className="title">Product store</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1 className="title">Product store</h1>

      {/* SEARCH BAR */}
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

      {/* PRODUCTS */}
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;