import React, { useRef, useState } from "react";
import Container from "../../../shared/Container";

const CARD_GAP = 16;
const CARD_WIDTH = 260;

const Services = ({ data }) => {
  // 👇 filter out null/incomplete cards from API
  const cards = (data?.cards || []).filter((c) => c.title && c.image_url);

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const maxIndex = cards.length - 1;

  const handlePrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  const translateX = activeIndex * (CARD_WIDTH + CARD_GAP);

  return (
    <section id="services" className="h-auto w-full xl:pb-25 pb-10">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-6">Servizi</h2>

        <div className="relative overflow-hidden">
          <ul
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {cards.map((card, idx) => {
              const isActive = idx === activeIndex;
              return (
                <li
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  {isActive ? (
                    <div className="bg-black rounded-2xl flex flex-col h-full">
                      <img
                        src={card.image_url}        // 👈 from API
                        alt={card.title}
                        className="w-full object-cover rounded-2xl p-6"
                        style={{ height: "180px" }}
                      />
                      <div className="p-5 flex flex-col gap-y-2">
                        <h5 className="text-lg font-semibold text-white leading-snug">
                          {card.title}              {/* 👈 from API */}
                        </h5>
                        <p className="text-sm text-white opacity-70 font-medium">
                          {card.subtitle}           {/* 👈 from API */}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-y-3 h-full">
                      <img
                        src={card.image_url}
                        alt={card.title}
                        className="w-full object-cover rounded-2xl"
                        style={{ height: "180px" }}
                      />
                      <div className="px-1 flex flex-col gap-y-2">
                        <h5 className="text-base font-semibold text-black leading-snug">
                          {card.title}
                        </h5>
                        <p className="text-sm text-black opacity-60 font-medium">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 cursor-pointer rounded-full border-2 border-gray-600 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            className="w-10 h-10 cursor-pointer rounded-full border-2 border-gray-600 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Services;