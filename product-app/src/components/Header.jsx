import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  // Stores product categories from DummyJSON
  const [categories, setCategories] = useState([]);

  // Stores what the user types in the search bar
  const [query, setQuery] = useState("");

  // Gets cart from your CartContext so we can show cart count
  const { cart } = useContext(CartContext);

  // Lets us move the user to another page with code
  const navigate = useNavigate();

  // Runs one time when Header loads
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Category fetch error:", error));
  }, []);

  // Runs when user clicks Search or presses Enter
  const handleSearch = () => {
    const cleanQuery = query.trim();

    if (cleanQuery !== "") {
      // Sends search text to Home page URL
      navigate(`/?search=${encodeURIComponent(cleanQuery)}`);
    } else {
      // If search is empty, go back to normal home page
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