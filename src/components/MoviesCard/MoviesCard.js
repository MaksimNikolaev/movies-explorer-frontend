import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({ movie, duration, isSaved, handleSavesMovies }) => {
  const { pathname } = useLocation();

  const onHandleSavesMovies = (e) => {
    e.preventDefault();
    handleSavesMovies(movie);
  };
  return (
    <li className="movies-card__item">
      <img
        src={
          pathname === "/saved-movies"
            ? `${movie.image}`
            : `https://api.nomoreparties.co${movie.image.url}`
        }
        className="movies-card__img"
        alt={movie.nameRU}
      />
      <div className="movies-card__info">
        <h2 className="movies-card__name">{movie.nameRU}</h2>
        <p className="movies-card__duration">{duration}</p>
      </div>
      <button
        className={`movies-card__btn ${
          isSaved
            ? "movies-card__btn_type_active"
            : "movies-card__btn_type_inactive"
        }`}
        type="button"
        onClick={onHandleSavesMovies}
      >
        Сохранить
      </button>
    </li>
  );
};

export default MoviesCard;
