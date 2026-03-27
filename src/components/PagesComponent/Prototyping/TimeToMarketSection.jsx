import React from 'react';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { TargetIcon } from '../../SvgContainer/SvgContainer1';
import { HiOutlineLightningBolt, HiOutlineBeaker } from "react-icons/hi";

const TimeToMarketSection = () => {
  const topFeatures = [
    {
      icon: <HiOutlineLightningBolt className="size-8 text-primary-black" />,
      title: "Iterazione Rapida",
      description: "Dalle 24 alle 72 ore dalla conferma del file al prototipo fisico. Ogni ciclo di feedback diventa un nuovo punto di partenza per migliorare."
    },
    {
      icon: <HiOutlineBeaker className="size-8 text-primary-black" />,
      title: "Testing Reale",
      description: "Prototipi progettati per essere testati in condizioni operative reali, non solo valutati visivamente. I dati raccolti guidano le decisioni di design."
    },
    {
      icon: <TargetIcon  />,
      title: "Time-to-Market Accelerato",
      description: "Riduciamo il gap tra concept e lancio commerciale, supportando startup e team R&D nel passaggio dalla prototipazione alla piccola serie in modo fluido e controllato."
    }
  ];

  const bottomFeatures = [
    {
      title: "Consulenza tecnica inclusa",
      description: "Ti aiutiamo a scegliere tecnologia e materiale ottimali per il tuo caso d'uso specifico."
    },
    {
      title: "Tempi certi e comunicazione diretta",
      description: "Nessun intermediario: lavori direttamente con chi stampa e ottimizza i file."
    },
    {
      title: "Scalabilità progressiva",
      description: "Dalla singola unità alla piccola serie, accompagniamo ogni fase della tua crescita."
    }
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width (1040px) */}
      <div className="container-main">
        
        {/* Main Header Block using section-header pattern */}
        <div className="section-header mb-16 md:mb-20">
          {/* section-title for uniform font and size */}
          <h2 className="section-title text-4xl leading-tight">
            Il Nostro Approccio al Time-to-Market
          </h2>
          {/* section-description for body text style (12px, leading-24px) */}
          <p className="section-description max-w-[1200px] text-primary-gray/80 mt-4 leading-6">
            La velocità di iterazione è il fattore critico nello sviluppo prodotto moderno. Il nostro processo è strutturato per ridurre i tempi tra un ciclo e il successivo, consentendo al tuo team di raccogliere feedback reali e correggere la rotta prima che i costi diventino insostenibili.
          </p>
        </div>

        {/* Top Featured Grid with Icons (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-10">
          {topFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-6">
                {feature.icon}
                <h3 className="font-bold text-lg leading-tight text-black/90">
                  {feature.title}
                </h3>
              </div>
              <p className="item-description leading-relaxed text-black/80 max-w-[320px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-px bg-border-gray/30 my-20 md:my-24"></div>

        {/* Second Header Block: Perché sceglierci? */}
        <div className="section-header mb-12 md:mb-16">
          <h2 className="section-title text-3xl leading-tight">
            Perché sceglierci?
          </h2>
        </div>

        {/* Bottom Featured Grid with Arrows (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 md:mt-10">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-6">
                <HiOutlineArrowRight className="size-6 text-primary-black" />
                <h3 className="font-bold text-lg leading-tight text-black/90">
                  {feature.title}
                </h3>
              </div>
              <p className="item-description leading-relaxed text-black/80 max-w-[320px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TimeToMarketSection;