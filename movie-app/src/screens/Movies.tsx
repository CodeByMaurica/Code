import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

import {
  getPopularMovies,
  searchMovies,
} from "../api/tmdb";

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadMovies() {
      const results = await getPopularMovies();
      setMovies(results);
    }

    loadMovies();
  }, []);

  async function handleSearch() {
    const results =
      search.trim() === ""
        ? await getPopularMovies()
        : await searchMovies(search);

    setMovies(results);
  }

  const heroMovie = movies[0];

  const heroImage =
    heroMovie?.backdrop_path || heroMovie?.poster_path
      ? `${IMAGE_URL}original${
          heroMovie.backdrop_path ||
          heroMovie.poster_path
        }`
      : "";

  return (
    <div className="netflix-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {heroMovie && (
        <section
          className="netflix-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(0,0,0,0.95) 0%,
                rgba(0,0,0,0.75) 35%,
                rgba(0,0,0,0.25) 70%,
                rgba(0,0,0,0.9) 100%
              ),
              url(${heroImage})
            `,
          }}
        >
          <div className="hero-copy">
            <span className="gold-badge">
              LTM MOVIES
            </span>

            <div className="hero-rating">
              <span>
                ⭐ {heroMovie.vote_average.toFixed(1)}
              </span>

              <span>•</span>

              <span>
                {heroMovie.release_date?.slice(
                  0,
                  4
                )}
              </span>

              <span>•</span>

              <span>Movies</span>
            </div>

            <h1>{heroMovie.title}</h1>

            <p>{heroMovie.overview}</p>

            <div className="hero-buttons">
              <button className="play-btn">
                ▶ WATCH
              </button>

              <button className="add-btn">
                ＋ ADD TO LIST
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="below-hero">
        <h2 className="row-title">
          Popular Movies
        </h2>

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </div>
  );
}