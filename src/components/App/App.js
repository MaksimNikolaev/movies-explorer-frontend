import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import './App.css';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={
                  <Main isLoggedIn={loggedIn}/>
              }>
        </Route>
        <Route path="/movies" element={
                  <Movies isLoggedIn={loggedIn}/>
              }>
        </Route>        
        <Route path="/saved-movies" element={
                  <Movies isLoggedIn={loggedIn}/>
              }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
