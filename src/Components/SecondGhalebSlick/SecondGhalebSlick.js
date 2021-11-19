import React from "react";
import Slider from "react-slick";
import molla from "../../assets/images/molla.svg";
import SlickImage from "../SlickImage/SlickImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecondGhalebSlick.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
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

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "transparent",
//         left: "10px",
//         width: "30px",
//         height: "30px",
//         zIndex: "2",
//       }}
//       onClick={onClick}
//     />
//   );
// };

function SecondGhalebSlick() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="secondGhalebSlick">
      <Slider {...settings}>
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
        <SlickImage image={molla} />
      </Slider>
    </div>
  );
}

export default SecondGhalebSlick;
