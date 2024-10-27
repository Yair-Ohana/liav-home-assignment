import { displaySingleMovie } from "./single-movie-utils.js";

const favoritesList = document.getElementById("favorites-list");
const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

favoritesList.innerHTML = "";

if (!favoriteMovies || favoriteMovies.length === 0) {
  favoritesList.innerHTML = "<p>No favorite movies yet.</p>";
}

favoriteMovies.forEach((movie) => {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie-item");
  movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <button class="remove-favorite" data-id="${movie.id}">🗑️ Remove from favorites</button>
      `;

  const removeButton = movieElement.querySelector(".remove-favorite");
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    removeFromFavorites(movie.id, movie.title);
  });

  movieElement.addEventListener("click", () => {
    displaySingleMovie(movie.id);
  });

  favoritesList.appendChild(movieElement);
});

function removeFromFavorites(movieId, movieTitle) {
  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  const updatedFavorites = favoriteMovies.filter(
    (movie) => movie.id !== movieId
  );
  localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));

  // Remove the movie element from the DOM
  const movieElement = document
    .querySelector(`.movie-item .remove-favorite[data-id="${movieId}"]`)
    .closest(".movie-item");
  if (movieElement) {
    movieElement.remove();
  }

  // Update the favorites list if it's now empty
  if (updatedFavorites.length === 0) {
    favoritesList.innerHTML = "<p>No favorite movies yet.</p>";
  }

  alert(`Removed ${movieTitle} from favorites`);
}
