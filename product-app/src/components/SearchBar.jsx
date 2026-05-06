function SearchBar({ search, setSearch }) {

  // Handles typing in input
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-container">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleChange}
        className="search-input"
      />

    </div>
  );
}

export default SearchBar;