import { displaySingleMovie } from "./single-movie-utils.js";

const searchForm = document.querySelector("#search-form");
const searchOutput = document.querySelector(`.search-output`);

searchForm?.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const formData = new FormData(searchForm);
  const userInput = formData.get("search-bar");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTY2NzU0MC43OTg5OTEsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOZpQNoVCITZD0A7guGGPkmv2jnuC5oj_D2iWwhNHXo",
    },
  };

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
