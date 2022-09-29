import { Link } from "react-router-dom";
import useValidationForms from '../../hooks/useValidationForms';
import Logo from "../Logo/Logo";
import "./Register.css";

const Register = () => {
  const { handleChange, errors, isValid } = useValidationForms();
  const spanErrorClassName = `${!isValid && "register__input-error"}`;
  return (
    <div className="main">
      <section className="register">
        <div className="register__container">
          <Logo />
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form" method="post">
            <label htmlFor="register__name" className="register__label">
              Имя
            </label>
            <input
              type="text"
              id="register__name"
              className={`register__input ${errors.name && "register__input_type_error"}`}
              defaultValue="Виталий"
              placeholder="Введите имя"
              name="name"
              minLength={2}
              maxLength={40}
              onChange={handleChange}
              required
            ></input>
            <div className="register__errors">
              <span id="name-error" className={spanErrorClassName}>{errors.name}</span>
            </div>            
            <label htmlFor="register__email" className="register__label">
              E&#8209;mail
            </label>
            <input
              type="email"
              id="register__email"
              className={`register__input ${errors.email && "register__input_type_error"}`}
              defaultValue="pochta@yandex.ru"
              placeholder="Введите почту"
              name="email"
              onChange={handleChange}
              required
            ></input>
            <div className="register__errors">
              <span id="email-error" className={spanErrorClassName}>{errors.email}</span>
            </div> 
            <label htmlFor="register__password" className="register__label">
              Пароль
            </label>
            <input
              type="password"
              id="register__password"
              className={`register__input ${errors.password && "register__input_type_error"}`}
              placeholder="Введите пароль"
              name="password"
              onChange={handleChange}
              required
            ></input>
            <div className="register__errors">
              <span id="password-error" className={spanErrorClassName}>{errors.password}</span>
            </div> 
            <button type="submit" className="register__button">
              Зарегистрироваться
            </button>
          </form>
          <p className="register__login">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="register__link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
