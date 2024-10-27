import { addToFavorites } from "./utils.js";
import { displaySingleMovie } from "./single-movie-utils.js";

const popularMoviesDayUrl =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTQyMTM0MC4yNjY0NzYsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._5_tA0D-bSlSEVpHW6vOkO1NBzoUvuqboA-11boXpI4",
  },
};

const movieList = document.getElementsByClassName("day-movie-list")[0];
fetch(popularMoviesDayUrl, options)
  .then((response) => response.json())
  .then((response) =>
    response?.results?.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-item");
      movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <h2>${movie.title}</h2>
      <span class="favorite-icon" data-id="${movie.id}">❤️</span>
    `;
      const favoriteIcon = movieElement.querySelector(".favorite-icon");
      favoriteIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        addToFavorites(movie.id, movie.title, movie.poster_path);
      });
      movieElement.addEventListener("click", () => {
        displaySingleMovie(movie.id);
      });
      movieList?.appendChild(movieElement);
    })
  )
  .catch((err) => console.error(err));
