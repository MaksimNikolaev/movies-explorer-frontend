import useValidationForms from '../../hooks/useValidationForms';
import Form from "../Form/Form";
import "./Login.css";

const Register = () => {
  const { handleChange, errors, isValid } = useValidationForms();
  const spanErrorClassName = `${!isValid && "form__input-error"}`;

  return (
    <div className="main">
      <section className="login">
        <Form id='login'  title='Рады видеть!' text='Ещё не зарегистрированы?' link='/signup' textLink='Регистрация'>         
            <label htmlFor="form__email" className="form__label">
              E&#8209;mail
            </label>
            <input
              type="email"
              id="form__email"
              className={`form__input ${errors.email && "form__input_type_error"}`}
              defaultValue="pochta@yandex.ru"
              placeholder="Введите почту"
              name="email"
              onChange={handleChange}
              required
            ></input>
            <div className="form__errors">
              <span id="email-error" className={spanErrorClassName}>{errors.email}</span>
            </div> 
            <label htmlFor="form__password" className="form__label">
              Пароль
            </label>
            <input
              type="password"
              id="form__password"
              className={`form__input ${errors.password && "form__input_type_error"}`}
              placeholder="Введите пароль"
              name="password"
              onChange={handleChange}
              required
            ></input>
            <div className="form__errors">
              <span id="password-error" className={spanErrorClassName}>{errors.password}</span>
            </div> 
            <button type="submit" className="form__button">
              Войти
            </button>
          </Form>          
      </section>
    </div>
  );
};

export default Register;