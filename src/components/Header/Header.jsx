import React, { useState, useEffect } from "react";

import "./Header.css"

import logo_img from "./img/logoWb.svg"
import OverlayMenu from "../OverlayMenu/OverlayMenu";
import OverlayBackground from "../OverlayBackground/OverlayBackground"

import home_img from "./img/bm-home.svg"
import search_img from "./img/bm-search.svg"
import basket_img from "./img/bm-basket.svg"
import like_img from "./img/bm-like.svg"
import personal_img from "./img/bm-personal.svg"


const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      
      const toggleMenu  = () => {
           setIsOpen((open) => !open);
      }

      useEffect(() => {
            if (isOpen) {
                  document.getElementsByTagName("body")[0].classList.add("lock");
            }  else {
                  document.getElementsByTagName("body")[0].classList.remove("lock");
            }
            
      }, [isOpen]);

      return ( 
            <header className={`header ${isOpen ? "active" : ""}`}>
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
                  <OverlayMenu isOpen={isOpen}/>
                  <OverlayBackground  isOpen={isOpen}/>

                  <div className="bottom-menu">
                        <a href="#">
                              <img src={home_img} alt="" />
                        </a>
                        <a href="#"  onClick={toggleMenu}>
                              <img src={search_img} alt="" />
                        </a>
                        <a href="#">
                              <img className="bottom-menu__basket-img" src={basket_img} alt="" />
                        </a>
                        <a href="#">
                              <img  className="bottom-menu__like-img" src={like_img} alt="" />
                        </a>
                        <a href="#">
                              <img src={personal_img} alt="" />
                        </a>
                  </div>
            </header>
      );
}
 
export default Header;