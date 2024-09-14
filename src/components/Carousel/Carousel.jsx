import React from "react";
import Slider from "react-slick";

import "./Carousel.css"

import slider_img from "./img/uhnydazha_2880_1.webp"
import slider_img_2 from "./img/del_2880_uz.webp"


function SampleNextArrow(props) {
      const { className, style, onClick } = props;
            return (
            <div
                  className={className}
                  style={{ ...style, display: "block", background: "red" }}
                  onClick={onClick}
            />
            );
      }
    
      function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
            <div
                  className={className}
                  style={{ ...style, display: "block", background: "green" }}
                  onClick={onClick}
            />
            );
      }

export default function SimpleSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
      <div className="slider-container">
            <Slider {...settings} className="slider">
                  <div className="slider__box" >
                        <img src={slider_img} alt="" />
                  </div>
                  <div className="slider__box">
                        <img src={slider_img_2} alt="" />
                  </div>
                  <div className="slider__box">
                        <img src={slider_img} alt="" />
                  </div>
                  <div className="slider__box">
                        <img src={slider_img_2} alt="" />
                  </div>
            </Slider>
    </div>
  );
}