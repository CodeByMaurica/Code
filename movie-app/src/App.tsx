import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import type { Movie } from "./types/Movie";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
      .then((res) => res.json()) // turn into usable code
      .then((data) => {
        console.log(data);

        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}