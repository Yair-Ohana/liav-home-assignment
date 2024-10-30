const viewSelect = document.getElementById("view-select");
const dayMovieList = document.querySelector(".day-movie-list");
const weekMovieList = document.querySelector(".week-movie-list");

viewSelect?.addEventListener("change", function () {
  if (this.value === "day") {
    dayMovieList.style.display = "flex";
    weekMovieList.style.display = "none";
  } else if (this.value === "week") {
    dayMovieList.style.display = "none";
    weekMovieList.style.display = "flex";
  }
});
