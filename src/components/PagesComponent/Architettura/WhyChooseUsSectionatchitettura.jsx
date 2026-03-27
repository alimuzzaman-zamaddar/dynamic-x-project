import React from 'react';
import ArtisanGraphic from '../../../assets/img/stampa/Architect.png';

const WhyChooseUsSectionatchitettura = () => {
  const points = [
    {
      title: "Precisione Millimetrica",
      description: "I nostri macchinari raggiungono tolleranze fino a 0,1 mm, assicurando che ogni dettaglio del progetto originale sia fedelmente riprodotto nel modello fisico."
    },
    {
      title: "Tempi di Consegna Competitivi",
      description: "Grazie a un parco macchine dedicato e a un workflow ottimizzato, siamo in grado di rispettare le scadenze più stringenti, anche per commesse urgenti o complesse."
    },
    {
      title: "Supporto Tecnico Dedicato",
      description: "Il nostro team affianca lo studio di progettazione dalla fase di preparazione del file fino alla consegna, garantendo un risultato allineato alle aspettative del cliente."
    },
    {
      title: "Scala e Flessibilità",
      description: "Realizziamo modelli da scala 1:500 per masterplan territoriali fino a scala 1:20 per interni di dettaglio, adattando materiali e tecnologie alle specifiche di ogni progetto."
    }
  ];

  return (
    // section class for global padding
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) and centering */}
      <div className="container-main">
        
        {/* Split Container for Text and Image */}
        <div className="flex flex-col-reverse xl:flex-row gap-10 items-center">
          
          {/* Left Side: Text and Points Grid */}
          <div className="flex flex-col gap-10 xl:w-[60%] ">
            
            {/* Main Title */}
            <h2 className="section-title">
              Perché Scegliere i Nostri Modelli
            </h2>

            {/* Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {points.map((point, index) => (
                <div key={index} className="flex flex-col gap-3">
                  {/* Point Title */}
                  <h3 className=" font-semibold text-black">
                    {point.title}
                  </h3>
                  {/* Point Description (small text size as per pattern) */}
                  <p className="item-description text-primary-gray/80 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Large Graphic */}
          <div className="flex items-center justify-center md:justify-end xl:w-[40%]">
            <img 
              src={ArtisanGraphic} 
              alt="Artisan model maker carefully assembling a delicate wooden structural model" 
              className="w-full xl:h-[388px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSectionatchitettura;