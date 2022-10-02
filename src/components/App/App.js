import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={
                  <Main/>
              }>
        </Route>
        <Route path="/movies" element={
                  <Movies/>
              }>
        </Route>        
        <Route path="/saved-movies" element={
                  <SavedMovies/>
              }>
        </Route>
        <Route path="/profile" element={
                  <Profile/>
              }>
        </Route>
        <Route path="/signup" element={
                  <Register/>
              }>
        </Route>
        <Route path="/signin" element={
                  <Login/>
              }>
        </Route>
        <Route path="*" element={
                  <NotFound/>
              }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
