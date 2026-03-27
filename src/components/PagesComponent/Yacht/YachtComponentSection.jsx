import React from 'react';

const YachtComponentSection = () => {
  return (
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        {/* Header Block with margin bottom */}
        <div className="section-header mb-12">
          {/* section-title for uniform title style (semibold, 4xl on md) */}
          <h2 className="section-title">
            Yacht & Componenti
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description max-w-[1200px] text-primary-gray/80 mt-4">
            Progettiamo e produciamo componenti ad alte prestazioni per yacht e nautica di lusso, 
            dove ogni dettaglio deve rispondere alle sfide più severe: esposizione prolungata ai raggi UV, 
            salsedine, umidità e stress meccanico. La nostra ingegneria unisce leggerezza strutturale e 
            durabilità eccezionale, per soddisfare gli standard più esigenti del settore.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-4 mt-12 md:mt-16">
          {/* Fill Button */}
          <button className="h-[60px] cursor-pointer px-8 bg-[#E5E7EB] rounded-3xl text-black/80 font-medium uppercase text-sm tracking-wide whitespace-nowrap">
            Nautica di Lusso
          </button>
          
          {/* Outlined Buttons */}
          <button className="h-[60px] cursor-pointer px-8 bg-transparent text-primary-black font-medium border border-[#1E2939] rounded-3xl uppercase text-sm tracking-wide transition hover:bg-[#E5E7EB] whitespace-nowrap">
            Stampa 3D Avanzata
          </button>
          <button className="h-[60px] cursor-pointer px-8 bg-transparent text-primary-black font-medium border border-[#1E2939] rounded-3xl uppercase text-sm tracking-wide transition hover:bg-[#E5E7EB] whitespace-nowrap">
            Materiali Tecnici
          </button>
        </div>
      </div>
    </section>
  );
};

export default YachtComponentSection;