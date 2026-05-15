import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";

import type { Movie } from "../types/movie";

import { getDetails } from "../api/tmdb";

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export default function MovieDetails() {
  const { id, mediaType } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [search, setSearch] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function loadDetails() {
      const results = await getDetails(
        mediaType || "movie",
        id
      );

      setMovie(results);

      const savedFavorites =
        localStorage.getItem("favorites");

      const favorites = savedFavorites
        ? JSON.parse(savedFavorites)
        : [];

      const alreadyFavorite = favorites.some(
        (item: Movie) => item.id === results.id
      );

      setIsFavorite(alreadyFavorite);
    }

    loadDetails();
  }, [id, mediaType]);

  function handleSearch() {
    console.log(search);
  }

  function toggleFavorite() {
    if (!movie) return;

    const savedFavorites =
      localStorage.getItem("favorites");

    const favorites = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (item: Movie) => item.id !== movie.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(false);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, movie])
      );

      setIsFavorite(true);
    }
  }

  if (!movie) {
    return (
      <div className="details-page">
        <h1>Loading...</h1>
      </div>
    );
  }

  const heroImage =
    movie.backdrop_path || movie.poster_path
      ? `${IMAGE_URL}original${
          movie.backdrop_path ||
          movie.poster_path
        }`
      : "";

  const posterImage = movie.poster_path
    ? `${IMAGE_URL}w500${movie.poster_path}`
    : "/vite.svg";

  return (
    <div className="details-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

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
            src={posterImage}
            alt={movie.title}
          />

          <div className="details-info">
            <span className="gold-badge">
              {movie.media_type === "tv"
                ? "LTM TV"
                : "LTM MOVIES"}
            </span>

            <div className="title-row">
              <h1>{movie.title}</h1>

              <button
                className={
                  isFavorite
                    ? "title-heart active-heart"
                    : "title-heart"
                }
                onClick={toggleFavorite}
              >
                ♥
              </button>
            </div>

            <div className="details-meta">
              <span>
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>

              <span>•</span>

              <span>
                {movie.release_date}
              </span>
            </div>

            <p>{movie.overview}</p>

            <div className="details-buttons">
              <button className="play-btn">
                ▶ WATCH NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}