let numberOfFilms = +prompt('How much films do you wached?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilmView = prompt('One from is last film do you view?', ''),
 lastFilmRating = prompt('Your rating last film?', ''),
 lastFilmView2 = prompt('One from is last film do you view?', ''),
 lastFilmRating2 = prompt('Your rating last film?', '');

personalMovieDB.movies[lastFilmView] = lastFilmRating;
personalMovieDB.movies[lastFilmView2] = lastFilmRating2;

console.log(personalMovieDB);
