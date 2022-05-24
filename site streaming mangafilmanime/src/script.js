const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a4880995fbb07d40249df7d0c03c8383";
const IMAGES_URL = "https://image.tmdb.org/t/p/w500";

const $form = document.querySelector("#form");
const $input = document.querySelector("#search");
const $count = document.querySelector("#count");
const $results = document.querySelector("#results");
const $movie = document.querySelector("#movie");
const $movies = document.querySelector(".Movies");
const $theme = document.querySelectorAll("#genre");
const theme = {
  Action: "28",
  Comedy: "35",
  Drama: "18",
  Adventure: "12",
  Fantasy: "14",
  Horror: "27",
  Music: "10402",
  History: "8748",
  Romance: "10149",
  Thriller: "53",
  Animation: "16",
  Crime: "80",
};

// Make an API request to get movies for the given query
function getMovies(query) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((response) => response.json())
    .then((response) => showMovies(response));
}

// Make an API request to get the details for the given movie
function getMovieDetails(movie) {
  fetch(`${API_URL}/movie/${movie.id}?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((response) => showMovieDetails(response));
}
function getMoviesGenre(genre_value) {
  fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${theme[genre_value]}`
  )
    .then((response) => response.json())
    .then((response) => showMovies(response));
}
for (let i = 0; i < $theme.length; i++) {
  $theme[i].addEventListener("click", function (e) {
    let genre_value = $theme[i].innerText;

    console.log(genre_value);
    console.log("click");

    getMoviesGenre(genre_value);
  });
}

// Add the movies buttons to the DOM
function showMovies(movies) {
  $results.innerHTML = "";

  if (movies.total_results === 0) {
    $count.innerText = "Aucun résultat, désolé !";
    return;
  }

  $count.innerText = `${movies.total_results} résultats`;

  $list = document.createElement("div");

  for (i = 0; i < movies.results.length; i++) {
    movies.results[i];
  }

  movies.results.forEach(function (movie) {
    const $movieButton = document.createElement("div");
    const $movieImg = document.createElement("img");
    $movieImg.style.display = "flex";
    $movieImg.style.width = 300 + "px";
    $movieImg.style.height = 300 + "px";
    $movieImg.src = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;

    $movieButton.innerHTML = `
    <h2>${movie.title}</h2>
    
    
    `;

    if (movie.release_date) {
      const year = movie.release_date.split("-")[0];
      $movieButton.innerText += ` (${year})`;
    }

    $movieButton.addEventListener("click", function () {
      getMovieDetails(movie);
    });
    $movieButton.appendChild($movieImg);
    $list.appendChild($movieButton);
  });

  $results.appendChild($list);
}

function showMovieDetails(movie) {
  $movie.innerHTML = `
    <h2>${movie.title}</h2>
    <p>Genres : ${movie.genres.map((genre) => genre.name).join(", ")}</p>
    <img src=${IMAGES_URL}${movie.poster_path} alt="Affiche de ${movie.title}">
  `;
}

// Listen to form submit to trigger search
$form.addEventListener("submit", function (event) {
  event.preventDefault();

  getMovies($input.value);
});
