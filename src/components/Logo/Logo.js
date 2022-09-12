import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logotip } from '../../images/Logo/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo"><Logotip /></Link>
  )
}

export default Logo;
