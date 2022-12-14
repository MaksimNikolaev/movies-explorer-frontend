import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useValidationForms from "../../hooks/useValidationForms";
import { REG_EXP_EMAIL, REG_EXP_NAME } from "../../utils/constants";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = ({ handleLogOut, handleUpdateProfile, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, setValues, setIsValid, errors } = useValidationForms();
  const [isEditProfile, setEditProfile] = useState(false);
  const spanErrorClassName = `${!isValid && "profile__error"}`;

  useEffect(() => {
    setValues(currentUser);    
  }, [currentUser]); 


  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [currentUser, values]);


  const handleButtonEdit = () => {
    setEditProfile(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(values.name, values.email);
    setEditProfile(false);
  }

  return (
    <div className="main">
      <Header isBlue={false} loggedIn={loggedIn} textColorBlack={true}/>
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        {isEditProfile ? (
          <form
            className="profile__form"
            onSubmit={handleSubmit}
          >
            <div className="profile__container">
              <p htmlFor="profile__name" className="profile__subtitle">
                Имя
              </p>
              <input
                type="text"
                id="profile__name"
                name="name"
                className="profile__value"
                placeholder="Введите имя"
                onChange={handleChange}
                value={values.name || ""}
                minLength="2"
                maxLength="30"
                pattern={REG_EXP_NAME}
                required
              ></input>
              <span id="name__error" className={spanErrorClassName}>{errors.name}</span>
            </div>                
            <div className="profile__container">
              <p htmlFor="profile__email" className="profile__subtitle">
                E&#8209;mail
              </p>
              <input
                type="email"
                id="profile__email"
                name="email"
                className="profile__value"
                value={values.email || ""}
                placeholder="Введите почту"
                onChange={handleChange}
                pattern={REG_EXP_EMAIL}
                required
              ></input>
              <span id="email__error" className={spanErrorClassName}>{errors.email}</span>
            </div>
            <button
              type="submit"
              className="profile__submit profile__submit_type_save"
              disabled={!isValid}
            >
              Сохранить
            </button>
          </form>
        ) : (
          <>
            <form className="profile__form">
              <div className="profile__container">
                <p className="profile__subtitle">Имя</p>
                <span className="profile__value">{currentUser.name}</span>
              </div>
              <div className="profile__container">
                <p className="profile__subtitle">E&#8209;mail</p>
                <span className="profile__value">{currentUser.email}</span>
              </div>
            </form>
            <button
              type="button"
              className="profile__submit profile__submit_type_edit"
              onClick={handleButtonEdit}
            >
              Редактировать
            </button>
            <button
              type="button"
              className="profile__submit profile__submit_type_exit"
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Profile;
