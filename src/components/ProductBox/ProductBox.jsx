import "./ProductBox.css"

import star_img from "./img/star.svg"
import verified_img from "./img/verify.svg"
import product_img_second from "./img/1.webp"
import basket_img from "./img/basket.svg"

const ProductBox = () => {
      return ( 
            <a href="#" className="product-box">
                  <div className="product-box__img">
                        <img width="284px" height="379px" src={product_img_second} alt="" />
                        <a href="#" className="product-box__img-link">
                              <p>
                                Быстрый просмотр    
                              </p>
                        </a>
                  </div>
                  <div className="product-bottom">
                        <p className="product-box__price">
                              от   3 156 ₽
                        </p>
                        <p className="product-box__basket"> 
                              с WB кошельком
                        </p>
                        <p className="product-box__firm">
                              <img src={verified_img} alt="" />
                              UZcotton 
                              <span>  
                                    / Футболка черная одежда
                              </span>
                        </p>
                        <p className="product-box__assessment">
                              <img src={star_img} alt="" />
                              4.9 
                              <span>
                                    •  264 748 оценок
                              </span>
                        </p>
                        <a href="#" className="product-box__btn">
                              <img src={basket_img} alt="" />
                              14 сентября
                        </a>
                  </div>
            </a>
       );
}
 
export default ProductBox;