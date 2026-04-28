import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // run once when page loads
  useEffect(() => {
    // get data from another website
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // save to memory
        setLoading(false); // no longer loading
      })
      // catch if there's an error
      .catch((err) => {
        console.log("Error:", err.message);
        setError(err.message); // save error message to memory
        setLoading(false); // no longer loading
      });
  }, []);

  // Loading state UI
  if (loading === true) {
    return (
      <div>
        <h1>Product Store</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  // Error state UI
  if (error) {
    return (
      <div>   
        <h1>Product Store</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1 className="title">Product Store</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>

            <p className="category">{product.category}</p>

            <p className="price">${product.price}</p>

            <p className="rating">★ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;