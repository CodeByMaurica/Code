import type { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
};

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;

export default function MovieCard({ movie }: Props) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>

      <p>{movie.overview}</p>

      <img
        src={`${IMAGE_URL}w200${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}