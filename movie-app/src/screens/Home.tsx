import { useEffect, useState } from "react";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

import {
  getPopularMovies,
  searchMovies,
  getAllByGenre,
} from "../api/tmdb";

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;

export default function Home() {
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

  async function handleGenreClick(genreId: number) {
    const results = await getAllByGenre(genreId);

    setMovies(results);
  }

  const heroMovie = movies[0];

  const movieRow = movies.slice(1, 25);

  const heroImage =
    heroMovie?.backdrop_path || heroMovie?.poster_path
      ? `${IMAGE_URL}original${
          heroMovie.backdrop_path || heroMovie.poster_path
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
            <span className="gold-badge">LTM ENT</span>

            <div className="hero-rating">
              <span>⭐ {heroMovie.vote_average.toFixed(1)}</span>
              <span>•</span>
              <span>{heroMovie.release_date?.slice(0, 4)}</span>
              <span>•</span>
              <span>Now Showing</span>
            </div>

            <h1>{heroMovie.title}</h1>

            <p>{heroMovie.overview}</p>

            <div className="hero-buttons">
              <button className="play-btn">▶ WATCH</button>

              <button className="add-btn">＋ ADD TO LIST</button>
            </div>
          </div>
        </section>
      )}

      <section className="below-hero">
        <div className="content-tabs">
          <button
            className="active-tab"
            onClick={async () => {
              const results = await getPopularMovies();

              setMovies(results);
            }}
          >
            Trending Now
          </button>

          <button
            onClick={async () => {
              const results = await searchMovies("popular");

              setMovies(results);
            }}
          >
            Popular
          </button>

          <button
            onClick={async () => {
              const results = await searchMovies("original");

              setMovies(results);
            }}
          >
            LTM Original
          </button>

          <button
            onClick={async () => {
              const results = await searchMovies("premiere");

              setMovies(results);
            }}
          >
            Premiers
          </button>

          <button
            onClick={async () => {
              const results = await searchMovies("recent");

              setMovies(results);
            }}
          >
            Recently Added
          </button>
        </div>

        <div className="genre-pills">
          <button onClick={() => handleGenreClick(28)}>
            Action
          </button>

          <button onClick={() => handleGenreClick(12)}>
            Adventure
          </button>

          <button onClick={() => handleGenreClick(16)}>
            Anime
          </button>

          <button onClick={() => handleGenreClick(36)}>
            Biography
          </button>

          <button onClick={() => handleGenreClick(80)}>
            Crime
          </button>

          <button onClick={() => handleGenreClick(35)}>
            Comedy
          </button>

          <button onClick={() => handleGenreClick(99)}>
            Documentary
          </button>

          <button onClick={() => handleGenreClick(18)}>
            Drama
          </button>
        </div>

        <h2 className="row-title">Trending Movies, TV Shows & Anime</h2>

        <div className="poster-row">
          {movieRow.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}