import { useEffect, useState } from "react";
import Header from "../components/Header";
import TvCard from "../components/TvCard";
import type { TvShow } from "../types/tvShows";
import {
  getPopularTvShows,
  searchTvShows,
} from "../api/tmdb";

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;

export default function TvShows() {
  const [shows, setShows] = useState<TvShow[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadShows() {
      const results = await getPopularTvShows();
      setShows(results);
    }

    loadShows();
  }, []);

  async function handleSearch() {
    const results =
      search.trim() === ""
        ? await getPopularTvShows()
        : await searchTvShows(search);

    setShows(results);
  }

  const heroShow = shows[0];
  const showRow = shows.slice(1, 13);

  const heroImage =
    heroShow?.backdrop_path || heroShow?.poster_path
      ? `${IMAGE_URL}original${
          heroShow.backdrop_path || heroShow.poster_path
        }`
      : "";

  return (
    <div className="netflix-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {heroShow && (
        <section
          className="netflix-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(0,0,0,0.95) 0%,
                rgba(0,0,0,0.75) 35%,
                rgba(0,0,0,0.25) 70%,
                rgba(0,0,0,0.9) 100%
              ),
              url(${heroImage})
            `,
          }}
        >
          <div className="hero-copy">
            <span className="gold-badge">LTM TV</span>

            <div className="hero-rating">
              <span>⭐ {heroShow.vote_average.toFixed(1)}</span>
              <span>•</span>
              <span>{heroShow.first_air_date?.slice(0, 4)}</span>
              <span>•</span>
              <span>TV Show</span>
            </div>

            <h1>{heroShow.name}</h1>
            <p>{heroShow.overview}</p>

            <div className="hero-buttons">
              <button className="play-btn">▶ WATCH</button>
              <button className="add-btn">＋ ADD TO LIST</button>
            </div>
          </div>
        </section>
      )}

      <section className="below-hero">
        <h2 className="row-title">Popular TV Shows</h2>

        <div className="poster-row">
          {showRow.map((show) => (
            <TvCard key={show.id} show={show} />
          ))}
        </div>
      </section>
    </div>
  );
}