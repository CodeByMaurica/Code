import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_API_KEY;

const IMAGE_URL =
  import.meta.env.VITE_MOVIE_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] =
    useState<Movie | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );

      const data = await response.json();

      setMovie(data);
    }

    loadMovie();
  }, [id]);

  function handleSearch() {
    console.log(search);
  }

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  const heroImage =
    movie.backdrop_path || movie.poster_path
      ? `${IMAGE_URL}original${
          movie.backdrop_path ||
          movie.poster_path
        }`
      : "";

  return (
    <div className="details-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <section
        className="details-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.96) 0%,
              rgba(0,0,0,0.75) 40%,
              rgba(0,0,0,0.25) 70%,
              rgba(0,0,0,0.95) 100%
            ),
            url(${heroImage})
          `,
        }}
      >
        <div className="details-content">
          <img
            className="details-poster"
            src={`${IMAGE_URL}w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div className="details-info">
            <span className="gold-badge">
              LTM MOVIES
            </span>

            <h1>{movie.title}</h1>

            <div className="details-meta">
              <span>
                ⭐ {movie.vote_average.toFixed(1)}
              </span>

              <span>•</span>

              <span>{movie.release_date}</span>
            </div>

            <p>{movie.overview}</p>

            <div className="details-buttons">
              <button className="play-btn">
                ▶ WATCH NOW
              </button>

              <button className="add-btn">
                ＋ ADD TO WATCHLIST
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}