import React from 'react';

const HighQualityMaterialsSection = () => {
  const materials = [
    {
      title: "Resine Biocompatibili",
      description: "Ideali per dispositivi a contatto diretto con cute e tessuti. Offrono elevata precisione dimensionale, superficie liscia e resistenza agli agenti chimici tipici dell'ambiente clinico. Certificate per uso medicale.",
      features: [
        "Alta risoluzione superficiale",
        "Biocompatibilità certificata",
        "Resistenza agli sterilizzanti"
      ]
    },
    {
      title: "Nylon Tecnico",
      description: "Materiale termoplastico ad alte prestazioni, ideale per tutori e protesi che richiedono resistenza meccanica, flessibilità controllata e leggerezza strutturale. Eccellente per applicazioni funzionali a lungo termine.",
      features: [
        "Resistenza meccanica elevata",
        "Leggerezza e flessibilità",
        "Durata nel tempo prolungata"
      ]
    }
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        
        {/* Header Block using section-header */}
        <div className="section-header mb-12">
          {/* section-title for uniform title style (semibold, 4xl on md) */}
          <h2 className="section-title">
            Materiali di Alta Qualità
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description text-primary-gray/80 mt-4 leading-6">
            La scelta del materiale è fondamentale per garantire sicurezza e durabilità in ambito clinico. Utilizziamo esclusivamente materiali testati e certificati per applicazioni medicali e veterinarie.
          </p>
        </div>

        {/* Materials Grid (responsive md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-10">
          {materials.map((material, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-3"
            >
              {/* Material Title */}
              <h3 className="font-bold">
                {material.title}
              </h3>
              
              {/* Material Description (item-description styled 12px text) */}
              <p className="item-description text-black/90">
                {material.description}
              </p>

              {/* Specific features list with distinct black bullet pattern */}
              <ul className="flex flex-col gap-3 mt-2">
                {material.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center gap-2 text-xs text-primary-black"
                  >
                    {/* The bullet is represented by a small black circle */}
                    <div className="size-2 rounded-full bg-black shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighQualityMaterialsSection;