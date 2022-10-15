import getTimeFromMins from "../../utils/getTimeFromMins";
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

  if (moviesArray.length === 0) {
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
          {moviesArray.slice(0, countMoviesOfScreens).map((item) => {            
            return (
              <MoviesCard
                key={item.id || item._id}
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
