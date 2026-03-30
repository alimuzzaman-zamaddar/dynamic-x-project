import React from "react";
import bannerImg from "../assets/img/stampa/stampa.png";
import Contact from "../components/CommonComponents/Contact";
import StatsSection from "../components/PagesComponent/Stampa/StatsSection";
import UseCasesSection from "../components/PagesComponent/Stampa/UseCasesSection";
import MaterialsSection from "../components/PagesComponent/Stampa/MaterialsSection";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import { BenefitsSection } from "../components/PagesComponent/Stampa/BenefitsSection";
import ComparisonTableSection from "../components/PagesComponent/Stampa/ComparisonTableSection";
import FeatureHighlightsSection from "../components/PagesComponent/Stampa/FeatureHighlightsSection";
import {
  AttrezzatureIcon,
  ComponentiIcon,
  CustodieIcon,
  PrototipiIcon,
  SettingsIcon,
  SupportiIcon,
} from "../components/SvgContainer/SvgContainer1";

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
    description: (
      <>
        Tempi di produzione brevi, ideale per iterazioni veloci nel processo di
        sviluppo prodotto. La produzione tipica inizia in appena{" "}
        <span className="font-semibold">2 giorni lavorativi.</span>
      </>
    ),
  },
  {
    icon: "💰",
    title: "Convenienza",
    description:
      "Ottimizzazione dei costi per prototipi e piccoli lotti. Nessun costo di stampo o attrezzaggio: paghi solo ciò che stampi, quando ti serve.",
  },
  {
    icon: "🔧",
    title: "Versatilità Materiali",
    description:
      "Dalla plastica standard ai materiali tecnici rinforzati: PLA, ABS, PETG, Nylon, PC, TPU e fibre. Il materiale giusto per ogni esigenza applicativa.",
  },
  {
    icon: "📈",
    title: "Scalabilità",
    description:
      "Dal singolo pezzo prototipale alla micro-produzione seriale. Scala la produzione in base alle tue esigenze reali, senza vincoli di volume minimo.",
  },
];

const materialsData = [
  {
    title: "Polimeri Standard",
    image: "https://i.ibb.co.com/Kj44fSZG/Image-Polimeri-Standard.png",
    points: [
      {
        label: "PLA",
        text: "Facile da stampare, ottimo per prototipi estetici e funzionali",
      },
      {
        label: "ABS",
        text: "Resistente agli urti, adatto per parti meccaniche e involucri",
      },
      {
        label: "PETG",
        text: "Combinazione di robustezza e flessibilità, resistente all'umidità",
      },
    ],
  },
  {
    title: "Polimeri Tecnici",
    image: "https://i.ibb.co.com/XxRDtgBn/Image-Materiali-Rinforzati.png",
    points: [
      {
        label: "Nylon (PA)",
        text: "Alta resistenza all'abrasione e flessibilità",
      },
      {
        label: "ASA",
        text: "Resistenza UV, ideale per applicazioni outdoor",
      },
      {
        label: "PC (Policarbonato)",
        text: "Elevatissima resistenza termica e meccanica",
      },
      {
        label: "TPU",
        text: "Materiale flessibile per guarnizioni e parti elastiche",
      },
    ],
  },
  {
    title: "Materiali Rinforzati",
    image: "https://i.ibb.co.com/qLhN9rcP/Image-Polimeri-Tecnici.png",
    points: [
      {
        label: "Carbon Fiber Reinforced",
        text: "Rapporto resistenza/peso elevato, rigidità elevata",
      },
      {
        label: "Glass Fiber Reinforced",
        text: "Resistenza strutturale superiore, ottima stabilità dimensionale",
      },
    ],
  },
];

const useCasesData = [
  {
    icon: <PrototipiIcon />,
    title: "Prototipi Funzionali",
    description:
      "Verifica forma, fit e funzione prima di investire in stampi o attrezzature costose.",
  },
  {
    icon: <SettingsIcon />,
    title: "Parti Meccaniche Leggere",
    description:
      "Componenti strutturali ottimizzati in peso, realizzati con materiali tecnici ad alte prestazioni.",
  },
  {
    icon: <SupportiIcon />,
    title: "Supporti e Staffe Tecniche",
    description:
      "Soluzioni di montaggio personalizzate, progettate esattamente per la geometria richiesta.",
  },
  {
    icon: <ComponentiIcon />,
    title: "Componenti per Automazione",
    description:
      "Parti funzionali per sistemi automatizzati, con tolleranze precise e materiali idonei all'uso industriale.",
  },
  {
    icon: <CustodieIcon />,
    title: "Custodie e Involucri",
    description:
      "Enclosure personalizzate per elettronica, strumentazione e dispositivi su misura.",
  },
  {
    icon: <AttrezzatureIcon />,
    title: "Attrezzature Custom",
    description:
      "Dime, maschere e attrezzature di produzione realizzate rapidamente e a costi contenuti.",
  },
];

const statsData = [
  {
    value: "0,1mm",
    label: "Spessore Layer",
    description: "Risoluzione minima per dettaglio superficiale elevato",
  },
  {
    value: "±0,2mm",
    label: "Precisione Dimensionale",
    description: "Tolleranza garantita su geometrie standard",
  },
  {
    value: "7gg",
    label: "Produzione Tipica",
    description: "Tempi a partire da circa 2 giorni lavorativi",
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
export const StampaPage = () => {
  return (
    <div className="text-white ">
     <div className=" mt-10 lg:mt-15 xl:mt-25">
        <CommonBannerSection
          title="Stampa 3D FDM Professionale"
          description="Produzione rapida, accessibile e scalabile per prototipi e componenti funzali."
          image={bannerImg}
        />
      </div>
      <FeatureHighlightsSection
        heading="Tecnologia FDM: Concreta, Veloce, Versatile"
        description="La modellazione a deposizione fusa (FDM) è la soluzione ideale per realizzare parti tecniche, prototipi e piccole serie in tempi ridotti e con costi ottimizzati. Dalla fase di concept alla parte fisica, la tecnologia FDM trasforma i tuoi file digitali in componenti pronti all'uso — con precisione, rapidità e convenienza."
        items={data}
      />
      <BenefitsSection
        heading="Produzione Intelligente per parti e prodotti reali"
        description="Scegliere la tecnologia FDM significa scegliere efficienza senza rinunciare alla qualità. Ogni aspetto del processo è ottimizzato per offrire il massimo valore in termini di tempo, costo e risultato finale."
        items={benefitsData}
      />
      <MaterialsSection
        heading="Materiali Disponibili"
        description="Offriamo una gamma completa di materiali per soddisfare ogni esigenza tecnica e applicativa. Dai polimeri standard per la prototipazione rapida ai materiali tecnici rinforzati per applicazioni ad alte prestazioni — ogni progetto trova il suo materiale ideale."
        items={materialsData}
      />
      <UseCasesSection
        heading="Dove la Stampa FDM Fa la Differenza"
        description="La tecnologia FDM trova applicazione in un'ampia varietà di settori e contesti produttivi. Che tu stia sviluppando un nuovo prodotto, ottimizzando una linea di produzione o cercando parti di ricambio personalizzate, la stampa 3D FDM offre una risposta concreta e immediata."
        items={useCasesData}
      />
      <StatsSection
        heading="Precisione e Affidabilità Garantite"
        description="Le nostre macchine FDM operano con parametri di processo rigorosi per assicurare qualità costante su ogni commessa. Di seguito le specifiche tecniche di riferimento per la pianificazione del tuo progetto."
        stats={statsData}
        highlight="Volume di stampa: Variabile in base alla configurazione della macchina. Il sistema è ottimizzato per parti di piccole e medie dimensioni. Contattaci per valutare geometrie fuori standard o esigenze produttive speciali."
        footer="Ogni componente prodotto segue un flusso qualitativo strutturato: dalla verifica del file in ingresso al controllo dimensionale finale, garantiamo che ogni pezzo rispetti le specifiche concordate prima della spedizione."
      />
      <ComparisonTableSection data={tableData} categories={categories} />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};
