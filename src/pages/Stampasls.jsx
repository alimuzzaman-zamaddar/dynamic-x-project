import React, { useEffect, useState } from "react";
import banner from "../assets/img/stampa/Stampasls.png";
import Contact from "../components/CommonComponents/Contact";
import SlsInfoSection from "../components/PagesComponent/Stampasls/SlsInfoSection";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import SlsProsConsSection from "../components/PagesComponent/Stampasls/SlsProsConsSection";
import SlsComparisonTable from "../components/PagesComponent/Stampasls/SlsComparisonTable";
import ApplicationsSection from "../components/PagesComponent/Stampasls/ApplicationsSection";
import SlsAdvantagesSection from "../components/PagesComponent/Stampasls/SlsAdvantagesSection";
import MaterialsGridSection from "../components/PagesComponent/Stampasls/MaterialsGridSection";
import ComparisonTableSection from "../components/PagesComponent/Stampa/ComparisonTableSection";
import SlsAdvantagesSection2 from "../components/PagesComponent/Stampasls/SlsAdvantagesSection2";
import { PageLoader } from "../shared/Loader";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

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
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/stampasls`);
        const result = await response.json();
        if (result.success && result.data) {
          setCmsData(result.data);
        }
      } catch (error) {
        console.error("Error fetching SLS data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <PageLoader />;
  if (!cmsData) return null;

  const infoCards = cmsData.cose_la_tecnologia_sls?.cards?.map(card => ({
    number: card.heading,
    title: card.title,
    description: card.subtitle
  })) || [];

  const advantagesCards = cmsData.vantaggi?.cards?.map(card => ({
    title: card.title,
    description: card.subtitle
  })) || [];

  const materialsCards = cmsData.materiali_disponibili?.cards?.map(card => ({
    image: card.image_url,
    title: card.title,
    description: card.subtitle
  })) || [];

  const prosConsCards = cmsData.pro_e_contro?.cards?.map(card => ({
    title: card.title,
    points: card.description ? card.description.split("\r\n") : []
  })) || [];

  const applicationsCards = cmsData.applicazioni_principali?.cards?.map(card => ({
    title: card.title,
    description: card.description
  })) || [];

  const tableColumns = cmsData.sls_vs_altre_tecnologie_di_stampa_3d?.columns || [];
  const tableRows = cmsData.sls_vs_altre_tecnologie_di_stampa_3d?.rows?.filter(
    row => row && row.some(cell => cell !== null)
  ) || [];

  const advantages2Cards = cmsData.pronto_a_produrre_con_la_sls?.cards?.map(card => ({
    title: card.title,
    description: card.subtitle
  })) || [];

  const advantages2Buttons = cmsData.pronto_a_produrre_con_la_sls?.buttons?.map(btn => ({
    text: btn.text,
    link: btn.link
  })) || [];

  return (
    <>
      <div className="mt-10 lg:mt-15 xl:mt-25">
        <CommonBannerSection
          title={cmsData.hero?.title}
          // description="Produzione additiva professionale per parti funzionali, geometrie complesse e piccole serie senza stampi."
          image={cmsData.hero?.bg_image_url || banner}
        />
      </div>

      <SlsInfoSection
        title={cmsData.cose_la_tecnologia_sls?.title}
        description={cmsData.cose_la_tecnologia_sls?.description}
        cards={infoCards}
        mainTitle={cmsData.sinterizzazione_laser_selettiva?.title}
        mainSubtitle={cmsData.sinterizzazione_laser_selettiva?.subtitle}
        mainBtnText={cmsData.sinterizzazione_laser_selettiva?.button_text}
        mainBtnLink={cmsData.sinterizzazione_laser_selettiva?.button_link}
      />

      <SlsAdvantagesSection
        title={cmsData.vantaggi?.title}
        subtitle={cmsData.vantaggi?.subtitle}
        cards={advantagesCards}
      />

      <MaterialsGridSection
        subtitle={cmsData.materiali_disponibili?.subtitle}
        cards={materialsCards}
      />

      <SlsProsConsSection
        title={cmsData.pro_e_contro?.title}
        subtitle={cmsData.pro_e_contro?.subtitle}
        cards={prosConsCards}
      />

      <ApplicationsSection
        title={cmsData.applicazioni_principali?.title}
        subtitle={cmsData.applicazioni_principali?.subtitle}
        cards={applicationsCards}
      />

      <SlsComparisonTable
        columns={tableColumns}
        rows={tableRows}
      />

      <SlsAdvantagesSection2
        title={cmsData.pronto_a_produrre_con_la_sls?.title}
        subtitle={cmsData.pronto_a_produrre_con_la_sls?.subtitle}
        cards={advantages2Cards}
        buttons={advantages2Buttons}
      />

      <ComparisonTableSection data={tableData} categories={categories} />

      <div className="mb-6">
        <Contact />
      </div>
    </>
  );
};