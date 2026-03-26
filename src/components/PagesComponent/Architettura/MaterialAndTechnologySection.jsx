import React from 'react';

const MaterialAndTechnologySection = () => {
  const technologies = [
    {
      title: "FDM — Fused Deposition Modeling",
      description: "Tecnologia ideale per plastici di grandi dimensioni e masterplan in scala urbana. Il PLA premium garantisce robustezza strutturale, superfici lavorabili e un'ottima resa cromatica. Perfetto per modelli da esposizione e cantiere.",
      tags: ["PLA PREMIUM", "GRANDI SCALE"],
      tagStyle: "outlined"
    },
    {
      title: "SLA — Stereolithography",
      description: "Tecnologia a resina fotopolimerica per la massima risoluzione di dettaglio. Indicata per modelli d'interni, elementi decorativi e componenti architettonici complessi che richiedono bordi netti, superfici lisce e geometrie sottili.",
      tags: ["RESINA HIGH DETAIL", "ALTA PRECISIONE"],
      tagStyle: "filled"
    }
  ];

  return (
    // Standard vertical padding from design system
    <section className="section bg-white text-primary-black font-family-inter">
      {/* Standard 1040px max-width container */}
      <div className="container-main">
        
        {/* Header Block */}
        <div className="section-header mb-12">
          {/* Main Title following section-title patterns */}
          <h2 className="section-title">
            Materiali e Tecnologie di Stampa
          </h2>
          {/* Description following section-description patterns (12px, leading-24px) */}
          <p className="section-description  text-black/80 mt-4">
La scelta del materiale e della tecnologia di stampa è determinante per la qualità del risultato finale. Utilizziamo esclusivamente materiali premium e macchinari professionali, selezionati in base alla complessità geometrica, alla scala e alla destinazione d'uso di ogni modello.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-10">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Technology Title */}
              <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">
                {tech.title}
              </h3>
              
              {/* Technology Description */}
              <p className="item-description">
                {tech.description}
              </p>

              {/* Tags Row */}
              <div className="flex flex-wrap gap-3 mt-2">
                {tech.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`
                      px-4 py-2 text-[11px] font-bold tracking-widest uppercase
                      ${tech.tagStyle === 'outlined' 
                        ? 'border border-primary-black text-primary-black' 
                        : 'bg-[#F3F4F6] text-primary-black'}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialAndTechnologySection;