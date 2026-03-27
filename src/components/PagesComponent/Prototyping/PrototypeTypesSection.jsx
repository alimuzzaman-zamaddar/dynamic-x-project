import React from 'react';

const PrototypeTypesSection = () => {
  const points = [
    {
      title: "Prototipo Funzionale",
      description: "Replica operativa del prodotto finale. Testabile su parametri meccanici, elettrici e di usabilità. Il punto di riferimento per la validazione tecnica del progetto."
    },
    {
      title: "Mockup Estetico",
      description: "Riproduzione fedele dell'aspetto e delle proporzioni del prodotto. Fondamentale per presentazioni a investitori, feedback di design e fotografia di prodotto."
    },
    {
      title: "Parti per Validazione Tecnica",
      description: "Componenti singoli o assemblaggi parziali per test specifici: resistenza dei materiali, accoppiamenti dimensionali, ergonomia e compatibilità con altri sistemi."
    }
  ];

  return (
    // section class for consistent py-5 md:py-8, using primary-black for text
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main flex flex-col">
        
        {/* Header Block with custom gap */}
        <div className="flex flex-col gap-6 section-header border-b-2 border-black pb-5">
          {/* section-title for uniform title style (4xl on md) */}
          <h2 className="section-title">
            Tipologie di Prototipo
          </h2>
          {/* section-description for body text style (12px, leading-24px) */}
          <p className="section-description">
            Ogni fase del ciclo di sviluppo richiede un diverso tipo di prototipo. Supportiamo il tuo team dalla validazione del concept iniziale fino alla pre-serie, con il livello di fedeltà giusto per ogni momento.
          </p>
        </div>

        {/* Feature Grid: 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {points.map((point, index) => (
            // Flex column to manage point content layout
            <div key={index} className="flex flex-col gap-4 text-left">
              {/* Point Title */}
              <h3 className="text-primary-black font-semibold ">
                {point.title}
              </h3>
              {/* Point Description (small text size with standard leading) */}
              <p className="text-primary-black/80 text-[13px] leading-[22px] max-w-[320px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrototypeTypesSection;