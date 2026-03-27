import React from 'react';

const WhyChooseDevices = () => {
  const points = [
    {
      id: "1",
      title: "Personalizzazione Totale",
      description: "Ogni dispositivo è progettato sulle misure reali del paziente, eliminando le inefficienze dei prodotti standard e garantendo la massima aderenza anatomica."
    },
    {
      id: "2",
      title: "Collaborazione Clinica",
      description: "Lavoriamo a stretto contatto con il veterinario referente per tradurre le esigenze cliniche in soluzioni tecniche precise e affidabili."
    },
    {
      id: "3",
      title: "Materiali Certificati",
      description: "Utilizziamo solo materiali biocompatibili e testati per garantire sicurezza al paziente e conformità agli standard di qualità medicale."
    },
    {
      id: "4",
      title: "Tempi Rapidi",
      description: "Dalla ricezione dei dati alla consegna del dispositivo finito, ottimizziamo ogni fase del processo produttivo per rispettare le tempistiche cliniche."
    }
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width (1040px) */}
      <div className="container-main">
        {/* Header Block using section-header */}
        <div className="section-header mb-8">
          {/* section-title for uniform font and size */}
          <h2 className="section-title ">
            Perché Scegliere i Nostri Dispositivi
          </h2>
        </div>

        {/* Featured Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 ">
          {points.map((point) => (
            <div key={point.id} className="relative flex flex-col pt-12 pb-10 px-10 border border-border-gray/50 ">
              
              {/* Numerical Divider (Circle over the top border) */}
              <div className="absolute z-50 left-1/2 -top-5 -translate-x-1/2 flex items-center justify-center p-2.5 size-10 rounded-full bg-primary-black text-white font-bold text-base leading-none">
                {point.id}
              </div>
              <div className="h-[2px] w-[90%]  mx-auto bg-black absolute top-0 left-[24px] z-10"></div>

              {/* Card Content */}
              <div className="flex flex-col gap-6 text-left">
                {/* Point Title */}
                <h3 className="font-bold text-xl leading-tight tracking-tight">
                  {point.title}
                </h3>
                {/* Point Description (small text size with standard leading) */}
                <p className="item-description text-primary-gray/80 leading-[1.6]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDevices;