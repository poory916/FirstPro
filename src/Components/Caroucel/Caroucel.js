import React from "react";
import manPhoto from "../../assets/images/stock-photo-happy-man-holding-dollars-laptop-removebg-preview.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Caroucel.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: "10px",
        width: "30px",
        height: "30px",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        left: "10px",
        width: "30px",
        height: "30px",
        zIndex: "2",
      }}
      onClick={onClick}
    />
  );
};

function Caroucel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mySlider">
      <Slider {...settings}>
        <div>
          <img className="img-fluid" src={manPhoto} />
        </div>
        <div>
          <img className="img-fluid" src={manPhoto} />
        </div>
      </Slider>
    </div>
  );
}

export default Caroucel;
