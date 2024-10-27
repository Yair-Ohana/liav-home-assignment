export function addToFavorites(movieId, movieTitle, posterPath) {
  const favoriteMovies =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  if (!favoriteMovies.some((favMovie) => favMovie.id == movieId)) {
    const movie = { id: movieId, title: movieTitle, poster_path: posterPath };
    favoriteMovies.push(movie);
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
    alert(`${movieTitle} has been added to favorites!`);
  } else {
    alert(`${movieTitle} is already in favorites.`);
  }
}
