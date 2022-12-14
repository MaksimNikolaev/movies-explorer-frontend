import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("jwt"));
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [moviesSaveArray, setMoviesSaveArray] = useState([]);
  const [savedMoviesAfterFilter, setSavedMoviesAfterFilter] = useState(JSON.parse(localStorage.getItem("saveMovies")));
  const [dataReceived, setDataReceived] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("storage", handleCheckTokenOnLoaclStorage);
    return () => {
      window.removeEventListener("storage", handleCheckTokenOnLoaclStorage);
    };
  });

  const handleCheckTokenOnLoaclStorage = (e) => {
    if (e.key === "jwt") {
      handleLogOut();
    }
  };

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  useEffect(() => {
    getSaveMovies();
  }, [dataReceived, loggedIn]);

  useEffect(() => {
    if (pathname === "/saved-movies") {
      setSavedMoviesAfterFilter(moviesSaveArray);
    }
  }, [pathname]);

  const handleTokenEdit = (err) => {
    if (err === "Ошибка: 401") {
      handleLogOut();
    }
  };

  const getSaveMovies = () => {
    mainApi
      .getSaveMovies(localStorage.getItem("jwt"))
      .then((res) => {
        setMoviesSaveArray(res);
        setSavedMoviesAfterFilter(res)
        setDataReceived(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((res) => {
        setLoggedIn(true);
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setInfoTooltipOpen(true);
          setMessage("Пользователь с таким email уже существует.");
        } else {
          setInfoTooltipOpen(true);
          setMessage("При регистрации пользователя произошла ошибка.");
        }
      });
  };

  const handleLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          checkToken();
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err === "Ошибка: 401") {
          setInfoTooltipOpen(true);
          setMessage("Вы ввели неправильный логин или пароль.");
        } else {
          setInfoTooltipOpen(true);
          setMessage("При авторизации произошла ошибка.");
        }
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setMoviesSaveArray([]);
    setSavedMoviesAfterFilter([]);
    navigate("/");
  };

  const checkToken = () => {
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then((res) => {
          if (res) {
            let userData = {
              id: res._id,
              email: res.email,
              name: res.name,
            };
            setLoggedIn(true);
            setCurrentUser(userData);
          }
        })
        .catch((err) => handleTokenEdit(err));
    }
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
  };

  const handleUpdateProfile = (name, email) => {
    mainApi
      .updateProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        setInfoTooltipOpen(true);
        setMessage("Данные успешно обновлены.");
      })
      .catch((err) => {
        if (err === "Ошибка: 409") {
          setInfoTooltipOpen(true);
          setMessage("Пользователь с таким email уже существует.");
        } else {
          setInfoTooltipOpen(true);
          setMessage("При обновлении профиля произошла ошибка.");
        }
      });
  };

  const handleSavesMovies = (movie) => {
    mainApi
      .createMovies(movie, localStorage.getItem("jwt"))
      .then((movie) => {
        setMoviesSaveArray([...moviesSaveArray, movie]);
        //localStorage.setItem("saveMovies", JSON.stringify(moviesSaveArray));
        setDataReceived(true);
      })
      .catch((err) => {
        handleTokenEdit(err);
      });
  };

  const handleDeleteMovies = (movie) => {
    moviesSaveArray.forEach((savedMovie) => {
      if (savedMovie.movieId === movie.id) {
        return (movie = savedMovie);
      }
    });
    mainApi
      .removeMovies(movie, localStorage.getItem("jwt"))
      .then(() => {
        if (savedMoviesAfterFilter === null) {
          setMoviesSaveArray(
            moviesSaveArray.filter((i) => i._id !== movie._id)
          );
          //localStorage.setItem("saveMovies", JSON.stringify(savedMoviesAfterFilter.filter((i) => i._id !== movie._id)))
          setDataReceived(true);
        } else {
          setSavedMoviesAfterFilter(
            savedMoviesAfterFilter.filter((i) => i._id !== movie._id)
          );
          setMoviesSaveArray(
            moviesSaveArray.filter((i) => i._id !== movie._id)
          );
          localStorage.setItem(
            "saveMovies",
            JSON.stringify(
              savedMoviesAfterFilter.filter((i) => i._id !== movie._id)
            )
          );
          setDataReceived(true);
        }
      })
      .catch((err) => {
        handleTokenEdit(err);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  loggedIn={loggedIn}
                  handleSavesMovies={handleSavesMovies}
                  handleDeleteMovies={handleDeleteMovies}
                  moviesSaveArray={moviesSaveArray}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  loggedIn={loggedIn}
                  moviesSaveArray={moviesSaveArray}
                  savedMoviesAfterFilter={savedMoviesAfterFilter}
                  setSavedMoviesAfterFilter={setSavedMoviesAfterFilter}
                  dataReceived={dataReceived}
                  setDataReceived={setDataReceived}
                  handleDeleteMovies={handleDeleteMovies}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  handleLogOut={handleLogOut}
                  handleUpdateProfile={handleUpdateProfile}
                  loggedIn={loggedIn}
                />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                message={message}
                loggedIn={loggedIn}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} loggedIn={loggedIn} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Main loggedIn={loggedIn} />}></Route>
        </Routes>
        <InfoTooltip
          isOpen={infoTooltipOpen}
          onClose={closeInfoTooltip}
          message={message}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
