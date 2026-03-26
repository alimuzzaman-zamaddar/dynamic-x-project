import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    {
      title: "FDM — Fused Deposition Modeling",
      description: "Tecnologia estrusion-based per componenti strutturali in ASA, PETG e Nylon. Ideale per prototipi funzionali e produzioni medie serie. Eccellente rapporto tra costo, velocità e proprietà meccaniche."
    },
    {
      title: "SLA — Stereolithography",
      description: "Fotopolimerizzazione a resina per componenti con geometrie complesse e finiture superficiali di altissima qualità. Precisione dimensionale superiore, adatta per pezzi estetici e alloggiamenti tecnici di precisione."
    },
    {
      title: "SLS — Selective Laser Sintering",
      description: "Sinterizzazione laser su polveri polimeriche senza supporti. Libertà geometrica totale, parti isotrope ad alta resistenza meccanica, ideale per componenti funzionali complessi in serie."
    }
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width */}
      <div className="container-main">
        {/* Header Area using section-header */}
        <div className="section-header mb-12">
          {/* section-title for uniform font and size */}
          <h2 className="section-title ">
            Tecnologie di Stampa Disponibili
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description max-w-[1000px] text-black/80 mt-4">
            La scelta della tecnologia produttiva incide direttamente sulle proprietà finali del componente. Offriamo tre processi di stampa 3D complementari, selezionabili in funzione del materiale, della geometria, del volume produttivo e del livello di finitura richiesto. Questa flessibilità ci consente di rispondere a qualsiasi specifica tecnica nel settore nautico.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-16 md:mt-10">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="border border-border-gray flex flex-col group overflow-hidden"
            >
              {/* Content Area (White Background) */}
              <div className="w-full flex flex-col gap-4 p-4 xl:p-6 bg-white h-full">
                {/* item-title for consistent text style and-1 font size */}
                <h3 className=" font-bold leading-tight">
                  {tech.title}
                </h3>
                {/* item-description for black 12px text and leading-24px */}
                <p className="item-description leading-4.5 text-black/90">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;