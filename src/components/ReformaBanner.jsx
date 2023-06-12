import insurgentes from "../assets/images/insurgentes-reforma1.jpg";
import m2 from "../assets/icons/m2.png";
import bed from "../assets/icons/habitacion.png";
import toilet from "../assets/icons/toilet.png";
import tour from "../assets/icons/360-grados.png";
export const ReformaBanner = () => {
  return (
    <section className="reforma-banner pt-[80px] w-[90%] sm:w-[95%] mx-auto max-w-[1366px]">
      <div
        className="flex flex-col sm:flex-row gap-10 sm:gap-5 md:gap-8 text-2xl sm:text-3xl justify-center items-start sm:items-center tracking-widest [&>p]:text-[#2e2e2e] font-normal [&>p]:flex [&>p]:items-center [&>p]:justify-center"
        data-aos="zoom-in"
      >
        <p>
          <img
            src={m2}
            alt="imagen de metro cuadrado"
            className="me-3"
          />
          Desde 80m<sup>2</sup>
        </p>
        <p>
          <img
            src={bed}
            alt="imagen de metro habitacion"
            className="me-3"
          />
          1 - 2
        </p>
        <p>
          <img src={toilet} className="me-3 w-[48px]" />2 -
          4
        </p>
      </div>
      <div className="lg:flex pt-[80px] gap-10 justify-center">
        <div
          className="lg:h-[500px] xl:h-[400px] lg:w-[55%]"
          data-aos="fade-right"
        >
          <img
            src={insurgentes}
            alt="fotografia de edificio Yama ubicado en Insurgentes"
            className="h-full w-full"
          ></img>
        </div>
        <div
          className="w-[100%] sm:w-[90%] mx-auto lg:mx-0 lg:w-[40%] mt-[50px] lg:mt-0 font-medium tracking-wider"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 className="text-[#f58127] text-center lg:text-start text-2xl sm:text-3xl font-semibold tracking-wide">
            YAMA INSURGENTES REFORMA
          </h1>
          <p className="text-xl mt-[25px] text-justify text-[#2e2e2e] leading-tight">
            Yama Insurgentes Reforma cuenta con dos accesos vehiculares, tres
            accesos peatonales y uno para proveedores, distribuidos a lo largo
            de tres fachadas; la entrada principal se encuentra ubicada en
            Avenida Insurgentes y las dos entradas secundarias en las calles de
            Londres y Nápoles, permitiendo una circulación única dentro de la
            zona.
          </p>
          <button className="w-full bg-[#2e2e2e] text-[#f58127]  tracking-widest text-xl font-normal py-2 flex items-center justify-center gap-4 mt-[35px]  hover:bg-[#242424] transition-all duration-300">
            <img src={tour} className="w-[45px]" />
            <span className="text-white">Tour 360°</span>
          </button>
        </div>
      </div>
    </section>
  );
};
