import React from "react";

const RequestQuoteSection = () => {
  const stats = [
    {
      value: "24h",
      label: "Risposta Preventivo",
      description: "Tempi di risposta rapidi per non bloccare il tuo workflow.",
    },
    {
      value: "0.1mm",
      label: "Tolleranza Minima",
      description: "La precisione che distingue un modello professionale.",
    },
    {
      value: "1:500",
      label: "Scala Massima",
      description: "Dalla scala urbana al dettaglio d'interni.",
    },
  ];

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main flex flex-col">
        <div className="section-header">
          <h2 className="section-title mb-11">Richiedi un Preventivo</h2>
          <p className="section-description">
            Hai un progetto da realizzare? Contattaci con il file CAD o BIM e le
            specifiche del modello. Il nostro team ti fornirà un preventivo
            dettagliato entro 24 ore, con indicazione dei materiali consigliati,
            della tecnologia di stampa più adatta e dei tempi di consegna
            stimati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 text-center"
            >
              <div className="section-title">{stat.value}</div>
              <div className="text-primary-black font-semibold ">
                {stat.label}
              </div>
              <p className="section-description">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-11">
          <button className="h-12 cursor-pointer px-8 bg-[#1a1411] text-white rounded-full text-base font-medium flex items-center justify-center transition hover:bg-white whitespace-nowrap hover:text-black hover:border border hover:border-black ">
            Richiedi Preventivo
          </button>

          <button className="h-12 cursor-pointer px-8 bg-transparent text-primary-black font-medium border border-black rounded-full text-base flex items-center justify-center transition hover:bg-black hover:text-white whitespace-nowrap">
            Scopri i Materiali
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestQuoteSection;
