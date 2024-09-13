import React, { useState } from "react";

import "./Header.css"

import logo_img from "./img/logoWb.svg"



const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu  = () => {
           setIsOpen((open) => !open);
      }

      return ( 
            <header className="header">
                  <div className="header__container">
                        <a href="#" className="logo">
                              <img src={logo_img} alt="" />
                        </a>
                        <button aria-label="Меню" onClick={toggleMenu} className={`header-burger-btn ${isOpen ? "is_active" : ""}`}>
                              <span></span>
                              <span></span>
                              <span></span>
                        </button>
                        <div className="header__search-bar">
                              <input type="search" placeholder="Найти на Wildberries"/>
                              <div className="header__search-bar-photo">
                              </div>
                        </div>
                        <div className="header__left">
                              <a href="#" className="header__left-box">
                                    <div className="header__left-img location-img"></div>
                                    <p>Адреса</p>
                              </a>
                              <a href="#" className="header__left-box">
                                    <div className="header__left-img profile-img"></div>
                                    <p>Войти</p>
                              </a>
                              <a href="#" className="header__left-box">
                                    <div className="header__left-img basket-img"></div>
                                    <p>Корзина</p>
                              </a>
                        </div>
                  </div>
            </header>
      );
}
 
export default Header;