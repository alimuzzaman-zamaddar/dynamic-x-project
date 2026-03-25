import React from "react";
import StatsSectionsla from "../components/PagesComponent/Stampasla/StatsSectionsla";
import bannerimage from "../assets/img/stampa/banner2.png";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import WhyChooseSection from "../components/PagesComponent/Stampasla/WhyChooseSection";
import { IdealeIcon, MaterialiIcon, SearchIcon, TempiIcon } from "../components/SvgContainer/SvgContainer1";
import ProcessSection from "../components/PagesComponent/Stampasla/ProcessSection";
import CtaSection from "../components/PagesComponent/Stampasla/CtaSection";
const statsData = [
  {
    value: "0.025mm",
    label: "Precisione degli strati",
    description: "Dettaglio superficiale fine e accurato",
  },
  {
    value: "~7gg",
    label: "Tempi di produzione",
    description: "Dalla conferma alla spedizione",
  },
  {
    value: "5+",
    label: "Famiglie di materiali",
    description: "Resine speciali per ogni esigenza",
  },
  {
    value: "100%5+",
    label: "Tracciabilità spedizione",
    description: "Consegna affidabile e monitorata",
  },
];

const features = [
  {
    title: "Risoluzione e Dettagli Elevati",
    description:
      "Superfici lisce, spigoli nitidi e dettagli fini che altre tecnologie di stampa 3D faticano a eguagliare. Ideale per geometrie complesse e",
    icon: <SearchIcon />,
  },
    {
    title: "Tempi di Produzione Rapidi",
    description: "Ciclo produttivo completo in pochi giorni lavorativi. Dalla conferma dell'ordine alla consegna, senza ritardi inattesi.",
    icon: <TempiIcon />,
  },
  {
    title: "Ideale per Prototipi Estetici",
    description:
      "Perfetta per modelli visivi, presentazioni ai clienti e parti che richiedono finiture superficiali raffinate e un aspetto professionale.",
    icon: <IdealeIcon   />,
  },

  {
    title: "Materiali Speciali Avanzati",
    description: "Ampia gamma di resine: trasparenti, ignifughe, ESD, simili ad ABS o nylon — per ogni applicazione tecnica e funzionale.",
    icon: <MaterialiIcon />,
  },
];
export const Stampasla = () => {
  return (
    <div>
      <div className="px-4 xl:px-0 mt-34">
        <CommonBannerSection
          title="Stampa 3D SLA ad alta precisione"
          description="Precisione, superfici lisce e dettagli fino all’estremo."
          image={bannerimage}
        />
      </div>
      <StatsSectionsla
        heading="Stereolitografia SLA: Stampa 3D ad Alta Risoluzione"
        description="La stereolitografia (SLA) è una delle tecnologie di stampa 3D più avanzate disponibili oggi. Utilizzando resine fotosensibili indurite con luce UV, la SLA produce parti con una risoluzione e una finitura superficiale straordinariamente elevate — ideali per prototipazione ad alta definizione, modelli visivi e componenti con dettagli complessi che altre tecnologie faticano a replicare."
        stats={statsData}
      />

      <WhyChooseSection
        title="Perché Scegliere la Stampa SLA"
        description="La stereolitografia offre un equilibrio unico tra precisione..."
        features={features}
      />
      <ProcessSection />
      <CtaSection />
    </div>
  );
};
