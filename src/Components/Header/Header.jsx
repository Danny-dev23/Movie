import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from "../../image/logo.png";
import "./header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className='header'>
      <div className="logo">
        <img className='logo__img' src={LogoImg} alt="Логотип" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuActive ? 'х' : '='}
      </button>
      <nav className={`header-nav ${menuActive ? 'active' : ''}`}>
        <Link className='header-nav__link' to="/">Главная</Link> 
        <Link className='header-nav__link' to="/kino">Фильмы</Link> 
        <Link className='header-nav__link' to="/about">О нас</Link> 
        <Link className='header-nav__link' to="/contacts">Контакты</Link> 
      </nav>
    </header>
  );
};

export default Header;
