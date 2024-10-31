import { displaySingleMovie } from "../utils/single-movie-utils.js";  

document.addEventListener("DOMContentLoaded", () => {
  const favoritesList = document.getElementById("favorites-list");
  const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  
  if (favoritesList) {
    favoritesList.innerHTML = "";
  }

  if (favoriteMovies.length === 0) {
    if (favoritesList) {
      favoritesList.innerHTML = "<p>No favorite movies yet.</p>";
    }
  }

  favoriteMovies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("favorite-movie-item");
    movieElement.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
          <div class="movie-item-info">
            <h2>${movie.title}</h2>
            <button class="remove-favorite" data-id="${movie.id}">🗑️ Remove from favorites</button>
          </div>
        `;

    const removeButton = movieElement.querySelector(".remove-favorite");
    removeButton.addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromFavorites(movie.id, movie.title, movieElement);
    });

    movieElement.addEventListener("click", () => {
      displaySingleMovie(movie.id);
    });

    favoritesList?.appendChild(movieElement);
  });

  function removeFromFavorites(movieId, movieTitle, movieElement) {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));

    if (movieElement) {
      movieElement.remove();
    }

    if (updatedFavorites.length === 0) {
      if (favoritesList) {
        favoritesList.innerHTML = "<p>No favorite movies yet.</p>";
      }
    }

    alert(`Removed ${movieTitle} from favorites`);
  }
});
