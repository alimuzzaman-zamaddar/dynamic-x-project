import React from 'react';
import { HiOutlineLightningBolt, HiOutlineRocketLaunch, HiOutlineTarget } from '../../SvgContainer/SvgContainer1';

/**
 * Futures Section Component
 * Renders the "Il Futuro della Stampa 3D Sta Arrivando" section, matching the layout,
 * typography, and specific gray feature blocks with center-aligned icons from image_32.png.
 */
const FuturesSection = () => {
  const features = [
    {
      icon: <HiOutlineRocketLaunch />,
      label: "Accessibile",
      description: "Nessun software complesso o curva d'apprendimento."
    },
    {
      icon: <HiOutlineLightningBolt  />,
      label: "Rapido",
      description: "Dall'idea all'oggetto in pochi passi."
    },
    {
      icon: <HiOutlineTarget />,
      label: "Preciso",
      description: "Conversioni automatiche ad alta fedeltà."
    }
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main">
        
        {/* Header Block using section-header */}
        <div className="section-header mb-6 md:mb-10 flex flex-col gap-6">
          {/* section-title for uniform title style (semibold, 4xl on md) */}
          <h2 className="section-title">
            Il Futuro della Stampa 3D Sta Arrivando
          </h2>
        </div>

        {/* Feature Grid with center-aligned icons in gray blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 md:mt-6 text-center">
          {features.map((feature, index) => (
            // Flex column to manage point content layout
            <div key={index} className="flex flex-col items-center gap-6 text-center">
              
              {/* Gray Feature Block (pill shape, centered icon) */}
              <div className="w-full h-auto py-4 px-10 bg-[#f4f2f0] rounded-full flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Point Title (bold, body text style) */}
              <h3 className="font-bold text-lg leading-tight text-primary-black mt-2">
                {feature.label}
              </h3>
              
              {/* Point Description (normal weight, smaller text size) */}
              <p className="text-primary-black/80 text-[13px] leading-[22px] max-w-[320px] mt-[-4px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Sub-Header Block (Basta limitazioni) */}
        <div className="section-header mt-6 md:mt-10 flex flex-col gap-5 text-left">
          {/* Bold text for title, similar to body font size but heavier */}
          <h4 className="font-bold text-xl leading-tight text-primary-black tracking-tight">
            Basta limitazioni
          </h4>
          
          {/* Description text (small text size with standard leading, bold highlights) */}
          <p className="text-primary-black/80 text-[13px] leading-[22px] max-w-[1200px]">
            Trasforma ogni idea bidimensionale in un oggetto reale, rendendo la stampa 3D <b>accessibile a tutti.</b>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FuturesSection;