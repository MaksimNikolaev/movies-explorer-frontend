import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
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
      </Routes>
    </div>
  );
}

export default App;
