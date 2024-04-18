export const API_END_POINT = "http://localhost:8080/api/v1/user";

//================= Confidential TMDB secrets ==========================
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNjZTg2NjRmNDNjZmY3ZjBkMDNlM2NlNjRmNWFjMyIsInN1YiI6IjY0OGQ1MTczMmY4ZDA5MDEzYWY5ODhjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZcRITp0dt_P6aF9jnG4q8cgZhfXpeoaoj-ml4__k-B0'
  }
};

export const now_Playing_Movie = 'https://api.themoviedb.org/3/movie/now_playing';
export const popular_Movie = 'https://api.themoviedb.org/3/movie/popular';
export const top_Rated_Moive = 'https://api.themoviedb.org/3/movie/top_rated';
export const upComing_Movie = 'https://api.themoviedb.org/3/movie/upcoming';

export const Banner_url = 'https://image.tmdb.org/t/p/w500'