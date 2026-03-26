import React from "react";
import { CheckIcon } from "../../SvgContainer/SvgContainer1";
// import { HiCheckCircle } from "react-icons/hi2"; // Optional: to replace the SVG check with a robust icon library

const WhyChooseUsSection = () => {
  const stats = [
    {
      value: "100%",
      label: "UV Resistant",
      description:
        "Tutti i materiali selezionati garantiscono resistenza certificata alla fotodegradazione UV",
    },
    {
      value: "3",
      label: "Tecnologie",
      description:
        "FDM, SLA e SLS disponibili per soddisfare ogni specifica tecnica e produttiva",
    },
    {
      value: "4",
      label: "Materiali Tecnici",
      description:
        "Polimeri selezionati specificamente per l'ambiente marino e le alte temperature",
    },
  ];

  return (
    // section class for consistent py-5 md:py-8, using primary-black for text
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        {/* Header Block with custom gap */}
        <div className="flex flex-col gap-6 section-header mb-16">
          {/* section-title for uniform title style (4xl on md) */}
          <h2 className="section-title">Perché Sceglierci</h2>
          {/* section-description for body text style (12px, leading-24px) */}
          <p className="section-description text-primary-gray/80 mt-1">
            Lavoriamo al fianco di designer nautici, ingegneri di produzione e
            responsabili acquisti che non possono permettersi compromessi. La
            nostra esperienza specifica nel settore marino, combinata con la
            padronanza delle tecnologie di stampa 3D avanzata, ci rende il
            partner ideale per chi cerca qualità, affidabilità e
            personalizzazione senza limiti.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-10 text-center">
          {stats.map((stat, index) => (
            // Flex column to center stat items horizontally
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              {/* Statistic value (bold, large font) */}
              <div className="section-title">{stat.value}</div>
              {/* Statistic label (semibold, body text style) */}
              <div className="text-primary-black font-semibold text-lg leading-tight mt-[-4px]">
                {stat.label}
              </div>
              {/* Statistic description (normal weight, smaller font) */}
              <p className="text-primary-black/80 text-[13px] leading-[22px] max-w-[320px] mt-[-6px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Gray Info Box */}
        <div className="flex items-center gap-4 bg-[#E8E8F0] p-6 w-full mt-12.5">
          <div className="text-primary-black shrink-0">
            <CheckIcon />
          </div>
          <p className="text-[13px] leading-[22px] text-primary-black/90">
            Ogni progetto inizia con un'analisi tecnica approfondita. Contattaci
            per ricevere una consulenza personalizzata e un preventivo su misura
            per la tua applicazione nautica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
