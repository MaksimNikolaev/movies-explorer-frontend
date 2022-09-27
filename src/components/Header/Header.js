import Logo from '../Logo/Logo';
import Auth from '../Auth/Auth';
import Navigation from '../Navigation/Navigation'
import './Header.css';
import { useState } from "react";

const Header = ({isBlue, isLoggedIn}) => {
  const isBgColorBlue = (`header ${isBlue && 'header_bgcolor_blue'}` );
  return (
    <header className={isBgColorBlue}>
      <div className="header__container">
        <Logo />
        {isLoggedIn 
          ? 
          <Navigation/> 
          : 
          <Auth />}
      </div>
    </header>
  );
}

export default Header;
