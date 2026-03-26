import React from 'react';
import { HiOutlinePrinter } from 'react-icons/hi2';

const PrintTechnologiesSection = () => {
  const technologies = [
    {
      title: "SLA — Stereolitografia",
      description: "Tecnologia laser ad alta risoluzione per la produzione di modelli anatomici, guide chirurgiche e componenti che richiedono dettaglio superficiale estremo e tolleranze dimensionali ridottissime. Perfetta con resine biocompatibili."
    },
    {
      title: "FDM — Modellazione a Deposizione Fusa",
      description: "Tecnologia a estrusione robusta e versatile, ideale per la produzione di tutori, protesi e dispositivi funzionali in nylon tecnico. Garantisce componenti resistenti, leggeri e personalizzabili in tempi ridotti."
    }
  ];

  return (
    // section with default py-5 md:py-8 from your theme
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        {/* Header Block using section-header */}
        <div className="section-header mb-4">
          {/* section-title for uniform title style */}
          <h2 className="section-title">
            Tecnologie di Stampa Utilizzate
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description mt-6">
            Selezioniamo la tecnologia di stampa più adatta in base alla tipologia di dispositivo, al materiale richiesto e al livello di precisione necessario. Ogni processo produttivo è ottimizzato per garantire risultati clinicamente affidabili.
          </p>
        </div>

        {/* Gray Feature Box: 2-column flexbox with split background on desktop */}
        <div className="relative ">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 text-black/80 font-medium">
            
            {/* SLA Block: flex-col, gap-4 to match, light gray background */}
            <div className="flex flex-col gap-4 pl-6 pr-12 py-10   md:bg-[#F0EEEB] border-r border-[#D1D5DC]">
              <h3 className="item-title text-xl font-bold leading-tight">
                {technologies[0].title}
              </h3>
              {/* item-description text size for body, specific leading for clarity */}
              <p className="item-description text-black/90 leading-[22px]">
                {technologies[0].description}
              </p>
            </div>

            {/* FDM Block: flex-col, gap-4 to match, distinct light gray background */}
            <div className="flex flex-col gap-4 pr-6 pl-12 py-10  md:bg-[#F0EEEB]">
              <h3 className="item-title text-xl font-bold leading-tight">
                {technologies[1].title}
              </h3>
              {/* item-description text size for body, specific leading for clarity */}
              <p className="item-description text-black/90 leading-[22px]">
                {technologies[1].description}
              </p>
            </div>

            {/* Divider Icon Box: Absolute positioning over the center line on md+ screens */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center p-2 bg-white border border-[#D1D5DC] rounded-sm">
              <HiOutlinePrinter className="size-4 text-black/90" />
            </div>

          </div>
        </div>

        {/* Footer Text Area */}
        <div className=" pt-8">
          {/* section-description size text, consistent color */}
          <p className="section-description text-primary-gray/90 leading-6">
            La selezione della tecnologia avviene in fase di consulenza, valutando insieme al clinico le esigenze specifiche del caso e del paziente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrintTechnologiesSection;