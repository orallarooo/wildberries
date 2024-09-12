import "./BottomMenu.css"

import home_img from "./img/home.svg"
import search_img from "./img/search.svg"
import basket_img from "./img/basket.svg"
import like_img from "./img/like.svg"
import personal_img from "./img/personal.svg"

const BottomMenu = () => {
      return ( 
            <div className="bottom-menu">
                  <a href="#">
                        <img src={home_img} alt="" />
                  </a>
                  <a href="#">
                        <img src={search_img} alt="" />
                  </a>
                  <a href="#">
                        <img src={basket_img} alt="" />
                  </a>
                  <a href="#">
                        <img  className="bottom-menu__like-img" src={like_img} alt="" />
                  </a>
                  <a href="#">
                        <img src={personal_img} alt="" />
                  </a>
            </div>
      );
}
 
export default BottomMenu;