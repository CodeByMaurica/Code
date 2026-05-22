import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";

import { getHomeContent, searchMovies } from "../api/tmdb";

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // LOAD MOVIES
  useEffect(() => {
    loadContent();
  }, []);

  // TEST BACKEND CONNECTION
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.text())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  async function loadContent() {
    try {
      const results = await getHomeContent();
      setMovies(results);
    } catch (error) {
      console.error("Movie fetch failed:", error);
    }
  }

  async function handleSearch() {
    try {
      if (search.trim().length === 0) {
        loadContent();
        return;
      }

      const results = await searchMovies(search);
      setMovies(results);

    } catch (error) {
      console.error("Search failed:", error);
    }
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
              <span>⭐ {heroMovie.vote_average?.toFixed(1)}</span>
              <span>•</span>
              <span>{heroMovie.release_date?.slice(0, 4)}</span>
              <span>•</span>
              <span>
                {heroMovie.media_type === "tv"
                  ? "TV Show"
                  : "Movie"}
              </span>
            </div>

            <h1>{heroMovie.title}</h1>

            <p>{heroMovie.overview}</p>
          </div>
        </section>
      )}

      <section className="below-hero">
        <div className="genre-pills">
          <button onClick={() => navigate("/genre/action")}>
            LTM Action
          </button>

          <button onClick={() => navigate("/genre/adventure")}>
            LTM Adventure
          </button>

          <button onClick={() => navigate("/genre/anime")}>
            LTM Anime
          </button>

          <button onClick={() => navigate("/genre/biography")}>
            LTM Biography
          </button>

          <button onClick={() => navigate("/genre/crime")}>
            LTM Crime
          </button>

          <button onClick={() => navigate("/genre/comedy")}>
            LTM Comedy
          </button>

          <button onClick={() => navigate("/genre/documentary")}>
            LTM Documentary
          </button>

          <button onClick={() => navigate("/genre/drama")}>
            LTM Drama
          </button>
        </div>

        <h2 className="row-title">
          {search.trim().length > 0
            ? "Search Results"
            : "LTM Movies"}
        </h2>

        <div className="poster-row">
          {movieRow.map((movie) => (
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