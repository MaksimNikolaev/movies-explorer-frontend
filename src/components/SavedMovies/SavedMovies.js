import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import photo2 from "../../images/MoviesCard/100let.jpg";
import photo3 from "../../images/MoviesCard/vpogone.jpg";
import photo6 from "../../images/MoviesCard/knigotvorci.jpg";

const SavedMovies = ({loggedIn}) => {
  const moviesArray = [
    {
      id: 2,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
      photo: photo2,
      isSaved: true,
    },
    {
      id: 3,
      name: "В погоне за Бенкси",
      duration: "1ч 17м",
      photo: photo3,
      isSaved: true,
    },
    {
      id: 6,
      name: "Книготорговцы",
      duration: "1ч 17м",
      photo: photo6,
      isSaved: true,
    },
  ];
  return (
    <>
      <Header isBlue={false} loggedIn={loggedIn} />
      <main className="main">
        <SearchForm />
        <MoviesCardList moviesArray={moviesArray} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
