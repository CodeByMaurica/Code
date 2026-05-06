import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {

  // Store products from API
  const [products, setProducts] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://dummyjson.com/products")

      .then((res) => res.json())

      .then((data) => {

        // Save products
        setProducts(data.products);

        // Stop loading
        setLoading(false);
      });

  }, []);

  // Loading message
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">

      {/* Products grid */}
      <div className="products">

        {/* Loop through products */}
        {products.map((product) => (

          // Send ONE product into ProductCard
          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>
    </div>
  );
}

export default Home;