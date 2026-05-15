import { NavLink } from "react-router-dom";

type HeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
};

export default function Header({
  search,
  setSearch,
  handleSearch,
}: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-logo">LTM Movie Studio</h1>

      <nav className="header-nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/now-playing">Now Playing</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>

      <div className="header-search">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
}