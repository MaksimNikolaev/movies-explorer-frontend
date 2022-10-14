import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

const MoviesCardList = ({
  moviesArray,
  countMoviesOfScreens,
  isLoading,
  handleSavesMovies,
  handleDeleteMovies,
  dataReceived,
  moviesSaveArray,
  dataNotFound,
}) => {
  const getSavedMovieCard = (moviesArray, movie) => {
    return moviesArray.find((savedMovie) => savedMovie.movieId === movie.id);
  };

  if (isLoading) {
    return (
      <section className="movies-card">
        <Preloader />
      </section>
    );
  }

  if (dataNotFound) {
    return (
      <section className="movies-card">
        <p className="movies-card__not-found">Ничего не найдено</p>
      </section>
    );
  }

  if (dataReceived) {
    return (
      <section className="movies-card">
        <ul className="movies-card__list">
          {moviesArray.slice(0, countMoviesOfScreens).map((item, i) => {
            function getTimeFromMins(mins) {
              let hours = Math.trunc(mins / 60);
              let minutes = mins % 60;
              return hours + "ч " + minutes + "м";
            }
            return (
              <MoviesCard
                key={i}
                movie={item}
                duration={getTimeFromMins(item.duration)}
                saved={getSavedMovieCard(moviesSaveArray, item)}
                handleSavesMovies={handleSavesMovies}
                handleDeleteMovies={handleDeleteMovies}
              />
            );
          })}
        </ul>
      </section>
    );
  }
};

export default MoviesCardList;
