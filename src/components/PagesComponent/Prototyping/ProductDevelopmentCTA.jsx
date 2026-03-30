import React from "react";
import { Link } from "react-router";

const ProductDevelopmentCTA = () => {
  const stats = [
    {
      value: "48h",
      label: "Primo prototipo",
      description:
        "Tempi di consegna per il primo campione fisico dal file CAD approvato",
    },
    {
      value: "6+",
      label: "Materiali tecnici",
      description:
        "Ampia gamma di polimeri per ogni esigenza funzionale ed estetica",
    },
    {
      value: "2",
      label: "Tecnologie di stampa",
      description:
        "FDM e SLA per coprire qualsiasi tipo di applicazione professionale",
    },
    {
      value: "100%",
      label: "Consulenza inclusa",
      description:
        "Supporto tecnico in ogni fase del progetto senza costi aggiuntivi",
    },
  ];
  // Shared button styles to maintain 60px height and pill shape
  const btnBase =
    "h-[60px] cursor-pointer px-8 rounded-full font-medium uppercase text-sm tracking-wide whitespace-nowrap flex items-center justify-center transition-all duration-300 border";
  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) and centering */}
      <div className="container-main">
        {/* Main Header Area using established section-header and text classes */}
        <div className="section-header flex flex-col gap-6">
          {/* section-title for uniform font scaling */}
          <h2 className="section-title">
            Pronti a Sviluppare il Tuo Prodotto?
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description  text-primary-gray/80 mt-1">
            Che tu abbia già un file CAD o solo un'idea abbozzata su carta,
            siamo pronti ad accompagnarti nel percorso di sviluppo. Contattaci
            per una consulenza tecnica gratuita e scopri come possiamo
            accelerare il tuo progetto.
          </p>
        </div>

        {/* Large Statistics Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-4 md:mt-6 text-center">
          {stats.map((stat, index) => (
            // flex-col to keep icon, number, label, and description stacked
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              {/* Statistic value: bold, very large font, matching patterns in image_5.png and image_11.png */}
              <div className="section-title">{stat.value}</div>
              <div className="text-primary-black font-semibold text-lg leading-tight mt-[-4px]">
                {stat.label}
              </div>
              {/* Statistic description: normal weight, smaller font, standard leading */}
              <p className="text-primary-black/80 text-[15px] leading-[22px] max-w-[320px] mt-[-6px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Responsive Button Row */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-20 md:mt-24">
          {/* Solid -> Outlined on Hover */}
          <Link to={"/upload-design"}>
            <button
              className={`${btnBase} bg-[#1a1411] text-white border-[#1a1411] hover:bg-transparent hover:text-primary-black`}
            >
              Richiedi una Consulenza Gratuita
            </button>
          </Link>

          {/* Outlined -> Solid on Hover */}
          <Link to={"/upload-design"}>
            <button
              className={`${btnBase} bg-transparent text-primary-black border-border-gray hover:bg-[#1a1411] hover:text-white hover:border-[#1a1411]`}
            >
              Scopri i Materiali Disponibili
            </button>
          </Link>

          {/* Solid -> Outlined on Hover */}
          <Link to={"/upload-design"}>
            <button
              className={`${btnBase} bg-[#1a1411] text-white border-[#1a1411] hover:bg-transparent hover:text-primary-black`}
            >
              Carica il tuo design
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentCTA;
