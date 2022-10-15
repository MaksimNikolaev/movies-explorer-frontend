import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({
  movie,
  duration,
  saved,
  handleSavesMovies,
  handleDeleteMovies,
}) => {
  const { pathname } = useLocation();

  const onHandleSavesMovies = (e) => {
    e.preventDefault();
    handleSavesMovies(movie);
  };

  const onHandleDeleteMovies = (e) => {
    e.preventDefault();
    handleDeleteMovies(movie);
  };

  return (
    <li className="movies-card__item">
      <a href={movie.trailerLink} className="movies-card__link" target='blank'>
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
            pathname === "/saved-movies"
              ? "movies-card__btn_type_delete"
              : saved
              ? "movies-card__btn_type_like"
              : "movies-card__btn_type_save"
          }`}
          type="button"
          onClick={
            pathname === "/saved-movies"
              ? onHandleDeleteMovies
              : saved
              ? onHandleDeleteMovies
              : onHandleSavesMovies
          }
        >
          Сохранить
        </button>
      </a>
    </li>
  );
};

export default MoviesCard;
