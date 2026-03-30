import React from "react";

const PrintingTechnologiesDrone = () => {
  const technologies = [
    {
      id: 1,
      title: "Geometria Ottimizzata",
      description:
        "Forme studiate per interrompere i percorsi di trasmissione vibrazionale senza aggiungere massa inutile",
    },
    {
      id: 2,
      title: "Materiali Smorzanti",
      description:
        "Possibilità di integrare inserti in gomma tecnica o TPU flessibile direttamente nel componente stampato",
    },
    {
      id: 3,
      title: "Compatibilità Multisistema",
      description:
        "Progettazione adattiva per diversi standard di montaggio — DJI, Cube, Pixhawk e architetture custom",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-main">
        {/* Header Section */}
        <div className="section-header mb-12">
          <h2 className="section-title mb-4">Componenti Anti-Vibrazione</h2>
          <p className="section-description text-black/80">
            Le vibrazioni trasmesse dai rotori rappresentano una delle
            principali cause di degradazione delle prestazioni nei sistemi UAV
            professionali. I nostri componenti anti-vibrazione sono progettati
            per isolare sensori, telecamere e apparati elettronici dagli shock
            meccanici, migliorando la stabilità di volo e la qualità delle
            acquisizioni dati.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="border-2 border-[#1A1A1A]/40 border-l-[4px] border-l-[#1A1A1A] p-6 flex flex-col gap-3 "
            >
              <h3 className="font-semibold text-primary-black leading-tight">
                {tech.title}
              </h3>
              <p className="text-[15px]  text-black/70">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingTechnologiesDrone;
