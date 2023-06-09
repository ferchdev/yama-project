import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BottomBar = () => {
  return (
    <section
      className="bottom-bar fixed flex flex-col gap-1 bottom-[25px] text-white w-fit left-0 right-0 mx-auto"
      data-aos="fade-up"
    >
      <span className="bg-[#181d27d5] px-5 py-1 rounded-lg text-xs w-fit">
        Venta / Renta
      </span>
      <div className="bar flex gap-4 bg-[#181d27d5] p-2 h-auto w-auto rounded-xl text-xs tracking-widest">
        <a
          href="#"
          className="w-[145px] h-[58px] bg-[#df7925] rounded-xl justify-center items-center hover:bg-[#d46e1b] transition-[background] duration-300 hidden sm:flex"
        >
          Agendar cita
        </a>
        <div className="flex gap-3 sm:gap-4 bg-[#181d27] py-[4px] px-4 rounded-xl h-[58px] w-[290px] sm:h-auto sm:w-auto">
          <span className="flex justify-center items-center">Contacto:</span>
          <a
            href="#"
            className="h-[98%] px-3 border rounded-lg border-[#563b28] flex justify-center items-center hover:bg-[#d46e1b]  hover:border-[#d46e1b] hover:text-[#181d27] hover:translate-y-[-15px] transition-all duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
          </a>
          <a
            href="#"
            className="h-[98%] px-3 border rounded-lg border-[#563b28] flex justify-center items-center hover:bg-[#d46e1b] hover:border-[#d46e1b] hover:text-[#181d27] hover:translate-y-[-15px] transition-all duration-300"
          >
            <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          </a>
          <a
            href="#"
            className="h-[98%] px-3 border rounded-lg border-[#563b28] flex justify-center items-center hover:bg-[#d46e1b] hover:border-[#d46e1b] hover:text-[#181d27] hover:translate-y-[-15px] transition-all duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </a>
          <a
            href="#"
            className="h-[98%] px-3 border rounded-lg border-[#563b28] justify-center items-center hover:bg-[#d46e1b] transition-[all] duration-300 hidden md:flex"
          >
            Brochure
          </a>
          <a
            href="#"
            className="h-[98%] px-3 border rounded-lg border-[#563b28] justify-center items-center hover:bg-[#d46e1b] transition-[all] duration-300 hidden md:flex"
          >
            Disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
};