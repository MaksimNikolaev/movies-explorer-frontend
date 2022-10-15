import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
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
  const [dataNotFound, setDataNotFound] = useState(
    Boolean(localStorage.getItem("notFound"))
  );

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
    if (localStorage.getItem("notFound") === "true") {
      setDataNotFound(true);
    } else {
      setDataNotFound(false);
    }
  }, []);

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
    if (window.innerWidth < 768) {
      setMoviesDisplay({ initilalQuantity: 5, inc: 2 });
      setCountMoviesOfScreens(5);
    } else if (window.innerWidth < 1280) {
      setMoviesDisplay({ initilalQuantity: 8, inc: 2 });
      setCountMoviesOfScreens(8);
    } else {
      setMoviesDisplay({ initilalQuantity: 12, inc: 3 });
      setCountMoviesOfScreens(12);
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
      if (filterData.length === 0) {
        setDataNotFound(true);
        localStorage.setItem("notFound", true);
        localStorage.setItem("RequestText", inputSearch);
        localStorage.setItem("shortFilmStatus", shortFilmStatus);
        setMoviesArray(filterData);
        setShortFilmStatus(shortFilmStatus);
        setDataReceived(true);
        setIsLoading(false);
      } else {
        setDataNotFound(false);
        localStorage.setItem("notFound", false);
        localStorage.setItem("movies", JSON.stringify(filterData));
        localStorage.setItem("RequestText", inputSearch);
        localStorage.setItem("shortFilmStatus", shortFilmStatus);
        setMoviesArray(filterData);
        setShortFilmStatus(shortFilmStatus);
        setDataReceived(true);
        setIsLoading(false);
      }
    } else {
      moviesApi
        .getMovies()
        .then((res) => {
          handleChangeWidthScreen();
          const filterData = filterMovies(res, inputSearch, shortFilmStatus);
          localStorage.setItem("moviesServer", JSON.stringify(res));
          if (filterData.length === 0) {
            setDataNotFound(true);
            localStorage.setItem("notFound", true);
            localStorage.setItem("RequestText", inputSearch);
            localStorage.setItem("shortFilmStatus", shortFilmStatus);
            setMoviesArray(filterData);
            setSaveMoviesServer(filterData);
            setShortFilmStatus(shortFilmStatus);
            setDataReceived(true);
          } else {
            setDataNotFound(false);
            localStorage.setItem("notFound", false);
            localStorage.setItem("movies", JSON.stringify(filterData));
            localStorage.setItem("RequestText", inputSearch);
            localStorage.setItem("shortFilmStatus", shortFilmStatus);
            setMoviesArray(filterData);
            setShortFilmStatus(shortFilmStatus);
            setDataReceived(true);
          }
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
          dataNotFound={dataNotFound}
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
