import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../images/tclogo.jpg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header-bar">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="scrolling-text">{t('welcome')}</h1>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('km')}>KH</button>
      </div>
    </div>
  );
};

export default Header;
