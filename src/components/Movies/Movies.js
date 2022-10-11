import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
import moviesApi from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";

const Movies = ({loggedIn}) => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesDisplay, setMoviesDisplay] = useState({
    initilalQuantity: 0,
    inc: 0,
  });
  const [countMoviesOfScreens, setCountMoviesOfScreens] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleChangeWidthScreen();
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
        const filterData = filterMovies(res, inputSearch);
        localStorage.setItem("movies", JSON.stringify(filterData));
        setMoviesArray(filterData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const filterMovies = (data, inputSearch) => {
    return data.filter((movie) => {
      return (
        movie.nameEN.toLowerCase().includes(inputSearch.toLowerCase()) ||
        movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase())
      );
    });
  };

  const loadMore = () => {
    setCountMoviesOfScreens(countMoviesOfScreens + moviesDisplay.inc);
  };

  const handleSavesMovies = () => {
    mainApi.createMovies();
  }

  return (
    <>
      <Header isBlue={false} loggedIn={loggedIn} />
      <main className="main">
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
        <MoviesCardList
          moviesArray={moviesArray}
          countMoviesOfScreens={countMoviesOfScreens}
          isLoading={isLoading}
          handleSavesMovies={handleSavesMovies}
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
