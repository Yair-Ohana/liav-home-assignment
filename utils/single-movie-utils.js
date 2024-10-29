import { options } from "../../constants.js";

export function displaySingleMovie(movieId) {
  const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  document.body.innerHTML = "";
  const singleMovieElement = document.createElement("div");
  singleMovieElement.classList.add("single-movie");

  Promise.all([fetch(singleMovieUrl, options), fetch(creditsUrl, options)])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then(([movieDetails, credits]) => {
      const mainCast = credits.cast.slice(0, 5);

      singleMovieElement.innerHTML = `
        <h1>${movieDetails.title}</h1>
        <div class="movie-content">
          <div class="movie-poster">
            <img src="https://image.tmdb.org/t/p/w500${
              movieDetails.poster_path
            }" alt="${movieDetails.title}" />
          </div>
          <div class="movie-info">
            <p><strong>Release Date:</strong> ${movieDetails.release_date}</p>
            <p><strong>Runtime:</strong> ${movieDetails.runtime} minutes</p>
            <p><strong>Rating:</strong> ${movieDetails.vote_average.toFixed(
              1
            )}/10 (${movieDetails.vote_count} votes)</p>
            <p><strong>Genres:</strong> ${movieDetails.genres
              .map((genre) => genre.name)
              .join(", ")}</p>
            <p><strong>Language:</strong> ${movieDetails.original_language.toUpperCase()}</p>
            <div class="cast-section">
              <h3>Main Cast:</h3>
              <div class="cast-list">
                ${mainCast
                  .map(
                    (actor) => `
                  <div class="cast-member">
                    ${
                      actor.profile_path
                        ? `<img src="https://image.tmdb.org/t/p/w185${actor.profile_path}" alt="${actor.name}" />`
                        : `<div class="no-photo">No Photo</div>`
                    }
                    <p class="actor-name">${actor.name}</p>
                    <p class="character-name" style="word-break: break-word;">${
                      actor.character
                    }</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
            <div class="overview-section">
              <h3>Overview:</h3>
              <p style="max-width: 100%; word-wrap: break-word;">${
                movieDetails.overview
              }</p>
            </div>
            ${
              movieDetails.homepage
                ? `
              <p style="word-break: break-all;"><strong>Official Website:</strong> 
                <a href="${movieDetails.homepage}" target="_blank">${movieDetails.homepage}</a>
              </p>
            `
                : ""
            }
            <button id="back-button">Back to List</button>
          </div>
        </div>
      `;

      document.body.appendChild(singleMovieElement);

      document.getElementById("back-button").addEventListener("click", () => {
        location.reload();
      });
    })
    .catch((err) => {
      console.error(err);
      singleMovieElement.innerHTML = `
        <div class="error-message">
          <h2>Error loading movie details</h2>
          <p>Please try again later</p>
          <button id="back-button">Back to List</button>
        </div>
      `;
      document.body.appendChild(singleMovieElement);

      document.getElementById("back-button").addEventListener("click", () => {
        location.reload();
      });
    });
}
