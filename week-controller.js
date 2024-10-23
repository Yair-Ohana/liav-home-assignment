const popularMoviesWeekUrl =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTQyMTM0MC4yNjY0NzYsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._5_tA0D-bSlSEVpHW6vOkO1NBzoUvuqboA-11boXpI4",
  },
};

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
    `;
      movieList.appendChild(movieElement);
    })
  )
  .catch((err) => console.error(err));
