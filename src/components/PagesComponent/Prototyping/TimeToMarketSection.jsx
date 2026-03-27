import React from "react";

import { IoArrowForward } from "react-icons/io5";
import { TargetIcon , HiOutlineLightningBolt, HiOutlineBeaker} from "../../SvgContainer/SvgContainer1";

const TimeToMarketSection = () => {
  const topFeatures = [
    {
      icon: <HiOutlineLightningBolt />,
      title: "Iterazione Rapida",
      description:
        "Dalle 24 alle 72 ore dalla conferma del file al prototipo fisico. Ogni ciclo di feedback diventa un nuovo punto di partenza per migliorare.",
    },
    {
      icon: <HiOutlineBeaker />,
      title: "Testing Reale",
      description:
        "Prototipi progettati per essere testati in condizioni operative reali, non solo valutati visivamente. I dati raccolti guidano le decisioni di design.",
    },
    {
      icon: <TargetIcon />,
      title: "Time-to-Market Accelerato",
      description:
        "Riduciamo il gap tra concept e lancio commerciale, supportando startup e team R&D nel passaggio dalla prototipazione alla piccola serie in modo fluido e controllato.",
    },
  ];

  const bottomFeatures = [
    {
      title: "Consulenza tecnica inclusa",
      description:
        "Ti aiutiamo a scegliere tecnologia e materiale ottimali per il tuo caso d'uso specifico.",
    },
    {
      title: "Tempi certi e comunicazione diretta",
      description:
        "Nessun intermediario: lavori direttamente con chi stampa e ottimizza i file.",
    },
    {
      title: "Scalabilità progressiva",
      description:
        "Dalla singola unità alla piccola serie, accompagniamo ogni fase della tua crescita.",
    },
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width (1040px) */}
      <div className="container-main">
        {/* Main Header Block using section-header pattern */}
        <div className="section-header mb-16 md:mb-20">
          {/* section-title for uniform font and size */}
          <h2 className="section-title">
            Il Nostro Approccio al Time-to-Market
          </h2>
          {/* section-description for body text style (12px, leading-24px) */}
          <p className="section-description">
            La velocità di iterazione è il fattore critico nello sviluppo
            prodotto moderno. Il nostro processo è strutturato per ridurre i
            tempi tra un ciclo e il successivo, consentendo al tuo team di
            raccogliere feedback reali e correggere la rotta prima che i costi
            diventino insostenibili.
          </p>
        </div>

        {/* Top Featured Grid with Icons (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-10">
          {topFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-6">
                {feature.icon}
                <h3 className="font-semibold text-black/90">{feature.title}</h3>
              </div>
              <p className="item-description leading-relaxed text-black/80 max-w-[320px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Header Block: Perché sceglierci? */}
        <div className=" mt-8 md:mt-12 mb-6">
          <h2 className="text-2xl font-semibold ">Perché sceglierci?</h2>
        </div>

        {/* Bottom Featured Grid with Arrows (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {bottomFeatures.map((feature, index) => (
            <div className="flex gap-3">
              <IoArrowForward className="mt-1 text-lg" />
              <div key={index} className="flex flex-col gap-2 text-left">
                <div className="flex items-center gap-6">
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="item-description leading-relaxed text-black/80 max-w-[320px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeToMarketSection;
