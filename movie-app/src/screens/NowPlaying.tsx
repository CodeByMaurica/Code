import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

import { getNowPlayingMovies, searchMovies } from "../api/tmdb";

export default function NowPlaying() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadMovies() {
      const results = await getNowPlayingMovies();

      setMovies(results);
    }

    loadMovies();
  }, []);

  async function handleSearch() {
    const results =
      search.trim() === ""
        ? await getNowPlayingMovies()
        : await searchMovies(search);

    setMovies(results);
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
        <h1>LTM Now Playing</h1>

        <div className="movie-grid">
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