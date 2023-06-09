import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.svg";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
export const Header = () => {
  const degradedRef1 = useRef();
  const degradedRef2 = useRef();
  const arrowRef1 = useRef();
  const arrowRef2 = useRef();
  const handleOnMouseover = (ref1, ref2) => {
    ref1.current.classList.remove("opacity-0");
    ref2.current.classList.add("rotate-180");
  };

  const handleOnMouseleave = (ref1, ref2) => {
    ref1.current.classList.add("opacity-0");
    ref2.current.classList.remove("rotate-180");
  };
  return (
    <header
      className="w-full bg-primary h-[80px] fixed z-[999999999999]"
      data-aos="fade-down"
    >
      <nav className="w-[95%] h-full mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt="Logo de Renta de Autos"
          className="w-[160px]"
        ></img>
        <div className="flex gap-5 text-white text-xl font-light tracking-wider h-full items-center">
          <ul className="text-white hidden lg:flex h-full">
            <li
              className="borderNav px-7"
              onMouseOver={() => handleOnMouseover(degradedRef1, arrowRef1)}
              onMouseLeave={() => handleOnMouseleave(degradedRef1, arrowRef1)}
            >
              <a href="#" className="h-full flex items-center">
                Corporativo{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-[#e08637] ms-3 transition-all duration-500"
                  ref={arrowRef1}
                />
              </a>
            </li>
            <span className="w-[2px] bg-nav relative">
              <span
                className="w-[2px] absolute top-0 h-full bg-bordercolor opacity-0 transition-all duration-500"
                ref={degradedRef1}
              ></span>
            </span>
            <li className="borderNav px-7 ">
              <a
                href="#"
                className="h-full flex items-center"
                onMouseOver={() => handleOnMouseover(degradedRef2, arrowRef2)}
                onMouseLeave={() => handleOnMouseleave(degradedRef2, arrowRef2)}
              >
                Residencial{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-[#e08637] ms-3 transition-all duration-500"
                  ref={arrowRef2}
                />
              </a>
            </li>
            <span className="w-[2px] bg-nav relative">
              <span
                className="w-[2px] absolute top-0 h-full bg-bordercolor opacity-0 transition-all duration-500"
                ref={degradedRef2}
              ></span>
            </span>
            <li className="px-7 flex items-center">
              <a href="#" className="h-full flex items-center">
                Promociones
              </a>
            </li>
          </ul>
          <a
            className="h-[65%]  flex justify-center items-center px-4 rounded-md bg-[#161b24] text-[#e08637] hover:bg-[#e08637] hover:text-[#161b24] transition-all duration-300"
            href="#"
          >
            <span className="text-white">Menu</span>
            <FontAwesomeIcon icon={faBars} className="ms-3" />
          </a>
        </div>
      </nav>
    </header>
  );
};
