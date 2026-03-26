import React from 'react';

const ArchitecturalModels = () => {
  const features = [
    {
      title: 'Fedeltà al Progetto',
      description: 'Dal file digitale al modello fisico, senza compromessi sul dettaglio.',
    },
    {
      title: 'Materiali Premium',
      description: 'PLA ad alta resistenza e resine high detail per ogni esigenza.',
    },
    {
      title: 'Tecnologie Avanzate',
      description: 'Stampa FDM e SLA per risultati professionali su qualsiasi scala.',
    },
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width */}
      <div className="container-main">
        {/* Header Block using section-header */}
        <div className="section-header mb-12">
          {/* section-title for uniform font and size */}
          <h2 className="section-title">
            Modelli Architettonici ad Alta Definizione
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description text-black/80 mt-4">
            Trasformiamo i tuoi progetti CAD in modelli fisici di altissimo dettaglio, pronti per presentazioni professionali, approvazioni urbanistiche e comunicazione commerciale. Ogni modello è realizzato con precisione millimetrica, per dare forma concreta alla visione del progettista.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-16 md:mt-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col group"
            >
              {/* Vertical line with hover effect, on the left of each item on desktop */}
              <div className="flex flex-row items-center gap-6 border-l-2 p-4">       
                {/* Text Area */}
                <div className="flex flex-col gap-2">
                  {/* item-title for consistent text style and font size */}
                  <h3 className="font-bold">
                    {feature.title}
                  </h3>
                  {/* item-description for black 12px text and leading-24px */}
                  <p className="item-description leading-4.5 text-black/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalModels;