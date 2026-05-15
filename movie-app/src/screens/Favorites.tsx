import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

export default function Favorites() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [search, setSearch] = useState("");

  function handleSearch() {
    const savedFavorites = localStorage.getItem("favorites");
    const allFavorites = savedFavorites ? JSON.parse(savedFavorites) : [];

    const filtered = allFavorites.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    setFavorites(filtered);
  }

  return (
    <div className="netflix-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <section className="all-page">
        <h1>LTM Favorites</h1>

        {favorites.length === 0 ? (
          <p className="empty-message">
            Your favorite movies and shows will show here.
          </p>
        ) : (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard
                key={`${movie.media_type}-${movie.id}`}
                movie={movie}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}