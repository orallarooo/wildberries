import React, { useState, useEffect, useRef} from "react"

import "./Header.css"

import logo_img from "./img/logoWb.svg"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import OverlayBackground from "../OverlayBackground/OverlayBackground"

import home_img from "./img/bm-home.svg"
import search_img from "./img/bm-search.svg"
import basket_img from "./img/bm-basket.svg"
import like_img from "./img/bm-like.svg"
import personal_img from "./img/bm-personal.svg"


const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isFixed, setIsFixed] = useState(false);

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

      useEffect(() => {
            const handleScroll = () => {
              if (window.pageYOffset > 23) {
                setIsFixed(true);
              } else {
                setIsFixed(false);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
      }, []);

















      const modalRef = useRef(null);
      useEffect(() => {
            modalRef.current.style.top = `${isFixed ? document.querySelector('.header').offsetHeight : "auto"}px`;
      }, [isFixed]);

      const modalRefSecond = useRef(null);
      useEffect(() => {
            modalRefSecond.current.style.top = `${isFixed ? document.querySelector('.header').offsetHeight : "auto"}px`;
      }, [isFixed]);



      return ( 
            <header className={`header ${isOpen ? "active" : ""} ${isFixed ? 'fixed' : ''}`}>
                  <div className="header__container">
                        <div className={`header__top ${isFixed ? 'fixed' : ''}`}>
                              <div className="header__top-content">
                                    <a className="header__top-content-lacation" href="#">
                                          <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5385 5.34162C10.5385 7.56736 7.53919 12.3921 6.06629 14.6272C5.68463 15.2063 4.85387 15.2063 4.47221 14.6272C2.99931 12.3921 0 7.56736 0 5.34162C0 2.39153 2.35912 0 5.26925 0C8.17938 0 10.5385 2.39153 10.5385 5.34162ZM7.72821 5.34157C7.72821 6.71829 6.62728 7.83433 5.26922 7.83433C3.91116 7.83433 2.81024 6.71829 2.81024 5.34157C2.81024 3.96486 3.91116 2.84882 5.26922 2.84882C6.62728 2.84882 7.72821 3.96486 7.72821 5.34157Z" fill="white"/>
                                          </svg>
                                          Ташкент
                                    </a>
                                    <a href="#">
                                          Продавайте на Wildberries
                                    </a>
                                    <a href="#">
                                          Работа в Wildberries
                                    </a>
                              </div>
                              <div className="header__top-language-box">
                                    <p>RUB</p>
                              </div>
                        </div>
                        <div className="header__bottom">
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
                  </div>





                  <OverlayBackground  isOpen={isOpen} modalRef={modalRefSecond}/>
                  <OverlayMenu        isOpen={isOpen} modalRef={modalRef}/>
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