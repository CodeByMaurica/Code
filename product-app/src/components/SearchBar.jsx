import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      navigate("/");
    } else {
      navigate(`/?search=${search}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;