let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// for(let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних фильмов?', ''),
//         b = prompt('Ваша оценка филма?', '');

//   if (a !== '' && b !== '' && a !== null & b !== null && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     i--;
//   }
// }

// Решение циклом while с помощью или ||

// let i = 0;
// while (i < 2) {
//   const a = prompt('Один из посдних просмотренных фильмов?', ''),
//         b = prompt('Ваша оценка фильма?', '');

// if (a === '' || b === '' || a === null || b === null || a.length > 50) {
//   console.log('error');
//   i--;
// } else {
//   personalMovieDB.movies[a] = b;
//   console.log('done');
// }
// i++;
// }

// решение циклом do while
let i = 0;

do {
  const a = prompt('Последний просмотренный фильм?', ''),
        b = prompt('Оцените просмотренный фильм?', '');

if (a !== '' && b !== ''&& a !== null && b !== null && a.length < 50) {
  personalMovieDB.movies[a] = b;
  console.log('done');
} else {
  i--;
  console.log('error');
}
i++;
} while (i < 2);


if (personalMovieDB.count < 10) {
  console.log('Просмотренно слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);