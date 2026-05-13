import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import Movies from "./screens/Movies";
import TvShows from "./screens/TvShows";
import Animes from "./screens/Animes";
import MovieDetails from "./screens/MovieDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}