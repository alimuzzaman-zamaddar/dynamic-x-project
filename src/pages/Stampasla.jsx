import React from "react";
import bannerimage from "../assets/img/stampa/banner2.png";
import Contact from "../components/CommonComponents/Contact";
import CtaSection from "../components/PagesComponent/Stampasla/CtaSection";
import ProcessSection from "../components/PagesComponent/Stampasla/ProcessSection";
import ProsConsSection from "../components/PagesComponent/Stampasla/ProsConsSection";
import StatsSectionsla from "../components/PagesComponent/Stampasla/StatsSectionsla";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import WhyChooseSection from "../components/PagesComponent/Stampasla/WhyChooseSection";
import {
  IdealeIcon,
  MaterialiIcon,
  SearchIcon,
  TempiIcon,
} from "../components/SvgContainer/SvgContainer1";
import MaterialsInfoSection from "../components/PagesComponent/Stampasla/MaterialsInfoSection";
import ComparisonTableSection from "../components/PagesComponent/Stampa/ComparisonTableSection";


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
    description:
      "Ciclo produttivo completo in pochi giorni lavorativi. Dalla conferma dell'ordine alla consegna, senza ritardi inattesi.",
    icon: <TempiIcon />,
  },
  {
    title: "Ideale per Prototipi Estetici",
    description:
      "Perfetta per modelli visivi, presentazioni ai clienti e parti che richiedono finiture superficiali raffinate e un aspetto professionale.",
    icon: <IdealeIcon />,
  },

  {
    title: "Materiali Speciali Avanzati",
    description:
      "Ampia gamma di resine: trasparenti, ignifughe, ESD, simili ad ABS o nylon — per ogni applicazione tecnica e funzionale.",
    icon: <MaterialiIcon />,
  },
];

const categories = [
  { label: "Risoluzione" },
  { label: "Accuratezza" },
  { label: "Finitura Superficiale" },
  { label: "Rendimento" },
  { label: "Design Complessi" },
  { label: "Facilità di Utilizzo" },
];

const tableData = [
  {
    name: "FDM",
    subtitle: "Modellazione a Deposizione Fusa",
    color: "#2563EB",
    values: [2, 4, 2, 3, 3, 5],
    avg: 3.2,
  },
  {
    name: "SLA",
    subtitle: "Stereolitografia",
    color: "#DC2626",
    values: [5, 5, 5, 4, 4, 5],
    avg: 4.7,
  },
  {
    name: "SLS",
    subtitle: "Sinterizzazione Laser Selettiva",
    color: "#16A34A",
    values: [4, 5, 4, 5, 5, 4],
    avg: 4.5,
  },
];

export const Stampasla = () => {
  return (
    <div>
<div className=" mt-10 lg:mt-15 xl:mt-25">
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

      <MaterialsInfoSection />
      <ProsConsSection />
      <ComparisonTableSection data={tableData} categories={categories} />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};
