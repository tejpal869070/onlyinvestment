import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/photos/casino1.jpg";
import banner2 from "../../assets/photos/casino2.jpg";
import banner3 from "../../assets/photos/casino3.jpg";
import banner4 from "../../assets/photos/casino4.jpg";
import banner5 from "../../assets/photos/casino5.jpg";
import banner6 from "../../assets/photos/casino6.jpg";

const images = [banner1, banner2, banner3, banner4, banner5, banner6];

export default function GamesSlider() {
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-10 mx-4">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div className="w-full h-30 overflow-hidden gap-4" key={index}>
            <img
              alt="side"
              className="w-full lg:w-[90%] rounded-lg   border-2 border-gray-500 h-[140px] object-cover"
              src={item}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
