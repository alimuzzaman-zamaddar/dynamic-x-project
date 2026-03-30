import { useNavigate } from "react-router";
import Container from "../../../shared/Container";
import React, { useRef, useState, useEffect } from "react";
import { technologies } from "../../../static_data/static.data";

const Technologies = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 360;

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section id="technologies" className="h-auto w-full xl:pb-25 pb-10">
      <Container>
        {/* Header row */}
        <div className="flex items-center justify-between pb-5">
          <h2 className="lg:text-4xl text-2xl font-semibold text-black">
            Tecnologie
          </h2>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border-2 cursor-pointer border-gray-500 flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-400 hover:bg-gray-50"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M11 13.5L6.5 9L11 4.5"
                  stroke="#111827"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border-2 cursor-pointer border-gray-600 flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-400 hover:bg-gray-50"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M7 4.5L11.5 9L7 13.5"
                  stroke="#111827"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex flex-row gap-x-5 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {technologies.map((technology, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/${technology?.title2}`)}
              className="flex flex-col lg:gap-y-5 gap-y-3 py-2 cursor-pointer flex-shrink-0 group"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={technology.bgImg}
                  className="w-[300px] lg:w-[330px] lg:h-[300px] h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  alt={technology.title}
                />
              </div>
              <div className="flex flex-col gap-y-2 max-w-[330px]">
                <h5 className="lg:text-2xl text-lg font-semibold text-black leading-[133%]">
                  {technology.title}
                </h5>
                <span className=" text-sm text-black opacity-60 font-medium">
                  {technology.short_description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div id="services" className="h-[60px]"></div>
      </Container>
    </section>
  );
};

export default Technologies;