import { useEffect, useState } from "react";
import "./SearchForm.css";

const SearchForm = ({handleSearchSubmit, shortFilmStatus, handleChangeCheckbox}) => {
  const [inputSearch, setInputSearch] = useState("");
  const [errorsSearch, setErrorsSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("RequestText")) {
      setInputSearch(localStorage.getItem("RequestText"))
    }
  }, []);

  function handleChangeInput(e) {
    setInputSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
      if (inputSearch === "") {
        setErrorsSearch("Нужно ввести ключевое слово");
      } else {
        setErrorsSearch("");
        handleSearchSubmit(inputSearch);
      }
  }

  return (
    <section className="search">
      <form className="search__form" method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__name"
          placeholder="Фильм"
          onChange={handleChangeInput}
          value={inputSearch || ""}
        ></input>
        <div className="search__error">
          <span className="search__input-error">{errorsSearch}</span>
        </div>        
        <button type="submit" className="search__btn">
          Найти
        </button>
        <label className="search__checkbox-container">
          <input type="checkbox" id="search__checkbox" checked={shortFilmStatus} onChange={handleChangeCheckbox}/>
          <span className="search__checkbox-span"></span>
          <label htmlFor="search__checkbox" className="search__label">
            Короткометражки
          </label>
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
