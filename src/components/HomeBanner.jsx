import banner from "../assets/banners/banner.png";

export const HomeBanner = () => {
  return (
    <section className="HomeBanner">
      <section className={`principal-banner w-[100%] h-[100vh] bg-[url(${banner})] bg-center bg-cover relative`}>
        <div className="w-[95%] mx-auto sm:ps-4">
          <h1
            className="principal-banner__h1 text-white text-[35px] text-start sm:text-[55px] font-semibold w-[80%] sm:w-[480px] absolute bottom-[35vh] tracking-widest"
            data-aos="fade-right"
          >
            INSURGENTES REFORMA
          </h1>
        </div>
      </section>
    </section>
  );
};
