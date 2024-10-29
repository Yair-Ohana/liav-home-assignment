import { addToFavorites } from "../utils/utils.js";
import { displaySingleMovie } from "../utils/single-movie-utils.js";
import { options } from "../../constants.js";
const popularMoviesWeekUrl =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";

const movieList = document.getElementsByClassName("week-movie-list")[0];

fetch(popularMoviesWeekUrl, options)
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
