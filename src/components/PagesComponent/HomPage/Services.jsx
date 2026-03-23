import React, { useRef, useState } from "react";
import machine from "../../../assets/img/home/service.png";
import machine1 from "../../../assets/img/home/service2.png";
import machine2 from "../../../assets/img/home/service3.png";
import machine3 from "../../../assets/img/home/service4.png";
import machine4 from "../../../assets/img/home/service5.png";
import machine5 from "../../../assets/img/home/service6.png";
import machine6 from "../../../assets/img/home/serive7.png";
import machine7 from "../../../assets/img/home/service8.png";

const techonologies = [
  {
    bgImg: machine4,
    title: "Stampa 3D Professionale",
    description:
      "Produzione additiva ad alta precisione per componenti funzionali e industriali.",
  },
  {
    bgImg: machine,
    title: "Prototipazione Rapida",
    description:
      "Trasforma rapidamente le tue idee in prototipi fisici testabili.",
  },
  {
    bgImg: machine1,
    title: "Produzione Piccoli Lotti",
    description: "Produzione flessibile e conveniente per serie limitate.",
  },
  {
    bgImg: machine2,
    title: "Ottimizzazione DFAM",
    description:
      "Progettazione ottimizzata per sfruttare al massimo la stampa 3D.",
  },
  {
    bgImg: machine3,
    title: "Scansioni 3D",
    description:
      "Digitalizzazione precisa di oggetti reali per replica o modifica.",
  },
  {
    bgImg: machine4,
    title: "Modellazione 3D",
    description:
      "Creazione di modelli CAD pronti per produzione e prototipazione.",
  },
  {
    bgImg: machine5,
    title: "Conversione 2D to 3D",
    description:
      "Trasformiamo disegni tecnici in modelli tridimensionali stampabili.",
  },
  {
    bgImg: machine6,
    title: "Consulenza Tecnica",
    description:
      "Supporto ingegneristico per scegliere materiali, processi e design.",
  },
  {
    bgImg: machine7,
    title: "Ready to Order Catalogo specializzato",
    description:
      "Componenti e prodotti pronti alla stampa o all'acquisto immediato.",
  },
];

const CARD_WIDTH = 260; // px, width of each card
const CARD_GAP = 24; // px, gap between cards
const CARDS_VISIBLE = 4; // how many cards visible at once (last one partially)

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const maxIndex = techonologies.length - 1;

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Translate the slider so activeIndex card is first visible
  const translateX = activeIndex * (CARD_WIDTH + CARD_GAP);

  return (
    <section id="services" className="h-auto w-full pb-25">
      <div className="container mx-auto px-50">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-black pb-6">Servizi</h2>

        {/* Slider wrapper — overflow hidden to clip cards */}
        <div className="relative overflow-hidden">
          {/* Track */}
          <ul
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {techonologies.map((technology, idx) => {
              const isActive = idx === activeIndex;
              return (
                <li
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="shrink-0 cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  {isActive ? (
                    /* Active card — dark background, image on top, text below */
                    <div className="bg-black rounded-2xl flex flex-col h-full">
                      <img
                        src={technology.bgImg}
                        alt={technology.title}
                        className="w-full object-cover rounded-2xl p-6"
                        style={{ height: "180px" }}
                      />
                      <div className="p-5 flex flex-col gap-y-2">
                        <h5 className="text-lg font-semibold text-white leading-snug">
                          {technology.title}
                        </h5>
                        <p className="text-sm text-white opacity-70 font-medium">
                          {technology.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Inactive card — image only, no background */
                    <div className="flex flex-col gap-y-3">
                      <img
                        src={technology.bgImg}
                        alt={technology.title}
                        className="w-full object-cover rounded-2xl"
                        style={{ height: "180px" }}
                      />
                      <div className="px-1 flex flex-col gap-y-1">
                        <h5 className="text-base font-semibold text-black leading-snug">
                          {technology.title}
                        </h5>
                        <p className="text-sm text-black opacity-60 font-medium line-clamp-2">
                          {technology.description}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            className="w-10 h-10 cursor-pointer rounded-full border border-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;