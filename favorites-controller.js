const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDQyOTU0NTdiMDFjNmJjZTYxZWU4MjA4M2ZhMGYzMyIsIm5iZiI6MTcyOTY2NzU0MC43OTg5OTEsInN1YiI6IjY3MTFlNzI2OThmNmE3NThjZDU0OGVmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOZpQNoVCITZD0A7guGGPkmv2jnuC5oj_D2iWwhNHXo'
    }
  };
  
  async function addToFavorites(movieId, movieTitle) {
    try {
      const response = await fetch('https://api.themoviedb.org/3/account/21577653/favorite', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: options.headers.Authorization
        },
        body: JSON.stringify({
          media_type: 'movie',
          media_id: movieId,
          favorite: true
        })
      });
      
      if (response.ok) {
        alert(`${movieTitle} has been added to favorites!`);
        loadFavoriteMovies();
      } else {
        throw new Error('Failed to add to favorites');
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
      alert('Failed to add movie to favorites');
    }
  }
  
  async function removeFromFavorites(movieId, movieTitle) {
    try {
      const response = await fetch('https://api.themoviedb.org/3/account/21577653/favorite', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: options.headers.Authorization
        },
        body: JSON.stringify({
          media_type: 'movie',
          media_id: movieId,
          favorite: false
        })
      });
      
      if (response.ok) {
        alert(`${movieTitle} has been removed from favorites!`);
        loadFavoriteMovies();
      } else {
        throw new Error('Failed to remove from favorites');
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
      alert('Failed to remove movie from favorites');
    }
  }
  
  async function loadFavoriteMovies() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/account/21577653/favorite/movies?language=en-US&page=1&sort_by=created_at.asc',
        options
      );
      const data = await response.json();
      displayFavoriteMovies(data.results);
    } catch (error) {
      console.error('Error loading favorites:', error);
      alert('Failed to load favorite movies');
    }
  }
  
  function displayFavoriteMovies(movies) {
    const favoritesList = document.getElementById('favorites-list');
    if (!favoritesList) return;
  
    favoritesList.innerHTML = '';
  
    if (!movies || movies.length === 0) {
      favoritesList.innerHTML = '<p>No favorite movies yet.</p>';
      return;
    }
  
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-item');
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <button class="remove-favorite" data-id="${movie.id}">🗑️ Remove from favorites</button>
      `;
  
      const removeButton = movieElement.querySelector('.remove-favorite');
      removeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFromFavorites(movie.id, movie.title);
      });
  
      movieElement.addEventListener('click', () => {
        displaySingleMovie(movie.id);
      });
  
      favoritesList.appendChild(movieElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadFavoriteMovies);