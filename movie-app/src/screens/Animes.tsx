import { useEffect, useState } from "react";
import Header from "../components/Header";
import TvCard from "../components/TvCard";
import type { TvShow } from "../types/tvShows";
import { getPopularAnimes } from "../api/tmdb";

const IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;

export default function Animes() {
  const [animes, setAnimes] = useState<TvShow[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadAnimes() {
      const results = await getPopularAnimes();
      setAnimes(results);
    }

    loadAnimes();
  }, []);

  function handleSearch() {
    const filtered = animes.filter((anime) =>
      anime.name.toLowerCase().includes(search.toLowerCase())
    );

    setAnimes(filtered);
  }

  const heroAnime = animes[0];
  const animeRow = animes.slice(1, 13);

  const heroImage =
    heroAnime?.backdrop_path || heroAnime?.poster_path
      ? `${IMAGE_URL}original${
          heroAnime.backdrop_path || heroAnime.poster_path
        }`
      : "";

  return (
    <div className="netflix-page">
      <Header
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {heroAnime && (
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
            <span className="gold-badge">LTM ANIME</span>

            <div className="hero-rating">
              <span>⭐ {heroAnime.vote_average.toFixed(1)}</span>
              <span>•</span>
              <span>{heroAnime.first_air_date?.slice(0, 4)}</span>
              <span>•</span>
              <span>Anime</span>
            </div>

            <h1>{heroAnime.name}</h1>
            <p>{heroAnime.overview}</p>

            <div className="hero-buttons">
              <button className="play-btn">▶ WATCH</button>
              <button className="add-btn">＋ ADD TO LIST</button>
            </div>
          </div>
        </section>
      )}

      <section className="below-hero">
        <h2 className="row-title">Popular Anime</h2>

        <div className="poster-row">
          {animeRow.map((anime) => (
            <TvCard key={anime.id} show={anime} />
          ))}
        </div>
      </section>
    </div>
  );
}