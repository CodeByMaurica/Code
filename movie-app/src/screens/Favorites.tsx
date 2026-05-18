import { useEffect, useState } from "react";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

import { searchMovies } from "../api/tmdb";

function getFavorites(): Movie[] {
  const savedFavorites = localStorage.getItem("favorites");

  return savedFavorites
    ? JSON.parse(savedFavorites)
    : [];
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFavorites(getFavorites());

    function updateFavorites() {
      setFavorites(getFavorites());
    }

    window.addEventListener(
      "favoritesUpdated",
      updateFavorites
    );

    return () => {
      window.removeEventListener(
        "favoritesUpdated",
        updateFavorites
      );
    };
  }, []);

  async function handleSearch() {
    if (search.trim().length === 0) {
      setFavorites(getFavorites());
      return;
    }

    const results = await searchMovies(search);

    setFavorites(results);
  }

  return (
    <div className="netflix-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <section className="below-hero">
        <h2 className="row-title">
          My Favorites
        </h2>

        {favorites.length === 0 ? (
          <p className="empty-message">
            No favorite movies yet.
          </p>
        ) : (
          <div className="poster-row">
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