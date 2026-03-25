import React from "react";
import AutomotiveSection from "../components/PagesComponent/Vintage/AutomotiveSection";
import ComponentsStampiamoSection from "../components/PagesComponent/Vintage/ComponentsStampiamoSection";
import PrintingTechnologies from "../components/PagesComponent/Vintage/PrintingTechnologies";
import StatsSectionVintage from "../components/PagesComponent/Vintage/StatsSectionVintage";
import PerChiLavoriamo from "../components/PagesComponent/Vintage/PerChiLavoriamo";
import StartProjectSection from "../components/PagesComponent/Vintage/StartProjectSection";
import ComparisonTableSection from "../components/PagesComponent/Stampa/ComparisonTableSection";
import Contact from "../components/CommonComponents/Contact";
const statsData = [
  {
    value: "±0.1mm",
    label: "Tolleranza dimensionale",
    description:
      "Precisione garantita su geometrie complesse grazie alla scansione 3D ad alta risoluzione.",
  },
  {
    value: "4",
    label: "Materiali certificati",
    description:
      "ABS, ASA, Nylon e Resine castable selezionati per uso automotive professionale.",
  },
  {
    value: "2",
    label: "Tecnologie di stampa",
    description:
      "FDM e SLA per coprire ogni esigenza: da parti strutturali a dettagli ornamentali.",
  },
];

const Vintage = () => {
  return (
    <div className="">
      <AutomotiveSection />
      <ComponentsStampiamoSection />
      <PrintingTechnologies />
      <PerChiLavoriamo />
      <StatsSectionVintage
        heading="Qualità Senza Compromessi"
        description="Ogni pezzo che produciamo porta con sé decenni di storia automobilistica. Per questo il nostro standard non è semplicemente la funzionalità — è la fedeltà all'originale, resa possibile dalla tecnologia più avanzata disponibile oggi."
        stats={statsData}
      />
      <StartProjectSection />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};

export default Vintage;
