export const HomeBanner = () => {
  return (
    <section className="HomeBanner w-full h-[100vh] relative overflow-hidden">
      <div className="w-full h-full bg-principal-banner bg-center bg-no-repeat bg-cover" data-aos="zoom-out">
      <h1
          className="principal-banner__h1 text-white text-[35px] text-start sm:text-[55px] font-semibold w-[80%] sm:w-[480px] absolute bottom-[35vh] left-4 sm:left-[40px] md:left-[80px] tracking-widest"
          data-aos="fade-right"
        >
          INSURGENTES REFORMA
        </h1>
        </div>
    </section>
  );
};
