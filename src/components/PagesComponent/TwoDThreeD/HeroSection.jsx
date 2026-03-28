import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
  const btnBase = "h-[60px] cursor-pointer w-full sm:w-auto px-8 rounded-full font-medium uppercase text-sm tracking-wide whitespace-nowrap flex items-center justify-center transition-all duration-300 border";
  return (
    // section class for global padding
    <section className="section bg-white text-primary-black font-family-inter pt-10 pb-16">
      {/* container-main for standard content max-width (1040px) and centering */}
      <div className="container-main flex flex-col gap-10">

        {/* Main Content Area: Vertically aligned title and description */}
        <div className="">

          {/* Main Title: Large, bold text, scaled down for mobile */}
          <h1 className="section-title">
            Trasforma le Tue Idee in Realtà:Trasforma le Tue Idee in Realtà:
          </h1>

          {/* Description Tagline: Smaller, gray text scaled proportionally */}
          <p className="item-description">
            Carica un file, ottieni un oggetto. La stampa 3D non è mai stata così semplice.
          </p>
        </div>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">

          {/* SCOPRI DI PIÙ: Solid -> Outlined on Hover */}
          <button className={`${btnBase} bg-[#1a1411] text-white border-[#1a1411] hover:bg-transparent hover:text-primary-black`}>
            Scopri di Più
          </button>

          {/* ISCRIVITI AGLI AGGIORNAMENTI: Outlined -> Solid on Hover */}
          <Link to={"/upload-design"}>
            <button className={`${btnBase} bg-transparent text-primary-black border-primary-black hover:bg-[#1a1411] hover:text-white hover:border-[#1a1411]`}>
              Iscriviti agli Aggiornamenti
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;