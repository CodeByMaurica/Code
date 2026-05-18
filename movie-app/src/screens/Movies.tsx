import { useEffect, useState } from "react";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";

import { getPopularMovies, searchMovies } from "../api/tmdb";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const results = await getPopularMovies();
    setMovies(results);
  }

  async function handleSearch() {
    if (search.trim().length === 0) {
      loadMovies();
      return;
    }

    const results = await searchMovies(search);
    setMovies(results);
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
          {search.trim().length > 0 ? "Search Results" : "Popular Movies"}
        </h2>

        <div className="poster-row">
          {movies.map((movie) => (
            <MovieCard
              key={`${movie.media_type}-${movie.id}`}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </div>
  );
}