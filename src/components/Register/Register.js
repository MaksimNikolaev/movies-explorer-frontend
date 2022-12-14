import { Navigate } from 'react-router-dom';
import useValidationForms from '../../hooks/useValidationForms';
import { REG_EXP_EMAIL, REG_EXP_NAME } from '../../utils/constants';
import Form from "../Form/Form";
import "./Register.css";

const Register = ({handleRegister, loggedIn}) => {
  const { values, handleChange, errors, isValid } = useValidationForms();
  const spanErrorClassName = `${!isValid && "form__input-error"}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    let {name, email, password} = values;
    handleRegister(name, email, password);
  }

  if (loggedIn) {
    return <Navigate to="/movies" /> 
  } else {
    return (
      <div className="main">
        <section className="register">
          <Form id='register'  title='Добро пожаловать!' text='Уже зарегистрированы?' link='/signin' textLink='Войти' onSubmit={handleSubmit}>
            <label htmlFor="form__name" className="form__label">
                Имя
              </label>
              <input
                type="text"
                id="form__name"
                className={`form__input ${errors.name && "form__input_type_error"}`}
                placeholder="Введите имя"
                name="name"
                minLength="2"
                maxLength="30"
                pattern={REG_EXP_NAME}
                onChange={handleChange}
                required
              ></input>
              <div className="form__errors">
                <span id="name-error" className={spanErrorClassName}>{errors.name}</span>
              </div>            
              <label htmlFor="form__email" className="form__label">
                E&#8209;mail
              </label>
              <input
                type="email"
                id="form__email"
                className={`form__input ${errors.email && "form__input_type_error"}`}
                placeholder="Введите почту"
                name="email"
                pattern={REG_EXP_EMAIL}
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
                minLength="6"
                onChange={handleChange}
                required
              ></input>
              <div className="form__errors">
                <span id="password-error" className={spanErrorClassName}>{errors.password}</span>
              </div> 
              
              <button  name="button" type="submit" className='form__button' disabled={!isValid}>
                Зарегистрироваться
              </button>
            </Form>          
        </section>
      </div>
    );
  }

  
};

export default Register;
