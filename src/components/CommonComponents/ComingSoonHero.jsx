import React from "react";
import { ArrowBlack } from "../SvgContainer/SvgContainer";
import hero_video from "../../assets/videos/recording mountain top.mp4";

const ComingSoonHero = () => {
  return (
    <section className="relative h-[832px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={hero_video}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container h-full w-full flex flex-col items-center justify-center  ">
        <div className="flex flex-col gap-y-10 items-center max-w-[719px] ">
          <div className="flex flex-col gap-y-6 items-center ">
            <h2 className="text-[73px] font-normal text-white ">
              {" "}
              Coming Soon{" "}
            </h2>
            <span className="text-white opacity-64 font-light leading-[133%] text-2xl text-center  " >
              Unleashing the future of 3D printing. We’re building an experience
              you won’t want to miss. Stay tuned
            </span>
          </div>
          <button
            type="button"
            className={`
        group relative
        flex items-center gap-5
        px-7 py-4
        text-[15.5px] font-medium tracking-[-0.01em]
        text-neutral-900
        bg-white
        border border-white/40
        rounded-full
        overflow-hidden
        transition-all duration-500 ease-out
        hover:bg-transparent hover:text-white
        hover:border-white/70
        active:scale-[0.98]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 cursor-pointer focus-visible:outline-offset-2
      `}
          >
            <span
              className={`
          relative transition-all mr-[40px] duration-500 ease-out
          group-hover:translate-x-0.5
        `}
            >
              Be part of the launch
            </span>

            <div
              className={`
          absolute right-1.5 top-1/2 -translate-y-1/2
          flex size-11 items-center justify-center rounded-full
          bg-neutral-900 text-white
          transition-all duration-500 ease-out
          group-hover:bg-transparent group-hover:scale-110 group-hover:rotate-[135deg]
        `}
            >
              <ArrowBlack className="size-5 transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div
              className={`
          absolute inset-0 rounded-full
          bg-gradient-to-r from-white/0 via-white/10 to-white/0
          opacity-0 -translate-x-full
          transition-all duration-700 ease-out
          group-hover:opacity-100 group-hover:translate-x-full
        `}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonHero;
