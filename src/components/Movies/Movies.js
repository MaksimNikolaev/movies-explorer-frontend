import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";

const Movies = ({ loggedIn, handleSavesMovies}) => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesDisplay, setMoviesDisplay] = useState({});
  const [countMoviesOfScreens, setCountMoviesOfScreens] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [shortFilmStatus, setShortFilmStatus] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    handleChangeWidthScreen();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setMoviesArray(movies);
      setDataReceived(true);
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

  const handleChangeWidthScreen = () => {
    if (window.innerWidth < 768) {
      setMoviesDisplay({ initilalQuantity: 5, inc: 2 });
    } else if (window.innerWidth < 1280) {
      setMoviesDisplay({ initilalQuantity: 8, inc: 2 });
    } else {
      setMoviesDisplay({ initilalQuantity: 12, inc: 3 });
    }
    setCountMoviesOfScreens(moviesDisplay.initilalQuantity);
  };

  const handleSearchSubmit = (inputSearch) => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((res) => {
        handleChangeWidthScreen();
        const filterData = filterMovies(res, inputSearch, shortFilmStatus);
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
  };

  const filterMovies = (data, inputSearch, shortFilmStatus) => {
    return data.filter((movie) => {
      const filterLowerCase =
        movie.nameEN.toLowerCase().includes(inputSearch.toLowerCase()) ||
        movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase());
      if (!shortFilmStatus) {
        return filterLowerCase;
      } else {
        return shortFilmStatus && movie.duration <= 40;
      }
    });
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
          dataReceived={dataReceived}
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
