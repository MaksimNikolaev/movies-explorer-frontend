const filterMovies = (data, inputSearch, shortFilmStatus) => {
  return data.filter((movie) => {
    const filterLowerCase =
      movie.nameEN.toLowerCase().includes(inputSearch.toLowerCase()) ||
      movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase());
    if (!shortFilmStatus) {
      return filterLowerCase;
    } else {
      return filterLowerCase && (movie.duration <= 40);
    }
  });
}; 

export default filterMovies;