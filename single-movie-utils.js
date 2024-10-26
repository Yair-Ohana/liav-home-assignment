const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTQyMTM0MC4yNjY0NzYsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._5_tA0D-bSlSEVpHW6vOkO1NBzoUvuqboA-11boXpI4",
  },
};

export function displaySingleMovie(movieId) {
  const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  document.body.innerHTML = "";
  const singleMovieElement = document.createElement("div");
  singleMovieElement.classList.add("single-movie");

  // Fetch both movie details and credits
  Promise.all([
    fetch(singleMovieUrl, options),
    fetch(creditsUrl, options)
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(([movieDetails, credits]) => {
      // Get only the first 5 actors
      const mainCast = credits.cast.slice(0, 5);
      
      singleMovieElement.innerHTML = `
        <h1>${movieDetails.title}</h1>
        <div class="movie-content">
          <div class="movie-poster">
            <img src="https://image.tmdb.org/t/p/w500${movieDetails.poster_path}" alt="${movieDetails.title}" />
          </div>
          <div class="movie-info">
            <p><strong>Release Date:</strong> ${movieDetails.release_date}</p>
            <p><strong>Runtime:</strong> ${movieDetails.runtime} minutes</p>
            <p><strong>Rating:</strong> ${movieDetails.vote_average.toFixed(1)}/10 (${movieDetails.vote_count} votes)</p>
            <p><strong>Genres:</strong> ${movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Language:</strong> ${movieDetails.original_language.toUpperCase()}</p>
            <div class="cast-section">
              <h3>Main Cast:</h3>
              <div class="cast-list">
                ${mainCast.map(actor => `
                  <div class="cast-member">
                    ${actor.profile_path 
                      ? `<img src="https://image.tmdb.org/t/p/w185${actor.profile_path}" alt="${actor.name}" />`
                      : `<div class="no-photo">No Photo</div>`
                    }
                    <p class="actor-name">${actor.name}</p>
                    <p class="character-name">as ${actor.character}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="overview-section">
              <h3>Overview:</h3>
              <p>${movieDetails.overview}</p>
            </div>
            ${movieDetails.homepage ? `
              <p><strong>Official Website:</strong> 
                <a href="${movieDetails.homepage}" target="_blank">Visit Website</a>
              </p>
            ` : ''}
            <button id="back-button">Back to List</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(singleMovieElement);

      // Add event listener to back button
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











