import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

const MoviesCardList = ({ moviesArray, countMoviesOfScreens, isLoading, handleSavesMovies }) => {
  return (
    <section className="movies-card">
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className="movies-card__list">
          {moviesArray.slice(0, countMoviesOfScreens).map((item) => {
            function getTimeFromMins(mins) {
              let hours = Math.trunc(mins / 60);
              let minutes = mins % 60;
              return hours + "ч " + minutes + "м";
            }
            return (
              <MoviesCard
                key={item.id}
                img={`https://api.nomoreparties.co/` + item.image.url}
                alt={item.nameRU}
                name={item.nameRU}
                duration={getTimeFromMins(item.duration)}
                isSaved={false}
                handleSavesMovies={handleSavesMovies}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default MoviesCardList;
