import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
import { DEVICE_PARAMS } from "../../utils/constants.js";
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import filterMovies from "../../utils/filter";

const Movies = ({
  loggedIn,
  handleSavesMovies,
  moviesSaveArray,
  handleDeleteMovies,
}) => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [saveMoviesServer, setSaveMoviesServer] = useState(
    JSON.parse(localStorage.getItem("moviesServer"))
  );
  const [moviesDisplay, setMoviesDisplay] = useState({});
  const [countMoviesOfScreens, setCountMoviesOfScreens] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [shortFilmStatus, setShortFilmStatus] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const { desktop, tablet, mobile } = DEVICE_PARAMS;

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setMoviesArray(movies);
      setDataReceived(true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("moviesServer")) {
      const movies = JSON.parse(localStorage.getItem("moviesServer"));
      setSaveMoviesServer(movies);
      setDataReceived(true);
    }
  }, [dataReceived]);

  useEffect(() => {
    if (localStorage.getItem("shortFilmStatus") === "true") {
      setShortFilmStatus(true);
    } else {
      setShortFilmStatus(false);
    }
  }, []);

  useEffect(() => {
    let timer;
    const handleChangeWidthScreenTimer = () => {
      timer = setTimeout(handleChangeWidthScreen, 1000);
    };
    window.addEventListener("resize", handleChangeWidthScreenTimer);
    return () => {
      window.removeEventListener("resize", handleChangeWidthScreenTimer);
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    handleChangeWidthScreen();
  }, []);

  const handleChangeWidthScreen = () => {
    if (window.innerWidth < mobile.width) {
      setMoviesDisplay(mobile.movies);
      setCountMoviesOfScreens(mobile.movies.initilalQuantity);
    } else if (window.innerWidth < tablet.width) {
      setMoviesDisplay(tablet.movies);
      setCountMoviesOfScreens(tablet.movies.initilalQuantity);
    } else {
      setMoviesDisplay(desktop.movies);
      setCountMoviesOfScreens(desktop.movies.initilalQuantity);
    }
  };

  const handleSearchSubmit = (inputSearch, shortFilmStatus) => {
    setIsLoading(true);
    if (saveMoviesServer !== null) {
      const filterData = filterMovies(
        saveMoviesServer,
        inputSearch,
        shortFilmStatus
      );
      localStorage.setItem("movies", JSON.stringify(filterData));
      localStorage.setItem("RequestText", inputSearch);
      localStorage.setItem("shortFilmStatus", shortFilmStatus);
      setMoviesArray(filterData);
      setShortFilmStatus(shortFilmStatus);
      setDataReceived(true);
      setIsLoading(false);
    } else {
      moviesApi
        .getMovies()
        .then((res) => {
          handleChangeWidthScreen();
          const filterData = filterMovies(res, inputSearch, shortFilmStatus);
          localStorage.setItem("moviesServer", JSON.stringify(res));
          localStorage.setItem("movies", JSON.stringify(filterData));
          localStorage.setItem("RequestText", inputSearch);
          localStorage.setItem("shortFilmStatus", shortFilmStatus);
          setMoviesArray(filterData);
          setShortFilmStatus(shortFilmStatus);
          setDataReceived(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const loadMore = () => {
    setCountMoviesOfScreens(countMoviesOfScreens + moviesDisplay.inc);
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
          moviesArray={moviesArray}
          countMoviesOfScreens={countMoviesOfScreens}
          isLoading={isLoading}
          handleSavesMovies={handleSavesMovies}
          handleDeleteMovies={handleDeleteMovies}
          dataReceived={dataReceived}
          moviesSaveArray={moviesSaveArray}
        />
        <MoreButton
          moviesArray={moviesArray}
          handleMoreSubmit={loadMore}
          countMoviesOfScreens={countMoviesOfScreens}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
