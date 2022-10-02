import "./Navigation.css";
import iconProfile from "../../images/icons/profile.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu(!showMenu);
  return (
    <nav className="navigation">
      <div
        className={`navigation__btn ${
          showMenu ? "navigation__btn_active" : ""
        }`}
        onClick={handleToggleMenu}
      >
        <span
          className={`navigation__span ${
            showMenu ? "navigation__span_active" : ""
          }`}
        ></span>
        <span
          className={`navigation__span ${
            showMenu ? "navigation__span_active" : ""
          }`}
        ></span>
        <span
          className={`navigation__span ${
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
                      : "navigation__link"
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
                      : "navigation__link"
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
                      : "navigation__link"
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
                  : "navigation__link"
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
