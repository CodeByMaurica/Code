import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search") || "";

  useEffect(() => {
    let url = "https://dummyjson.com/products";

    if (search.trim() !== "") {
      url = `https://dummyjson.com/products/search?q=${search}`;
    }

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setProducts([]);
        setLoading(false);
      });
  }, [search]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="page">
      {search && (
        <h2 className="search-results-title">
          Search results for: {search}
        </h2>
      )}

      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2>No products found.</h2>
        )}
      </div>
    </div>
  );
}

export default Home;