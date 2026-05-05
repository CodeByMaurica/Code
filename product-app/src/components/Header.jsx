import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <header className="header">
      <div className="header-main">
        <h2 className="logo">Maurica Shop</h2>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart (0)</Link>
        </nav>
      </div>

      <div className="category-bar">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="category-link"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;