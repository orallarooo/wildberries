    
import React, { useState, lazy, Suspense} from 'react';

import "./Footer.css"
import Dropdown         from "../Dropdown/Dropdown";

import qr_code_img      from "./img/qr-apps.svg"
import vk_img           from "./img/vk.svg"
import ok_img           from "./img/ok.svg"
import tg_img           from "./img/tg.svg"
import youtube_img      from "./img/youtube.svg"

const Footer = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown = (index) => {
    if (index === 1) {
      setIsOpen1(!isOpen1);
    } else if (index === 2) {
      setIsOpen2(!isOpen2);
    } else if (index === 3) {
      setIsOpen3(!isOpen3);
    } else if (index === 4) {
      setIsOpen4(!isOpen4);
    }
  };
  
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top footer__top-desktop">
          <div className="footer__top-box">
            <h3>Покупателям</h3>
            <ul className="footer__top-items">
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Вопросы и ответы
                </a>
              </li>
              <li className="footer__top-item">
              <Dropdown
                title="Юридическая информация"
                items={[
                  "Правила продажи",
                  "Правила пользования торговой площадкой",
                  "Политика обработки персональных данных"
                ]}
              />
              </li>
            </ul>
          </div>
          <div className="footer__top-box">
            <h3>Продавцам и партнёрам</h3>
            <ul className="footer__top-items">
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Продавать товары
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Открыть пункт выдачи
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Предложить помещение
                </a>
              </li>
              <li className="footer__top-item">
              <Dropdown
                title="Развозить грузы"
                items={[
                  "WB drive"
                ]}
              />
              </li>
              <li className="footer__top-item">
              <Dropdown
                title="Доставлять заказы"
                items={[
                  "WB Courier"
                ]}
              />
              </li>
            </ul>
          </div>
          <div className="footer__top-box">
            <h3>Наши проекты</h3>
            <ul className="footer__top-items">
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  WH School
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  WB Guru
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  WB Stream
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__top-box">
            <h3>Компания</h3>
            <ul className="footer__top-items">
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  О нас
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Пресс-служба
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Контакты
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Вакансии
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Сообщить о мошенничестве
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__top-box">
            <img src={qr_code_img} alt="qr-code" />
          </div>
        </div>



        <div className="footer__top footer__top-mobile">

          <div className="footer__top-box">
            <h3 
            className={!isOpen1 ? "footer__top-title" : "footer__top-title active"}
            onClick={()=> toggleDropdown(1)}>Покупателям</h3>
              <ul
                className={!isOpen1 ? "footer__top-items" : "footer__top-items active"}
              >

              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Вопросы и ответы
                </a>
              </li>
              <li className="footer__top-item">
                <p>Юридическая информация</p>
                <a href="#" className="footer__top-link">
                  Правила продажи
                </a>
                <a href="#" className="footer__top-link">
                  Правила пользования торговой площадкой
                </a>
                <a href="#" className="footer__top-link">
                  Политика обработки персональных данных
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__top-box">
            <h3 
            className={!isOpen2 ? "footer__top-title" : "footer__top-title active"} 
            onClick={()=> toggleDropdown(2)}> Продавцам и партнёрам</h3>

              <ul
                className={!isOpen2 ? "footer__top-items" : "footer__top-items active"}
            >
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Продавать товары
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Открыть пункт выдачи
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  Предложить помещение
                </a>
              </li>
              <li className="footer__top-item">
                <p>Развозить грузы</p>
                <a href="#" className="footer__top-link">
                  WB drive
                </a>
              </li>
              <li className="footer__top-item">
                <p>Доставлять заказы</p>
                <a href="#" className="footer__top-link">
                  WB Courier
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__top-box">
            <h3 
            className={!isOpen3 ? "footer__top-title" : "footer__top-title active"}
            onClick={()=> toggleDropdown(3)}>Наши проекты</h3>
            
              <ul
                className={!isOpen3 ? "footer__top-items" : "footer__top-items active"}
            >
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  WH School
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  WB Guru
                </a>
              </li>
              <li className="footer__top-item">
                <a href="#" className="footer__top-link">
                  WB Stream
                </a>
              </li>
            </ul>
    
          </div>
          <div className="footer__top-box last-box">
            <h3 
            className={!isOpen4 ? "footer__top-title" : "footer__top-title active"} 
            onClick={()=> toggleDropdown(4)}>Компания</h3>

                <ul
                    className={!isOpen4 ? "footer__top-items" : "footer__top-items active"}
                    >
                  <li className="footer__top-item">
                    <a href="#" className="footer__top-link">
                      О нас
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="#" className="footer__top-link">
                      Пресс-служба
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="#" className="footer__top-link">
                      Контакты
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="#" className="footer__top-link">
                      Вакансии
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="#" className="footer__top-link">
                      Сообщить о мошенничестве
                    </a>
                  </li>
                </ul>
          </div>

          <div className="footer__apps">
            <a href="#">
              Загрузить из AppStore
            </a>
            <a href="#">
              Загрузить из Google Play
            </a>
            <a href="#">
              Загрузить из App Gallery
            </a>
            <a href="#">
              Загрузить из RuStore
            </a>
          </div>

        </div>
        
        <div className="footer__bottom">
            <div className="footer__bottom-left">
                  <p>
                        © Wildberries 2004-2024. Все права защищены.
                        Применяются  
                        <a href="#" className="footer__bottom-rights-link">
                              рекомендательные технологии.
                        </a>
                  </p>
            </div>
            <div className="footer-social__list">
                  <div className="footer-social__icon">
                        <a href="#" target="_blank" className="footer-social__icon--vk">
                          <img src={vk_img} alt="" />
                        </a>
                  </div>
                  <div className="footer-social__icon">
                        <a href="#" target="_blank" className="footer-social__icon--ok">
                          <img src={ok_img} alt="" />
                        </a>
                  </div>
                  <div className="footer-social__icon">
                        <a href="#" target="_blank" className="footer-social__icon--telegram">
                          <img src={tg_img} alt="" />
                        </a>
                  </div>
                  <div className="footer-social__icon">
                        <a href="#" target="_blank" className="footer-social__icon--youtube">
                          <img src={youtube_img} alt="" />
                        </a>
                  </div>
            </div>
        </div>
        </div>
        </footer>
      </Suspense>
  );
};

export default Footer;
