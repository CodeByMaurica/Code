import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
};

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const FALLBACK_IMAGE = "https://placehold.co/500x750?text=No+Image";

function getFavorites(): Movie[] {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
}

export default function MovieCard({ movie }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const posterImage = movie.poster_path
    ? `${IMAGE_URL}w500${movie.poster_path}`
    : FALLBACK_IMAGE;

  const mediaType = movie.media_type || "movie";

  useEffect(() => {
    const favorites = getFavorites();

    const alreadyFavorite = favorites.some(
      (item: Movie) => item.id === movie.id
    );

    setIsFavorite(alreadyFavorite);
  }, [movie.id]);

  function toggleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const favorites = getFavorites();

    const alreadyAdded = favorites.some(
      (item: Movie) => item.id === movie.id
    );

    let updatedFavorites;

    if (alreadyAdded) {
      updatedFavorites = favorites.filter(
        (item: Movie) => item.id !== movie.id
      );

      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, movie];

      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    window.dispatchEvent(new Event("favoritesUpdated"));
  }

  return (
    <Link to={`/details/${mediaType}/${movie.id}`} className="movie-link">
      <div className="movie-card">
        <div className="movie-image-container">
          <img className="movie-poster" src={posterImage} alt={movie.title} />

          <button
            className={
              isFavorite
                ? "movie-heart active-movie-heart"
                : "movie-heart"
            }
            onClick={toggleFavorite}
          >
            ♥
          </button>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>

          <p>⭐ {movie.vote_average?.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}