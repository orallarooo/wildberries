import person_img from "./img/menu_img.svg"

import "./OverlayMenu.css"

const OverlayMenu = ({isOpen, modalRef}) => {
      return ( 
            <div ref={modalRef} className={`overlay-menu ${isOpen ? "active" : ""}`}>
                  <nav className="overlay-menu__nav">
                        <ul className="overlay-menu__items">
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Женщинам
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Обувь
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Детям
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Мужчинам
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Дом
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Красота
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Аксессуары
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Электроника
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Игрушки
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Женщинам
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Обувь
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Детям
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Мужчинам
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Дом
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Красота
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Аксессуары
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Электроника
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Игрушки
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Женщинам
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Обувь
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Детям
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Мужчинам
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Дом
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Красота
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Аксессуары
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Электроника
                                    </a>
                              </li>
                              <li className="overlay-menu__item">
                                    <a href="#" className="overlay-menu__link">
                                          <img src={person_img} alt="" />
                                          Игрушки
                                    </a>
                              </li>
                        </ul>
                  </nav>
            </div>
      );
}
 
export default OverlayMenu;