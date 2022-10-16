import { useState } from "react";
import filterMovies from "../../utils/filter";
import mainApi from "../../utils/MainApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


const SavedMovies = ({
  loggedIn,
  moviesSaveArray,
  savedMoviesAfterFilter,
  setSavedMoviesAfterFilter,
  dataReceived,
  setDataReceived,
  handleDeleteMovies,
}) => {
  const [shortFilmStatus, setShortFilmStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          setSavedMoviesAfterFilter(filterData);
          localStorage.setItem("saveMovies", JSON.stringify(savedMovies));
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
          moviesArray={savedMoviesAfterFilter === null ? moviesSaveArray : savedMoviesAfterFilter.length === 0 ? [] : savedMoviesAfterFilter}
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
