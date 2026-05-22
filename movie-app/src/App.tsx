import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./screens/Home";
import Movies from "./screens/Movies";
import NowPlaying from "./screens/NowPlaying";
import Upcoming from "./screens/Upcoming";
import Favorites from "./screens/Favorites";
import MovieDetails from "./screens/MovieDetails";
import GenrePage from "./screens/GenrePage";
import Login from "./screens/Login";

export default function App() {
  return (
    <Routes>

      {/* START AT LOGIN PAGE */}
      <Route
        path="/"
        element={<Navigate to="/login" />}
      />

      {/* LOGIN PAGE */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* MAIN APP */}
      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/movies"
        element={<Movies />}
      />

      <Route
        path="/now-playing"
        element={<NowPlaying />}
      />

      <Route
        path="/upcoming"
        element={<Upcoming />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/genre/:genreName"
        element={<GenrePage />}
      />

      <Route
        path="/details/:mediaType/:id"
        element={<MovieDetails />}
      />

    </Routes>
  );
}