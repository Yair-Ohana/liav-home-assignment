import { displaySingleMovie } from "../utils/single-movie-utils.js";
import { options } from "../../constants.js";

const searchForm = document.querySelector("#search-form");
const searchOutput = document.querySelector(`.search-output`);

searchForm?.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const formData = new FormData(searchForm);
  const userInput = formData.get("search-bar");


  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${userInput}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();

    const moviesLists = data.results;
    searchOutput.innerHTML = "";
    moviesLists?.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const movieTitleElement = document.createElement("h1");
      movieTitleElement.classList.add("card-title");
      movieTitleElement.textContent = `${movie.original_title}`;

      movieCard.appendChild(image);
      movieCard.appendChild(movieTitleElement);
      searchOutput.appendChild(movieCard);

      movieCard.addEventListener("click", () => {
        displaySingleMovie(movie.id);
      });
    });
  } catch (err) {
    console.error(err);
  }
});
