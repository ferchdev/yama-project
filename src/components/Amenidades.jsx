import Carousel from "./Carousel";
import { Border } from "./Border";
import { useState } from "react";
import { carousel_data } from "../data/carousel_data";

export const Amenidades = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="amenidades overflow-hidden pt-[90px] lg:flex gap-8 justify-center w-[90%] mx-auto max-w-[1366px]">
      <div className="lg:w-[35%] text-[#2e2e2e]">
        <p className="text-xl tracking-wider">Conoce Nuestras</p>
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-widest ">
          Amenidades
        </h1>
        <div className="pt-5 ps-3 [&>p]:flex [&>p]:h-[40px] [&>p]:items-center [&>p]:mb-[7px] [&>p]:lg:text-xl [&>p]:font-semibold [&>p]:tracking-wider [&>p]:cursor-pointer">
          {carousel_data.map((title, i) => (
            <p
              className={`hover:text-[#f68633] transition-all duration-300 ${
                index === i && "text-[#f68633]"
              }`}
              onClick={() => setIndex(i)}
              key={i}
            >
              <Border selected={index === i} />
              {title.title}
            </p>
          ))}
        </div>
      </div>
      <div className="lg:w-[60%] lg:h-[600px] mt-[80px] lg:mt-[7%]">
        <Carousel index={index} setIndex={setIndex}>
          {[
            ...carousel_data.map((s, i) => (
              <img src={s.url} key={i} className="lg:h-[420px]" />
            )),
          ]}
        </Carousel>
      </div>
    </section>
  );
};
