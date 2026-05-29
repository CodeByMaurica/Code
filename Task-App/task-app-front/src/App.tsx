import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./screens/Login";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";

import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <Home setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/home" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}