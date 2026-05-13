import type { TvShow } from "../types/tvShows";

type Props = {
  show: TvShow;
};

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;
const FALLBACK_IMAGE =
  "https://via.placeholder.com/500x750?text=No+Image";

export default function TvCard({ show }: Props) {
  const posterImage = show.poster_path
    ? `${IMAGE_URL}w500${show.poster_path}`
    : FALLBACK_IMAGE;

  return (
    <div className="movie-card">
      <img src={posterImage} alt={show.name} />

      <div className="movie-info">
        <h3>{show.name}</h3>
        <p>⭐ {show.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}