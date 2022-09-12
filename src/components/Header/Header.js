import Logo from '../Logo/Logo';
import Auth from '../Auth/Auth';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Auth />
      </div>
    </header>
  );
}

export default Header;
