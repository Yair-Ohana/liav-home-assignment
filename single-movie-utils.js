const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTQyMTM0MC4yNjY0NzYsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._5_tA0D-bSlSEVpHW6vOkO1NBzoUvuqboA-11boXpI4",
  },
};

export function displaySingleMovie(movieId) {
  const singleMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  fetch(singleMovieUrl, options)
    .then((response) => response.json())
    .then((movie) => {
      // Hide all existing content
      document.body.innerHTML = "";

      // Create and append single movie details
      const singleMovieElement = document.createElement("div");
      singleMovieElement.classList.add("single-movie");
      singleMovieElement.innerHTML = `
        <h1>${movie.title}</h1>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Overview:</strong> ${movie.overview}</p>
        <p><strong>Rating:</strong> ${movie.vote_average}/10</p>
        <button id="back-button">Back to List</button>
      `;
      document.body.appendChild(singleMovieElement);

      // Add event listener to back button
      document.getElementById("back-button").addEventListener("click", () => {
        location.reload();
      });
    })
    .catch((err) => console.error(err));
}
