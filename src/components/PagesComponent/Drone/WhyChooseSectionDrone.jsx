import React from "react";

const WhyChooseSectionDrone = () => {
  const statistics = [
    {
      value: "−40%",
      label: "Riduzione del Peso",
      description:
        "Rispetto a parti prodotte con metodi convenzionali grazie al design generativo",
    },
    {
      value: "3",
      label: "Tecnologie di Stampa",
      description:
        "FDM, SLA e SLS disponibili per coprire ogni esigenza applicativa",
    },
    {
      value: "4",
      label: "Famiglie di Materiali",
      description:
        "PA-CF, Nylon rinforzato, ABS tecnico e resine high-temp per ogni scenario",
    },
    {
      value: "100%",
      label: "Componenti Custom",
      description:
        "Ogni parte è progettata specificamente per la piattaforma e l'applicazione del cliente",
    },
  ];

  return (
    // Section wrapper with padding (custom component style)
    <section className="section bg-white">
      {/* Container with max width and padding (custom component style) */}
      <div className="container-main">
        {/* Header (custom component style) */}
        <div className="section-header">
          {/* Section title (custom component style) */}
          <h2 className="section-title">
            Perché Scegliere i Nostri Componenti
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-4 mt-12 md:mt-10 text-center">
          {statistics.map((stat, index) => (
            // Statistics Item (flex column, centered items)
            <div key={index} className="flex flex-col items-center gap-4">
              {/* Statistic value (bold, large font) */}
              <div className="section-title">{stat.value}</div>
              {/* Statistic label (bold, smaller font) */}
              <div className="text-black text-sm md:text-base font-semibold leading-tight">
                {stat.label}
              </div>
              {/* Statistic description (normal weight, smaller font) */}
              <p className="text-black text-[15px] leading-[1.6]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSectionDrone;
