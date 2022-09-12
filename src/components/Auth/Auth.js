import { Link } from 'react-router-dom';
import './Auth.css'

const Auth = () => {
  return (
    <div className="auth">
      <Link to="/signin" className="auth__link">Регистрация</Link>
      <Link to="/signup" className="auth__link auth__link_bgcolor-green">Войти</Link>
    </div>
  )
}

export default Auth;
