import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/?search=${query}`);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="header">
      <div className="header-main">
        <h2 className="logo">Maurica Shop</h2>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
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