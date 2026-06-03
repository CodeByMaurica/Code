import { Routes, Route, Link } from "react-router-dom";

import Home from "./screens/Home";
import About from "./screens/About";

export default function App() {
  return (
    <div>
      <header className="navbar">
        <h2 className="logo">Maurica Bellaphant</h2>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}