import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navigation.css';
import { useTranslation } from 'react-i18next';
import { MdArrowDropDown } from "react-icons/md";
import mac_logo from '../images/apple-mac-wallpaper-preview.jpg';
import asus_logo from '../images/asus_logo.png';
import dell_logo from '../images/Dell_Logo.png';
import msi_logo from '../images/msi_logo.png';
import { MdOutlineFavorite } from "react-icons/md";

const Navigation = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const { t } = useTranslation();

  const handleNavLinkClick = () => {
    if(isMobile){
      toggleMenu();
    }
  };

  return (
    <>
      <nav className="nav-bar">
        <ul className="bar">
          <li><NavLink to="/" activeClassName="active" exact onClick={handleNavLinkClick}>{t('home')}</NavLink></li>
          <li><NavLink to="/laptop" activeClassName="active" onClick={handleNavLinkClick}>{t('laptop')}</NavLink></li>
          <li><NavLink to="/monitor" activeClassName="active" onClick={handleNavLinkClick}>{t('monitor')}</NavLink></li>
              <li><NavLink to="/pc" activeClassName="active" onClick={handleNavLinkClick}>{t('pc')}</NavLink></li>
          <li className="has-dropdown">
            <a href="#1">{t('brand')}<MdArrowDropDown color='whitesmoke'/></a>
            <ul className="dropdown">
              <li><NavLink to="/macbook" onClick={handleNavLinkClick}><img src={mac_logo} alt='lg'/></NavLink></li>
              <li><NavLink to="/asus" onClick={handleNavLinkClick}><img src={asus_logo} alt='lg'/></NavLink></li>
              <li><NavLink to="/dell" onClick={handleNavLinkClick}><img src={dell_logo} alt='lg'/></NavLink></li>
              <li><NavLink to="/msi" onClick={handleNavLinkClick}><img src={msi_logo} alt='lg'/></NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/acessaries" activeClassName="active" onClick={handleNavLinkClick}>{t('acessaries')}</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active" onClick={handleNavLinkClick}>{t('contact')}</NavLink></li>
          <li><NavLink to="/about-us" activeClassName="active" onClick={handleNavLinkClick}>{t('aboutUs')}</NavLink></li>
          <li><NavLink to="/favorites" activeClassName="active" onClick={handleNavLinkClick}><MdOutlineFavorite /></NavLink></li>
        </ul>
      </nav>

      {isMobile && (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <nav className={`sidebar ${menuOpen ? 'show' : ''}`}>
            <div className="close-icon" onClick={toggleMenu}>
              &times;
            </div>
            <ul className="bar">
              <li><NavLink to="/" activeClassName="active" onClick={handleNavLinkClick}>{t('home')}</NavLink></li>
              <li><NavLink to="/laptop" activeClassName="active" onClick={handleNavLinkClick}>{t('laptop')}</NavLink></li>
              <li><NavLink to="/monitor" activeClassName="active" onClick={handleNavLinkClick}>{t('monitor')}</NavLink></li>
              <li><NavLink to="/pc" activeClassName="active" onClick={handleNavLinkClick}>{t('pc')}</NavLink></li>
              <li className="has-dropdown">
                <a href="#1">{t('brand')}</a>
                <ul className="dropdown">
                  <li><NavLink to="/macbook"  onClick={handleNavLinkClick}>{t('macbook')}</NavLink></li>
                  <li><NavLink to="/asus"  onClick={handleNavLinkClick}>{t('asus')}</NavLink></li>
                  <li><NavLink to="/dell"  onClick={handleNavLinkClick}>{t('dell')}</NavLink></li>
                  <li><NavLink to="/msi"  onClick={handleNavLinkClick}>{t('msi')}</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/acessaries" activeClassName="active" onClick={handleNavLinkClick}>{t('acessaries')}</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active"  onClick={handleNavLinkClick}>{t('contact')}</NavLink></li>
              <li><NavLink to="/about-us" activeClassName="active"  onClick={handleNavLinkClick}>{t('aboutUs')}</NavLink></li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Navigation;
