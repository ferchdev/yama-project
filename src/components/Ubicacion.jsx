import mapa from "../assets/images/map.png";
export const Ubicacion = () => {
  return (
    <section className="ubicacion pt-[90px] w-[90%] mx-auto max-w-[1366px]">
      <div data-aos="fade-right">
      <p className="font-semibold tracking-wider text-2xl lg:text-4xl text-start">
        Ubicación
      </p>
      <h1 className="text-[#f58127] font-semibold tracking-wide text-2xl lg:text-4xl mb-10 text-start">
        YAMA INSURGENTES REFORMA
      </h1>
      </div>
        <div className="xl:flex gap-10" data-aos="fade-up">
          <img
            src={mapa}
            alt="imagen de mapa"
            className="w-full sm:h-[450px] object-cover"
          />
          <div className="col-span-1 text-lg lg:text-xl font-semibold tracking-wider leading-6 mt-[50px] xl:mt-0 sm:w-[60%] xl:w-auto">
            <p className="mb-5">
              Av. Insurgentes Sur 64, Juárez, Cuauhtémoc, 06600 Ciudad de
              México, CDMX, México
            </p>
            <a href="#" className="text-[#f88c2d]">
              Como llegar
            </a>
          </div>
        </div>
    </section>
  );
};
