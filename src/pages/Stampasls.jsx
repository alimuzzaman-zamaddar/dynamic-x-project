import React from "react";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import banner from "../assets/img/stampa/Stampasls.png";
import SlsInfoSection from "../components/PagesComponent/Stampasls/SlsInfoSection";
import SlsAdvantagesSection from "../components/PagesComponent/Stampasls/SlsAdvantagesSection";
import MaterialsGridSection from "../components/PagesComponent/Stampasls/MaterialsGridSection";
import SlsAdvantagesSection2 from "../components/PagesComponent/Stampasls/SlsAdvantagesSection2";
import SlsProsConsSection from "../components/PagesComponent/Stampasls/SlsProsConsSection";
import ApplicationsSection from "../components/PagesComponent/Stampasls/ApplicationsSection";
import SlsComparisonTable from "../components/PagesComponent/Stampasls/SlsComparisonTable";
import Contact from "../components/CommonComponents/Contact";
import ComparisonTableSection from "../components/PagesComponent/Stampa/ComparisonTableSection";
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
export const Stampasls = () => {
  return (
    <div>
      <div className="px-4 xl:px-0 mt-34">
        <CommonBannerSection
          title="banner"
          description="Produzione additiva professionale per parti funzionali, geometrie complesse e piccole serie senza stampi."
          image={banner}
        />
      </div>
      <SlsInfoSection />
      <SlsAdvantagesSection />
      <MaterialsGridSection />

      <SlsProsConsSection />
      <ApplicationsSection />
      <SlsComparisonTable />
      <SlsAdvantagesSection2 />
      <ComparisonTableSection data={tableData} categories={categories} />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};
