import React from 'react';
import CadPhysicalGraphic from '../../../assets/img/stampa/CadToPhysicalSection.png';


const CadToPhysicalSection = () => {
  const steps = [
    { 
      title: "Ottimizzazione", 
      desc: "Prepariamo file per stampa e correggiamo errori.", 
      position: "top-left" 
    },
    { 
      title: "Ricezione CAD/BIM", 
      desc: "Accettiamo formati standard e verifichiamo la geometria.", 
      position: "bottom-left" 
    },
    { 
      title: "Stampa FDM o SLA", 
      desc: "Produciamo con materiali premium e precisione.", 
      position: "top-right" 
    },
    { 
      title: "Post-produzione", 
      desc: "Finitura, controllo qualità e consegna puntuale.", 
      position: "bottom-right" 
    }
  ];

  return (
    // section class for global padding
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) and centering */}
      <div className="container-main">
        
        {/* Header Area using section-header pattern */}
        <div className="section-header mb-12">
          {/* section-title for uniform title style */}
          <h2 className="section-title mb-4">
            Dal File CAD al Modello Fisico
          </h2>
          {/* section-description for consistent description style and spacing */}
          <p className="section-description max-w-[850px]">
            Il nostro processo è pensato per integrarsi perfettamente nel flusso di lavoro degli studi di progettazione. Gestiamo formati file standard del settore e offriamo supporto tecnico in ogni fase, dalla verifica della geometria alla consegna del modello finito.
          </p>
        </div>

        {/* Process Flow Wrapper */}
        <div className="flex flex-col xl:flex-row items-center gap-6">
          
          {/* Left Steps Column */}
          <div className="flex flex-col xl:gap-6 xl:gap-24  md:left-0 md:top-[15%] md:w-[320px] text-left">
            {steps.filter(step => step.position.includes('left')).map((step, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="font-bold text-xs text-black/90">
                  {step.title}
                </h4>
                <p className="text-xs text-primary-gray/80 leading-relaxed xl:max-w-[167px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Central Graphic (Image from image_12.png) */}
          <div className="flex items-center justify-center my-4 xl:my-16 md:my-0 md:w-full">
            <img 
              src={CadPhysicalGraphic} 
              alt="CAD to Physical model process flow graphic" 
              className="h-[150px] xl:h-auto"
            />
          </div>

          {/* Right Steps Column */}
          <div className="flex flex-col  xl:gap-24  text-left md:text-right">
            {steps.filter(step => step.position.includes('right')).map((step, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h4 className="font-bold text-xs text-black/90">
                  {step.title}
                </h4>
                <p className="text-xs text-primary-gray/80 leading-relaxed xl:max-w-[167px] md:max-w-none md:ml-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* File Formats Footer */}
        <div className="mt-6 xl:mt-10 pt-8">
          <p className="text-xs text-primary-gray/90 leading-relaxed max-w-[1000px]">
            Accettiamo file nei formati più diffusi: <strong>.dwg, .dxf, .stl, .obj, .step</strong> e file BIM. Il team tecnico verifica ogni modello prima della stampa per garantire fedeltà geometrica e qualità del risultato finale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CadToPhysicalSection;