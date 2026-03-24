import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ArrowBlack } from "../../SvgContainer/SvgContainer";
import hero_video from "../../../assets/videos/recording mountain top.mp4";

const HomeHero = () => {
  return (
    <section id="hero" className="relative h-[750px] lg:h-[832px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={hero_video}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-[1440px] mx-auto   w-full pb-[113px] pt-[100px] sm:pt-[160px] 2xl:pt-[201px] flex px-30 flex-col-reverse gap-y-6 md:gap-y-10 xl:flex-row justify-between">
        <div className="flex flex-col gap-y-6.5 items-start">
          <h4 className=" text-xl 2xl:text-[24px] font-normal leading-[144%] text-white max-w-[626px]">
            Trasforma la tua idea in realtà. Più velocemente di quanto immagini.
          </h4>
          <div className="flex xl:flex-row flex-col xxl:gap-7 gap-3">
            <button
              type="button"
              className={`
    group relative flex items-center gap-5 px-4 md:px-7 py-4 md:py-4 text-sm md:text-[15.5px] font-normal tracking-[-0.01em] text-neutral-900 bg-white border border-white/40 rounded-full overflow-hidden transition-all duration-500 ease-out hover:bg-transparent hover:text-white hover:border-white/70
    active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer focus-visible:outline-offset-2
  `}
            >
              <span
                className={` relative transition-all mr-[40px] duration-500 ease-out group-hover:translate-x-0.5
    `}
              >
                Carica il tuo file
              </span>

              <div
                className={`
      absolute right-1.5 top-1/2 -translate-y-1/2
      flex size-11 items-center justify-center rounded-full
      bg-neutral-900 text-white
      transition-all duration-500 ease-out
      group-hover:bg-transparent group-hover:scale-110 group-hover:rotate-135
    `}
              >
                <ArrowBlack className="size-5 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div
                className={` absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 -translate-x-full transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-full`}
              />
            </button>
            <button
              type="button"
              className={`
    group relative flex items-center gap-5 px-4 md:px-7 py-4 md:py-4 text-sm md:text-[15.5px] font-normal tracking-[-0.01em] hover:text-neutral-900 hover:bg-white border hover:border-white/40 rounded-full overflow-hidden transition-all duration-500 ease-out bg-transparent text-white border-white/70
    active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer focus-visible:outline-offset-2
  `}
            >
              <span
                className={` relative transition-all mr-[40px] duration-500 ease-out group-hover:translate-x-0.5
    `}
              >
                Ottieni consulenza gratutta
              </span>

              <div
                className={`
      absolute right-1.5 top-1/2 -translate-y-1/2
      flex size-11 items-center justify-center rounded-full
      group-hover:bg-black text-white
      transition-all duration-500 ease-out
      bg-white group-hover:scale-110 group-hover:rotate-[135deg]
    `}
              >
                <FiArrowUpRight className="size-5 transition-transform duration-500 group-hover:scale-110 text-black group-hover:text-white" />
              </div>

              <div
                className={` absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 -translate-x-full transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-full`}
              />
            </button>

          </div>
        </div>

        <div className="flex mt-[300px] flex-col gap-y-6 md:gap-y-10 xl:gap-y-[40px]">
          <h3 className=" text-xl 2xl:text-[24px] text-white font-semibold leading-[123%] max-w-[640px]">
            Dal concept al prodotto finito, in modo semplice e rapido.
            Senza stampi. Senza minimi d’ordine. Senza rischi inutilli.
          </h3>
          <span className=" text-base lg:text-[18px] max-w-[650] 3xl:max-w-[650px] font-light leading-[133%] text-white opacity-70">
            Rendiamo la stampa 3D professionale accessibile a startup, innovatori e azienda strutturate.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
