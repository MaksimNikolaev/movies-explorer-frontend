import { SHORT_MOVIES_DURATION } from "./constants";

const filterMovies = (data, inputSearch, shortFilmStatus) => {
  return data.filter((movie) => {
    const reg = movie.trailerLink.match(
      /^https?:\/\/(w{3}\.)?[a-z\d]+\.[\w\-._~:/?#[\]@!$&'()*+,;=]{2,}#?$/i
    );
    if (!reg) {
      movie.trailerLink = "https://youtube.ru";
    }
    if (movie.country === 'Unknown') {
      movie.country='Страна не известна';
    } 
    const filterLowerCase =
      movie.nameEN.toLowerCase().includes(inputSearch.toLowerCase()) ||
      movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase());
    if (!shortFilmStatus) {
      return filterLowerCase;
    } else {
      return filterLowerCase && (movie.duration <= SHORT_MOVIES_DURATION);
    }
  });
}; 

export default filterMovies;