import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = ({ moviesArray, countMoviesOfScreens }) => {
  return (
    <section className="movies-card">
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
              isSaved={item.isSaved}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;
