import Logo from '../Logo/Logo';
import Auth from '../Auth/Auth';
import Navigation from '../Navigation/Navigation'
import './Header.css';

const Header = ({isBlue, loggedIn}) => {
  const isBgColorBlue = (`header ${isBlue ? 'header_bgcolor_blue' : 'header_bgcolor_white'}` );
  return (
    <header className={isBgColorBlue}>
      <div className="header__container">
        <Logo />
        {loggedIn 
          ? 
          <Navigation /> 
          : 
          <Auth />}
      </div>
    </header>
  );
}

export default Header;
