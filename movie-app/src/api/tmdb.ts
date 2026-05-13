const API_KEY = import.meta.env.VITE_API_KEY;

// MOVIES

export async function getPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );

  const data = await response.json();

  return data.results;
}

// TV SHOWS

export async function getPopularTvShows() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}

export async function searchTvShows(query: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`
  );

  const data = await response.json();

  return data.results;
}

// ANIMES

export async function getPopularAnimes() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja`
  );

  const data = await response.json();

  return data.results;
}

// GENRE: MOVIES + TV SHOWS TOGETHER

export async function getAllByGenre(genreId: number) {
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );

  const tvResponse = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`
  );

  const movieData = await movieResponse.json();

  const tvData = await tvResponse.json();

  const movies = movieData.results.map((movie: any) => ({
    ...movie,
    title: movie.title,
    release_date: movie.release_date,
  }));

  const tvShows = tvData.results.map((show: any) => ({
    ...show,
    title: show.name,
    release_date: show.first_air_date,
  }));

  return [...movies, ...tvShows];
}