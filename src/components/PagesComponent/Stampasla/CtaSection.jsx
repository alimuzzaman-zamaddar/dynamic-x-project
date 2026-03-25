import React from "react";
import img from "../../../assets/img/stampa/Image (3D Printing).png"

const CtaSection = () => {
  return (
    <section className="w-full py-5 md:py-16">
      <div className="container-main">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="w-full">

            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
              Pronto a Stampare?
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-[160%] mb-6">
      Trasforma le tue idee in realtà con la precisione della stampa 3D SLA. Il nostro team è pronto a guidarti, offrendo consulenza esperta e un processo di produzione rapido per garantirti risultati impeccabili.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Primary Button */}
              <button className="px-6 py-4 rounded-full bg-black text-white font-medium text-sm md:text-base hover:bg-transparent hover:text-black border border-black transition-all duration-300">
                Carica il tuo file
              </button>

              {/* Secondary Button */}
              <button className="px-6 py-4 rounded-full border border-black text-black font-medium text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300">
                Richiedi una consulenza
              </button>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src={img}
              alt="Drone"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaSection;