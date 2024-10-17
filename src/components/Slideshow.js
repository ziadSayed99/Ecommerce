import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
// import "../craousel.css";
import { Slide } from "react-slideshow-image";
import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";

const Slideshow = () => {
  const scrollToRef = React.useRef(null);
  //
  const handleClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    // {
    //   src: img1,
    //   alt: "img1",
    // },
    {
      src: img2,
      alt: "img2",
    },
    {
      src: img3,
      alt: "img3",
    },
  ];

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "800px",
  };

  return (
    <div className="slide-container">
      <Slide>
        {images.map((slideImage, index) => (
          <div key={index} className="relative">
            <div
              className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-start px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16"
              style={{ ...divStyle, backgroundImage: `url(${slideImage.src})` }}
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 mt-14">
                Summer styles are finally here
              </h1>
              <p
                className="text-base lg:text-lg xl:text-xl text-black mb-6 opacity-75"
                style={spanStyle}
              >
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
              <button
                onClick={handleClick}
                className="slider-btn text-white bg-black py-2 px-8 rounded hover:bg-white hover:text-black hover:border-black border border-black transition duration-300"
              >
                Shop Collection
              </button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
