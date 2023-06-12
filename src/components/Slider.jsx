import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import slider1 from "../assets/images/slider/carousel1.png";
import slider2 from "../assets/images/slider/carousel2.jpg";
import slider3 from "../assets/images/slider/carousel3.jpg";
function Slider() {
  const slides = [
    {
      url: slider1,
    },
    {
      url: slider2,
    },
    {
      url: slider3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setTimeout(() => nextSlide(), 5000);
  }, []);
  return (
    <div className="h-[100vh] w-full relative group"  data-aos="zoom-out">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className={`w-full h-full bg-center bg-cover duration-500 relative`}
      >
        <h1
          className="principal-banner__h1 text-white text-[35px] text-start sm:text-[55px] font-semibold w-[80%] sm:w-[480px] absolute bottom-[35vh] left-4 sm:left-[40px] md:left-[80px] tracking-widest"
          data-aos="fade-right"
        >
          INSURGENTES REFORMA
        </h1>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-white cursor-pointer z-[800]">
        <button onClick={() => prevSlide()}>
          <SlArrowLeft size={30} />
        </button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-white cursor-pointer z-[800]">
        <button onClick={() => nextSlide()}>
          <SlArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
