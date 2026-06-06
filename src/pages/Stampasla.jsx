import React, { useEffect, useState } from "react";
import Contact from "../components/CommonComponents/Contact";
import bannerimage from "../assets/img/stampa/banner2.png";
import CtaSection from "../components/PagesComponent/Stampasla/CtaSection";
import ProcessSection from "../components/PagesComponent/Stampasla/ProcessSection";
import ProsConsSection from "../components/PagesComponent/Stampasla/ProsConsSection";
import StatsSectionsla from "../components/PagesComponent/Stampasla/StatsSectionsla";
import CommonBannerSection from "../components/CommonComponents/CommonBannerSection";
import WhyChooseSection from "../components/PagesComponent/Stampasla/WhyChooseSection";
import MaterialsInfoSection from "../components/PagesComponent/Stampasla/MaterialsInfoSection";
import ComparisonTableSection from "../components/PagesComponent/Stampa/ComparisonTableSection";
import {
  IdealeIcon,
  MaterialiIcon,
  SearchIcon,
  TempiIcon,
} from "../components/SvgContainer/SvgContainer1";
import { PageLoader } from "../shared/Loader";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const iconMapping = {
  "Risoluzione e Dettagli Elevati": <SearchIcon />,
  "Tempi di Produzione Rapidi": <TempiIcon />,
  "Ideale per Prototipi Estetici": <IdealeIcon />,
  "Materiali Speciali Avanzati": <MaterialiIcon />,
};

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
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/stampasla`);
        const result = await response.json();
        if (result.success && result.data) {
          setCmsData(result.data);
        }
      } catch (error) {
        console.error("Error fetching SLA data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <PageLoader />;
  if (!cmsData) return null;

  const statsItems = cmsData.stereolitografia_sla?.cards?.map((card) => ({
    value: card.num,
    label: card.title,
    description: card.subtitle,
  })) || [];

  const featuresItems = cmsData.vantaggi?.cards?.map((card) => ({
    title: card.title,
    description: card.subtitle,
    icon: iconMapping[card.title] || <SearchIcon />,
  })) || [];

  const processSteps = cmsData.come_funziona?.steps?.map((step) => ({
    title: step.title,
    subtitle: step.subtitle,
  })) || [];

  const ctaButtons = cmsData.pronto_a_stampare?.buttons?.map((btn) => ({
    text: btn.text,
    link: btn.link,
  })) || [];

  const materialsItems = cmsData.materiali_disponibili?.items?.map((item) => ({
    title: item.title,
    subtitle: item.subtitle,
  })) || [];

  const prosConsCards = cmsData.pro_e_contro?.cards?.map((card) => ({
    title: card.title,
    points: card.description ? card.description.split("\r\n") : [],
  })) || [];

  return (
    <div>
      <div className="mt-10 lg:mt-15 xl:mt-25">
        <CommonBannerSection
          title={cmsData.hero?.title}
          image={cmsData.hero?.bg_image_url || bannerimage}
        />
      </div>

      <StatsSectionsla
        heading={cmsData.stereolitografia_sla?.title}
        description={cmsData.stereolitografia_sla?.subtitle}
      stats={statsItems}
      />

      <WhyChooseSection
        title={cmsData.vantaggi?.title}
        description={cmsData.vantaggi?.subtitle}
        features={featuresItems}
      />

      <ProcessSection
        heading={cmsData.come_funziona?.heading}
        title={cmsData.come_funziona?.title}
        subtitle={cmsData.come_funziona?.subtitle}
        steps={processSteps}
      />

      <CtaSection
        title={cmsData.pronto_a_stampare?.title}
        subtitle={cmsData.pronto_a_stampare?.subtitle}
        buttons={ctaButtons}
      />

      <MaterialsInfoSection
        heading={cmsData.materiali_disponibili?.heading}
        title={cmsData.materiali_disponibili?.title}
        subtitle={cmsData.materiali_disponibili?.subtitle}
        items={materialsItems}
      />

      <ProsConsSection
        title={cmsData.pro_e_contro?.title}
        subtitle={cmsData.pro_e_contro?.subtitle}
        cards={prosConsCards}
      />

      <ComparisonTableSection data={tableData} categories={categories} />

      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};