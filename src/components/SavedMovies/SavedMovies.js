import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = ({loggedIn,  moviesSaveArray, dataReceived}) => {

  return (
    <>
      <Header isBlue={false} loggedIn={loggedIn} textColorBlack={true}/>
      <main className="main">
        <SearchForm />
        <MoviesCardList moviesArray={moviesSaveArray} moviesSaveArray={moviesSaveArray} dataReceived={dataReceived} statusBtn={true}/>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
