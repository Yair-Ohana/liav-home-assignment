import { addToFavorites } from "../utils/utils.js";
import { displaySingleMovie } from "../utils/single-movie-utils.js";
import { options } from "../../constants.js";

const popularMoviesDayUrl =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const movieList = document.getElementsByClassName("day-movie-list")[0];
fetch(popularMoviesDayUrl, options)
  .then((response) => response.json())
  .then((response) =>
    response?.results?.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie-item");
      movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <h2 style="text-align: center">${movie.title}</h2>
      <span class="favorite-icon" data-id="${movie.id}" style="text-align: center; display: block">❤️</span>
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
