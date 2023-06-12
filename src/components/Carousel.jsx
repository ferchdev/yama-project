import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  index,
  setIndex,
}) {
  const prev = () =>
    setIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  const next = () =>
    setIndex((index) => (index === slides.length - 1 ? 0 : index + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides}
      </div>
      <div className="mx-auto w-fit lg:w-auto lg:mx-0 lg:float-right mt-3 [&>button]:transition-all [&>button]:duration-300">
        <button
          className="border border-[#585f6d] text-[#585f6d] px-9 py-1 cursor-pointer hover:text-[#f58127]"
          onClick={() => prev()}
        >
          <BsArrowLeft size={40} />
        </button>
        <button
          className="border border-[#585f6d] text-[#585f6d] border-s-0 px-9 py-1 cursor-pointer hover:text-[#f58127]"
          onClick={() => next()}
        >
          <BsArrowRight size={40} />
        </button>
      </div>
    </div>
  );
}
