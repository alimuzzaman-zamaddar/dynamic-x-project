import React from "react";

const PrintTechnologiesSection = () => {
  const technologies = [
    {
      title: "FDM — Fused Deposition Modeling",
      description:
        "Ideale per prototipi funzionali, parti meccaniche e test di assemblaggio. Ampia scelta di materiali tecnici: PLA, PETG, ABS, TPU. Costi contenuti e iterazione rapida, perfetto per le prime fasi di sviluppo e per geometrie robuste.",
      features: [
        "Prototipi strutturali e meccanici",
        "Test di fit & assembly",
        "Parti per validazione tecnica",
      ],
    },
    {
      title: "SLA — Stereolithography",
      description:
        "Risoluzione elevatissima per dettagli fini, superfici lisce e mockup estetici di alta qualità. Perfetto per presentazioni al cliente, parti ottiche e componenti che richiedano tolleranze strette e finitura superficiale impeccabile.",
      features: [
        "Mockup estetici e modelli di presentazione",
        "Parti con dettagli fini ad alta risoluzione",
        "Validazione estetica pre-produzione",
      ],
    },
  ];

  return (
    // section with default py-5 md:py-8 from your theme
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        {/* Header Block using section-header */}
        <div className="section-header mb-12">
          {/* section-title for uniform title style */}
          <h2 className="section-title">Tecnologie di Stampa</h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description ">
            Utilizziamo le tecnologie più adatte a ogni fase del processo di
            sviluppo prodotto. La scelta della macchina giusta fa la differenza
            tra un prototipo utile e uno che rallenta il progetto.
          </p>
        </div>

        {/* Technology Row: 2-column flexbox with split background on desktop */}
        <div className="relative mt-10">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0.5 text-black/80 font-medium">
            {/* FDM Block: flex-col, gap-4 to match, light gray background */}
            <div className="flex flex-col gap-6 p-10 xl:p-12 md:bg-[#1C1C24] rounded-sm">
              <h3 className="item-title text-2xl font-bold leading-tight text-white">
                {technologies[0].title}
              </h3>
              {/* item-description text size for body, specific leading for clarity */}
              <p className="item-description text-black/90 leading-[22px] text-white">
                {technologies[0].description}
              </p>

              {/* Unordered list for FDM features, small text */}
              <ul className="flex flex-col gap-3 mt-4 text-[15px] leading-[22px] text-white">
                {technologies[0].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* SLA Block: flex-col, gap-4 to match, distinct light gray background */}
            <div className="flex flex-col gap-6 p-10 xl:p-12">
              <h3 className="item-title text-2xl font-bold leading-tight">
                {technologies[1].title}
              </h3>
              {/* item-description text size for body, specific leading for clarity */}
              <p className="item-description text-black/90 leading-[22px]">
                {technologies[1].description}
              </p>

              {/* Unordered list for SLA features, small text */}
              <ul className="flex flex-col gap-3 text-[15px] leading-3 ">
                {technologies[1].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintTechnologiesSection;
