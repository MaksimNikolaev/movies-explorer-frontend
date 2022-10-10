import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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

  useEffect(() => {
    checkToken();
  }, [loggedIn]);

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
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/signin");
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
        .catch((err) => console.error(err));
    }
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
  };
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile handleLogOut={handleLogOut} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register handleRegister={handleRegister} message={message} />
            }
          ></Route>
          <Route
            path="/signin"
            element={<Login handleLogin={handleLogin} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Main />}></Route>
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
