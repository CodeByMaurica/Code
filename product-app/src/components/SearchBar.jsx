function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      {/* 🔍 Icon */}
      <span className="search-icon">🔍</span>

      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

    </div>
  );
}

export default SearchBar;