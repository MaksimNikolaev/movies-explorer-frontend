import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import photo1 from "../../images/MoviesCard/33slova.jpg";
import photo2 from "../../images/MoviesCard/100let.jpg";
import photo3 from "../../images/MoviesCard/vpogone.jpg";
import photo4 from "../../images/MoviesCard/baskiya.jpg";
import photo5 from "../../images/MoviesCard/beg.jpg";
import photo6 from "../../images/MoviesCard/knigotvorci.jpg";
import photo7 from "../../images/MoviesCard/kogdayadumau.jpg";
import photo8 from "../../images/MoviesCard/gimme.jpg";
import photo9 from "../../images/MoviesCard/jenis.jpg";
import photo10 from "../../images/MoviesCard/soberis.jpg";
import photo11 from "../../images/MoviesCard/pi.jpg";
import photo12 from "../../images/MoviesCard/po_volnam.jpg";
import MoreButton from "../MoreButton/MoreButton";

const Movies = () => {
  const moviesArray = [
    {
      id: 1,
      name: "33 слова о дизайне",
      duration: "1ч 17м",
      photo: photo1,
      isSaved: false,
    },
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
      id: 4,
      name: "Баския: Взрыв реальности",
      duration: "1ч 17м",
      photo: photo4,
      isSaved: false,
    },
    {
      id: 5,
      name: "Бег это свобода",
      duration: "1ч 17м",
      photo: photo5,
      isSaved: false,
    },
    {
      id: 6,
      name: "Книготорговцы",
      duration: "1ч 17м",
      photo: photo6,
      isSaved: true,
    },
    {
      id: 7,
      name: "Когда я думаю о Германии ночью",
      duration: "1ч 17м",
      photo: photo7,
      isSaved: false,
    },
    {
      id: 8,
      name: "Gimme Danger: История Игги и The Stooges",
      duration: "1ч 17м",
      photo: photo8,
      isSaved: false,
    },
    {
      id: 9,
      name: "Дженис: Маленькая девочка грустит",
      duration: "1ч 17м",
      photo: photo9,
      isSaved: false,
    },
    {
      id: 10,
      name: "Соберись перед прыжком",
      duration: "1ч 17м",
      photo: photo10,
      isSaved: false,
    },
    {
      id: 11,
      name: "Пи Джей Харви: A dog called money",
      duration: "1ч 17м",
      photo: photo11,
      isSaved: false,
    },
    {
      id: 12,
      name: "По волнам: Искусство звука в кино",
      duration: "1ч 17м",
      photo: photo12,
      isSaved: false,
    },
  ];
  return (
    <>
      <Header isBlue={false} isLoggedIn={true} />
      <main className="main">
        <SearchForm />
        <MoviesCardList moviesArray={moviesArray} />
        <MoreButton moviesArray={moviesArray} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
