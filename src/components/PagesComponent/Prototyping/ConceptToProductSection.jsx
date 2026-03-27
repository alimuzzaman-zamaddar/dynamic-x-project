import React from 'react';

const ConceptToProductSection = () => {
  const steps = [
    { title: "Concept", desc: "Definizione dei requisiti e progettazione del modello" },
    { title: "Validazione", desc: "Test reali su assemblaggio, resistenza e forma" },
    { title: "Prototipo", desc: "Stampa funzionale per test meccanici ed estetici" },
  ];

  return (
    // section with default py-5 md:py-8 from your theme
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        {/* Header Block using section-header */}
        <div className="section-header mb-12">
          {/* section-title for uniform font and size */}
          <h2 className="section-title mb-12">
            Dal concept al prodotto finito.
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description">
            Seguiamo startup e aziende nello sviluppo di prodotti personalizzati, 
            dalla prima idea al prototipo testabile fino alla piccola serie. 
            Iterazione rapida, testing reale, time-to-market accelerato: 
            il nostro processo è progettato per ridurre i tempi e massimizzare 
            la qualità di ogni ciclo di sviluppo.
          </p>
        </div>

        {/* Features/Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-8 md:mt-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 border-l-4 pl-4 py-2 border-black"
            >
              <div className="flex flex-col gap-2">
                {/* item-title for consistent text style and font size */}
                <h3 className="font-semibold text-lg leading-tight uppercase tracking-tight">
                  {step.title}
                </h3>
                {/* item-description for black 12px text and leading-24px */}
                <p className="item-description leading-4.5 text-black/90">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptToProductSection;