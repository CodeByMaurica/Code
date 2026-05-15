import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

import type { Movie } from "../types/movie";

import { getAllByGenre, searchMovies } from "../api/tmdb";

const genreMap: Record<string, number> = {
  action: 28,
  adventure: 12,
  anime: 16,
  biography: 36,
  crime: 80,
  comedy: 35,
  documentary: 99,
  drama: 18,
};

export default function GenrePage() {
  const { genreName } = useParams();

  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  const currentGenre = genreName || "action";

  const genreId = genreMap[currentGenre];

  const pageTitle =
    currentGenre.charAt(0).toUpperCase() + currentGenre.slice(1);

  useEffect(() => {
    async function loadGenre() {
      const results = await getAllByGenre(genreId);

      setMovies(results);
    }

    loadGenre();
  }, [genreId]);

  async function handleSearch() {
    const results =
      search.trim() === ""
        ? await getAllByGenre(genreId)
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
        <h1>LTM {pageTitle}</h1>

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