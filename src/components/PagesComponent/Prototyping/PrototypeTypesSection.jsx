import React from "react";

const PrototypeTypesSection = ({ data }) => {
  if (!data) return null;

  const {
    title = "Tipologie di Prototipo",
    subtitle = "",
    divs = []
  } = data;

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main flex flex-col gap-10">
        <div className="flex flex-col gap-6 section-header border-b-2 border-black pb-5">
          <h2 className="section-title">
            {title}
          </h2>
          {subtitle ? (
            <p className="section-description">
              {subtitle}
            </p>
          ) : (
            <p className="section-description">
              Ogni fase del ciclo di sviluppo richiede un diverso tipo di
              prototipo. Supportiamo il tuo team dalla validazione del concept
              iniziale fino alla pre-serie, con il livello di fedeltà giusto per
              ogni momento.
            </p>
          )}
        </div>

        {divs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {divs.map((point, index) => (
              <div key={index} className="flex flex-col gap-4 text-left">
                <h3 className="text-primary-black font-semibold text-lg">
                  {point.title}
                </h3>
                <p className="text-primary-black/80 text-[15px] leading-[22px] max-w-[320px]">
                  {point.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PrototypeTypesSection;