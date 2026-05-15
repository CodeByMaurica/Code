import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
};

const IMAGE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const FALLBACK_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image";

export default function MovieCard({ movie }: Props) {
  const posterImage = movie.poster_path
    ? `${IMAGE_URL}w500${movie.poster_path}`
    : FALLBACK_IMAGE;

  const mediaType = movie.media_type || "movie";

  const savedFavorites =
    localStorage.getItem("favorites");

  const favorites = savedFavorites
    ? JSON.parse(savedFavorites)
    : [];

  const isFavorite = favorites.some(
    (item: Movie) => item.id === movie.id
  );

  function toggleFavorite(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();

    const savedFavorites =
      localStorage.getItem("favorites");

    const favorites = savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

    const alreadyAdded = favorites.some(
      (item: Movie) => item.id === movie.id
    );

    if (alreadyAdded) {
      const updatedFavorites = favorites.filter(
        (item: Movie) => item.id !== movie.id
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, movie])
      );
    }

    window.location.reload();
  }

  return (
    <Link
      to={`/details/${mediaType}/${movie.id}`}
      className="movie-link"
    >
      <div className="movie-card">
        {/* IMAGE */}
        <div className="movie-image-container">
          <img
            className="movie-poster"
            src={posterImage}
            alt={movie.title}
          />

          {/* HEART */}
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

        {/* INFO */}
        <div className="movie-info">
          <h3>{movie.title}</h3>

          <p>
            ⭐ {movie.vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
}