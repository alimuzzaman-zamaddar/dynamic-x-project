import React from "react";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import bannerImg from "../assets/img/stampa/stampa.png";
import FeatureHighlightsSection from "../components/PagesComponent/Stampa/FeatureHighlightsSection";
import { BenefitsSection } from "../components/PagesComponent/Stampa/BenefitsSection";

const data = [
  {
    title: "Prototipazione Rapida",
    description:
      "Dal file al prototipo fisico in tempi record, perfetto per cicli di sviluppo iterativi.",
  },
  {
    title: "Test Funzionali",
    description:
      "Parti stampate con materiali tecnici adatti alla verifica funzionale e strutturale.",
  },
  {
    title: "Piccoli Lotti",
    description:
      "Produzione flessibile di serie ridotte senza costi di attrezzaggio o stampi.",
  },
  {
    title: "Parti Customizzate",
    description:
      "Geometrie complesse e design su misura realizzati senza compromessi.",
  },
];

const benefitsData = [
  {
    icon: "⚡",
    title: "Rapidità",
    description:
      "Tempi di produzione brevi, ideale per iterazioni veloci nel processo di sviluppo prodotto...",
  },
  {
    icon: "💰",
    title: "Convenienza",
    description: "Ottimizzazione dei costi per prototipi e piccoli lotti...",
  },
  {
    icon: "🔧",
    title: "Versatilità Materiali",
    description: "Dalla plastica standard ai materiali tecnici rinforzati...",
  },
  {
    icon: "📈",
    title: "Scalabilità",
    description:
      "Dal singolo pezzo prototipale alla micro-produzione seriale...",
  },
];

export const StampaPage = () => {
  return (
    <div className="text-white pt-30">
      <CommonBannerSection
        title="Stampa 3D FDM Professionale"
        description="Produzione rapida, accessibile e scalabile per prototipi e componenti funzali."
        image={bannerImg}
      />
      <FeatureHighlightsSection
        heading="Tecnologia FDM: Concreta, Veloce, Versatile"
        description="La modellazione a deposizione fusa (FDM) è la soluzione ideale per realizzare parti tecniche, prototipi e piccole serie in tempi ridotti e con costi ottimizzati. Dalla fase di concept alla parte fisica, la tecnologia FDM trasforma i tuoi file digitali in componenti pronti all'uso — con precisione, rapidità e convenienza."
        items={data}
      />
      <BenefitsSection
        heading="Produzione Intelligente per parti e prodotti reali"
        description="Scegliere la tecnologia FDM significa scegliere efficienza..."
        items={benefitsData}
      />
      ; ;
    </div>
  );
};
