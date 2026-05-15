import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

import { searchMovies } from "../api/tmdb";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Upcoming() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadUpcomingMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
      );

      const data = await response.json();

      setMovies(data.results);
    }

    loadUpcomingMovies();
  }, []);

  async function handleSearch() {
    const results =
      search.trim() === "" ? movies : await searchMovies(search);

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
        <h1>LTM Upcoming</h1>

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