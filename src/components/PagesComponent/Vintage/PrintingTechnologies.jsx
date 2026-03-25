import React from 'react';

const PrintingTechnologies = () => {
  const technologies = [
    {
      id: 1,
      title: "FDM — Fused Deposition Modeling",
      description: "Ideale per boccole, supporti meccanici, prototipi strutturali e parti di grandi dimensioni. Compatibile con ABS automotive, ASA UV resistant e Nylon tecnico. Ottimo rapporto resistenza/costo per pezzi funzionali."
    },
    {
      id: 2,
      title: "SLA — Stereolithography",
      description: "Tecnologia a fotopolimerizzazione per dettagli superficiali estremi. Perfetta per griglie ornamentali, inserti cruscotto, componenti estetici e master per fusione. Superfici lisce pronte per verniciatura o cromatura."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-main">
        {/* Header Section */}
        <div className="section-header mb-12">
          <h2 className="section-title mb-4">
            Tecnologie di Stampa Utilizzate
          </h2>
          <p className="section-description max-w-[850px] text-black/80">
            Selezioniamo la tecnologia di stampa più adatta in base alla geometria del pezzo, 
            al materiale richiesto e alla destinazione d'uso — estetica, funzionale o prototipale.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              className="border-2 border-[#1A1A1A]/40 border-l-[4px] border-l-[#1A1A1A] p-8 flex flex-col gap-6"
            >
              <h3 className="text-xl md:text-[22px] font-semibold text-primary-black leading-tight">
                {tech.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-black/70">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingTechnologies;