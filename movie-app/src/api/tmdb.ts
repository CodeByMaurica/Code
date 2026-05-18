const API_KEY = import.meta.env.VITE_API_KEY;

function normalizeMovie(movie: any) {
  return {
    ...movie,
    title: movie.title || movie.name,
    release_date: movie.release_date || movie.first_air_date || "",
    media_type: movie.media_type || "movie",
  };
}

function normalizeTv(show: any) {
  return {
    ...show,
    title: show.name,
    release_date: show.first_air_date || "",
    media_type: "tv",
  };
}

// HOME MIXED CONTENT

export async function getHomeContent() {
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const tvResponse = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
  );

  const animeResponse = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja`
  );

  const movieData = await movieResponse.json();
  const tvData = await tvResponse.json();
  const animeData = await animeResponse.json();

  const movies = movieData.results.map(normalizeMovie);
  const tvShows = tvData.results.map(normalizeTv);
  const animes = animeData.results.map(normalizeTv);

  return [...movies, ...tvShows, ...animes];
}

// MOVIES

export async function getPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results.map(normalizeMovie);
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  const data = await response.json();

  return data.results
    .filter((item: any) => item.media_type === "movie" || item.media_type === "tv")
    .map(normalizeMovie);
}

export async function getNowPlayingMovies() {
  const currentYear = new Date().getFullYear();

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${currentYear}&sort_by=popularity.desc`
  );

  const data = await response.json();

  return data.results.map(normalizeMovie);
}

export async function getUpcomingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results.map(normalizeMovie);
}

// GENRES: MOVIES + TV + ANIME

export async function getAllByGenre(genreId: number) {
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );

  const tvResponse = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`
  );

  const movieData = await movieResponse.json();
  const tvData = await tvResponse.json();

  const movies = movieData.results.map(normalizeMovie);
  const tvShows = tvData.results.map(normalizeTv);

  return [...movies, ...tvShows];
}

export async function getDetails(mediaType: string, id: string | undefined) {
  const type = mediaType === "tv" ? "tv" : "movie";

  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
  );

  const data = await response.json();

  return type === "tv" ? normalizeTv(data) : normalizeMovie(data);
}