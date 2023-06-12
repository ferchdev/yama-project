import { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BottomBar } from "./BottomBar";
export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  var options = {
    root: null,
    rootMargin: "0px",
  };
  const handleIntersect = (entry) => {
    if (entry[0].isIntersecting) setIsVisible(true);
    else setIsVisible(false);
  };
  const observer = new IntersectionObserver(handleIntersect, options);

  useEffect(() => {
    observer.observe(document.getElementById("footer"));
  }, []);
  return (
    <>
      <footer
        className="footer relative overflow-hidden mt-[60px] pt-7 pb-2 bg-primary text-white flex flex-col gap-12 md:flex-row lg:flex-col px-8 lg:px-0 justify-between lg:justify-center lg:gap-7 items-center z-[999999999999999999999999999]"
        id="footer"
        data-aos="zoom-in"
      >
        <img
          src="src/assets/icons/logo.png"
          className=" w-[120px] lg:w-[80px] z-[20]"
        />
        <ul className="text-center  text-xl flex flex-col gap-4 md:text-start lg:flex lg:flex-row md:grid md:grid-cols-2 md:text-lg tracking-wider md:gap-x-16 md:gap-y-2 md:lg:gap-7 z-[20]">
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Inicio</a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Corporativo</a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Residencial</a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Club Yama</a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Promociones</a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Certificaciones</a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="flex gap-3 text-3xl lg:text-base z-[20]">
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">
              <FiInstagram />
            </a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">
              <BsYoutube />
            </a>
          </li>
          <li className="hover:text-[#f47f21] transition-all duration-300">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
        <img src="src/assets/icons/logo2.png" className="hidden lg:block absolute top-0 left-0 z-[1] w-[320px]"/>
      </footer>
      <BottomBar hidden={isVisible} />
    </>
  );
};
