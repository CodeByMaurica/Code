import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
};

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;

const FALLBACK_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image";

export default function MovieCard({ movie }: Props) {
  const posterImage = movie.poster_path
    ? `${IMAGE_URL}w500${movie.poster_path}`
    : FALLBACK_IMAGE;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
      <div className="movie-card">
        <img src={posterImage} alt={movie.title} />

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}