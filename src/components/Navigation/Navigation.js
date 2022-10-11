import "./Navigation.css";
import iconProfile from "../../images/icons/profile.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navigation = ({isBlue, textColorBlack}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu(!showMenu);
  let textBlack = `${textColorBlack ? 'navigation__link_color_black' : 'navigation__link_color_white'}` 
  const colorBurgerBtn = `${isBlue ? 'navigation__span_color_white' : ''}`
  const [textColorBurger, setTextColorBurger] = useState(textBlack);

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
    if (window.innerWidth < 1024 ) {
      setTextColorBurger('navigation__link_color_black');
    } else {
      setTextColorBurger('navigation__link_color_white');
    }
  };

  return (
    <nav className="navigation">
      <div
        className={`navigation__btn ${
          showMenu ? "navigation__btn_active" : ""
        }`}
        onClick={handleToggleMenu}
      >
        <span
          className={`navigation__span ${colorBurgerBtn} ${
            showMenu ? "navigation__span_active" : ""
          }`}
        ></span>
        <span
          className={`navigation__span ${colorBurgerBtn} ${
            showMenu ? "navigation__span_active" : ""
          }`}
        ></span>
        <span
          className={`navigation__span ${colorBurgerBtn} ${
            showMenu ? "navigation__span_active" : ""
          }`}
        ></span>
      </div>
      <div
        className={`navigation__container ${
          showMenu ? "navigation__container_visible" : ""
        }`}
      >
        <div className="navigation__slider">
          <ul className="navigation__list">
            <li className="navigation__item navigation__item_visible">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "navigation__link navigation__link_active"
                      : `navigation__link ${textBlack} ${textColorBurger}`
                  }`
                }
              >
                Главная
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "navigation__link navigation__link_active"
                      : `navigation__link ${textBlack} ${textColorBurger}`
                  }`
                }
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "navigation__link navigation__link_active"
                      : `navigation__link ${textBlack} ${textColorBurger}`
                  }`
                }
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${
                isActive
                  ? "navigation__link navigation__link_active"
                  : `navigation__link ${textBlack} ${textColorBurger}`
              }`
            }
          >
            <p className="navigation__account">Аккаунт</p>
            <img
              src={iconProfile}
              alt="Иконка профиля"
              className="navigation__icon"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
