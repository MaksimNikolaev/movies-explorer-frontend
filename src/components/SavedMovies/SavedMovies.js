import { useEffect, useState } from "react";
import filterMovies from "../../utils/filter";
import mainApi from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({
  loggedIn,
  moviesSaveArray,
  dataReceived,
  setDataReceived,
  handleDeleteMovies,
  savedMoviesAfterFilter,
  setSavedMoviesAfterFilter,
}) => {
  const [shortFilmStatus, setShortFilmStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setShortFilmStatus(Boolean(localStorage.getItem("shortFilmStatusSaveMovies")))
    if (localStorage.getItem("shortFilmStatusSaveMovies") === "true") {
      setShortFilmStatus(true);
    } else {
      setShortFilmStatus(false);
    }
  }, []);

/*   useEffect(() => {
    if (localStorage.getItem("saveMovies")) {
      const movies = JSON.parse(localStorage.getItem("saveMovies"));
      setSavedMoviesAfterFilter(movies);
      setDataReceived(true);
    }
  }, []); */

  const handleSearchSubmit = (inputSearch, shortFilmStatus) => {
    setIsLoading(true);
    mainApi
      .getSaveMovies(localStorage.getItem("jwt"))
      .then((savedMovies) => {
        const filterData = filterMovies(
          savedMovies,
          inputSearch,
          shortFilmStatus
        );
        localStorage.setItem("saveMovies", JSON.stringify(filterData));
        localStorage.setItem("requestTextSaveMovies", inputSearch);
        localStorage.setItem("shortFilmStatusSaveMovies", shortFilmStatus);
        setSavedMoviesAfterFilter(filterData);
        setShortFilmStatus(shortFilmStatus);
        setDataReceived(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChangeCheckbox = () => {
    shortFilmStatus ? setShortFilmStatus(false) : setShortFilmStatus(true);
  };

  return (
    <>
      <Header isBlue={false} loggedIn={loggedIn} textColorBlack={true} />
      <main className="main">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          shortFilmStatus={shortFilmStatus}
          handleChangeCheckbox={handleChangeCheckbox}
        />
        <MoviesCardList
          moviesArray={savedMoviesAfterFilter || moviesSaveArray}
          moviesSaveArray={moviesSaveArray}
          dataReceived={dataReceived}
          handleDeleteMovies={handleDeleteMovies}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
