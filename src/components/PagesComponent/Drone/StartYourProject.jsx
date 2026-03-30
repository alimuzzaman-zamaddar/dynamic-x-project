import React from "react";
import { CheckIcon } from "../../SvgContainer/SvgContainer1";

const StartYourProject = () => {
  const steps = [
    {
      id: "01",
      title: "Analisi dei Requisiti",
      description:
        "Raccogliamo le specifiche tecniche: carichi, temperature operative, vincoli di peso e interfacce di montaggio",
    },
    {
      id: "02",
      title: "Design e Simulazione",
      description:
        "Progettiamo il componente con software CAD parametrico e validazione FEM per garantire le prestazioni attese",
    },
    {
      id: "03",
      title: "Selezione Materiale e Tecnologia",
      description:
        "Identifichiamo il binomio ottimale materiale-processo in funzione delle specifiche e del volume di produzione",
    },
    {
      id: "04",
      title: "Stampa e Consegna",
      description:
        "Produzione, post-processing e consegna del componente finito, pronto per l'integrazione immediata",
    },
  ];

  return (
    // section class for global padding
    <section className="section bg-white text-black font-family-inter">
      {/* container-main for standard content width and centering */}
      <div className="container-main">
        {/* Header Area using section-header */}
        <div className="section-header">
          {/* section-title for uniform title style */}
          <h2 className="section-title">Inizia il Tuo Progetto</h2>
          {/* section-description for consistent description style and spacing */}
          <p className="section-description max-w-[1000px]">
            Che tu stia sviluppando una nuova piattaforma UAV o ottimizzando un
            drone esistente, il nostro team di ingegneri è pronto ad analizzare
            i requisiti tecnici e proporre la soluzione più efficace. Dalla
            specifica al prototipo funzionale, supportiamo ogni fase dello
            sviluppo con competenza e precisione.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col group">
              {/* Divider Top */}
              <div className="text-sm leading-normal opacity-80 group-hover:opacity-100 transition-opacity">
                {step.id}
              </div>

              <div className="divider-top mt-2 mb-4" />

              {/* Content Area */}
              <div className="flex flex-col gap-2 pl-4 md:pl-0">
                {/* ID Number */}

                {/* Title */}
                <h3 className=" font-semibold leading-tight ">{step.title}</h3>

                {/* Description - specific size adjustment */}
                <p className="item-description text-[15px] leading-[18px] text-black opacity-80 mt-[-4px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box - matching image_2 style */}
        <div className="flex items-center gap-4 bg-[#E8E6E4] p-4 w-full mt-10">
          <div className="text-black shrink-0">
            {/* SVG Checkmark inside a box to match */}
            <CheckIcon />
          </div>
          <p className="text-[15px] leading-[22px] text-black">
            <strong className="font-semibold text-black/90">
              Pronto a collaborare?
            </strong>{" "}
            Contattaci con i tuoi requisiti tecnici e ricevi una valutazione di
            fattibilità gratuita entro 48 ore lavorative.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartYourProject;
