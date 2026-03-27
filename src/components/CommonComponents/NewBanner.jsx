import React from "react";
import { Link } from "react-router";
import { ArrowBlack } from "../SvgContainer/SvgContainer";

const NewBanner = ({
  title,
  description = "",
  buttonText = "Upload Design",
  image,
  showButton = true,
}) => {
  return (
    <div
      className="w-full xl:pt-65 pt-35 xl:pb-20 pb-10 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner-content text-center px-2 sm:px-4">
        <h1 className="banner-title text-xl sm:text-2xl md:text-3xl xl:text-[36px]">
          {title}
        </h1>

        {description && (
          <p className="banner-description text-sm sm:text-base md:text-base xl:text-[16px] leading-6 sm:leading-7 md:leading-8 max-w-[90%] sm:max-w-[600px] md:max-w-[632px] mx-auto">
            {description}
          </p>
        )}

        {/* ← Only renders when showButton is true */}
        {showButton ? (
          <Link to="/upload-design">
            <button
              type="button"
              className="group relative flex items-center gap-5 px-4 md:px-7 py-4 md:py-4 text-sm md:text-[15.5px] font-medium tracking-[-0.01em] text-neutral-900 bg-white border border-white/40 rounded-full overflow-hidden transition-all duration-500 ease-out hover:bg-transparent hover:text-white hover:border-white/70 active:scale-[0.98] xl:mt-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer focus-visible:outline-offset-2"
            >
              <span className="relative transition-all mr-[40px] duration-500 ease-out group-hover:translate-x-0.5">
                {buttonText}
              </span>

              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full bg-neutral-900 text-white transition-all duration-500 ease-out group-hover:bg-transparent group-hover:scale-110 group-hover:rotate-135">
                <ArrowBlack className="size-5 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 -translate-x-full transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-full" />
            </button>
          </Link>
        ) : (
          <div className="xl:mt-10 py-4 md:py-4">
            <div className="size-11" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewBanner;