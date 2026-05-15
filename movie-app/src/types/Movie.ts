export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  media_type?: "movie" | "tv";
};