import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../App.css";

function Category() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  // function to capitalize first letter
  const formatName = (text) => {
  return text
    .split("-") // split words by dash
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each word
    .join(" "); // join with space
};

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      });
  }, [name]);

  return (
    <div className="app">
      <h1 className="category-title">
        Category: {formatName(name)}
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