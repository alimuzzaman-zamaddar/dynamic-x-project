import React from 'react';


const TechnologiesSectionDrone = () => {
  const technologies = [
    {
      number: "1",
      title: "FDM — Fused Deposition Modeling",
      description:
        "Tecnologia ideale per prototipi funzionali e produzione di componenti strutturali in PA-CF e ABS tecnico. Elevata flessibilità geometrica, bassi costi per volumi medio-alti e possibilità di lavorare con materiali compositi a fibra corta.",
    },
    {
      number: "2",
      title: "SLA — Stereolithography",
      description:
        "Massima risoluzione dimensionale per dettagli fini e superfici lisce. Perfetta per supporti sensori, innesti di precisione e componenti che richiedono tolleranze strette. Compatibile con resine high-temp e ingegneristiche.",
    },
    {
      number: "3",
      title: "SLS — Selective Laser Sintering",
      description:
        "La soluzione d'eccellenza per geometrie complesse senza supporti. Il letto di polvere consente libertà di design totale: ideale per componenti con canali interni, sottosquadri e strutture a reticolo alleggerite.",
    },
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white">
      {/* container-main for max-width and center alignment */}
      <div className="container-main">
        
        {/* Header Area using section-header */}
        <div className="section-header max-w-[1000px]">
          {/* section-title for text-black and large font */}
          <h2 className="section-title text-4xl leading-tight">
            Tecnologie di Stampa Disponibili
          </h2>
          {/* section-description for black 12px leading-24px */}
          <p className="section-description mt-3">
            Non esiste una tecnologia universale per la produzione di componenti UAV:
            ogni processo offre vantaggi specifici in termini di risoluzione,
            materiali disponibili e proprietà meccaniche del pezzo finito.
            Per questo lavoriamo con tre tecnologie complementari,
            selezionando quella più adatta a ogni componente.
          </p>
        </div>

        {/* Feature Grid: responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-8 md:mt-10">
          {technologies.map((tech) => (
            <div key={tech.number} className="flex flex-col gap-6">
              
              {/* Number Circle using secondary-gray bg and rounded-full */}
              <div
                className="w-full flex items-center justify-center rounded-full bg-[#F0EFED] aspect-[22/4]"
          
              >
                <span className="text-black text-xl font-bold">
                  {tech.number}
                </span>
              </div>
              
              {/* Text Block */}
              <div className="flex flex-col gap-4">
                {/* item-title for consistent text-black text-sm/base */}
                <h3 className="leading-tight font-semibold">
                  {tech.title}
                </h3>
                {/* item-description for black 12px text and leading-24px */}
                <p className="item-description">
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

export default TechnologiesSectionDrone;