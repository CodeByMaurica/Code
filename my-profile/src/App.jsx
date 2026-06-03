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

      <footer className="footer">
        <p>
          Designed & Developed by Maurica Bellaphant |
          Full Stack Developer & AI Automation Specialist
        </p>

        <div className="footer-links">
          <a href="mailto:m.bellaphant@outlook.com">
            Email
          </a>

          <a
            href="https://github.com/mauricabellaphant"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/mauricabellaphant"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}