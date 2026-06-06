import React, { useEffect, useState } from "react";
import Contact from "../components/CommonComponents/Contact";
import bannerImg from "../assets/img/stampa/stampa.png";
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
import { PageLoader } from "../shared/Loader";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const iconMapping = {
  "Prototipi Funzionali": <PrototipiIcon />,
  "Parti Meccaniche Leggere": <SettingsIcon />,
  "Supporti e Staffe Tecniche": <SupportiIcon />,
  "Componenti per Automazione": <ComponentiIcon />,
  "Custodie e Involucri": <CustodieIcon />,
  "Attrezzature Custom": <AttrezzatureIcon />,
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

export const StampaPage = () => {
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/stampa`);
        const result = await response.json();
        if (result.success && result.data) {
          setCmsData(result.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <PageLoader />;
  if (!cmsData) return null;

  const featureHighlightsItems = cmsData.technology_fdm?.cards?.map(card => ({
    title: card.title,
    description: card.subtitle
  })) || [];

  const benefitsItems = cmsData.produzione_intelligente?.items?.map(item => ({
    icon: item.title.split(' ')[0],
    title: item.title.replace(/^[^ ]+\s+/, ''),
    description: item.subtitle
  })) || [];

  const materialsItems = cmsData.materiali_disponibili?.cards?.map(card => ({
    title: card.title,
    image: card.image_url,
    points: card.description ? card.description.split('\r\n\r\n').map(line => {
      const [label, ...textParts] = line.split(' — ');
      return {
        label: label?.trim() || '',
        text: textParts.join(' — ')?.trim() || ''
      };
    }) : []
  })) || [];

  const useCasesItems = cmsData.dove_la_stampa_fdm_fa_la_differenza?.cards?.map(card => ({
    icon: iconMapping[card.title] || null,
    title: card.title,
    description: card.subtitle
  })) || [];

  const statsItems = cmsData.precisione_e_affidabilita_garantite?.cards?.map(card => ({
    value: card.num,
    label: card.title,
    description: card.subtitle
  })) || [];

  return (
    <div className="text-white">
      <div className="mt-10 lg:mt-15 xl:mt-25">
        <CommonBannerSection
          title={cmsData.hero?.title}
          image={cmsData.hero?.bg_image_url || bannerImg}
        />
      </div>

      <FeatureHighlightsSection
        heading={cmsData.technology_fdm?.title}
        description={cmsData.technology_fdm?.subtitle}
        items={featureHighlightsItems}
      />

      <BenefitsSection
        heading={cmsData.produzione_intelligente?.title}
        description={cmsData.produzione_intelligente?.subtitle}
        items={benefitsItems}
      />

      <MaterialsSection
        heading={cmsData.materiali_disponibili?.title}
        description={cmsData.materiali_disponibili?.subtitle}
        items={materialsItems}
      />

      <UseCasesSection
        heading={cmsData.dove_la_stampa_fdm_fa_la_differenza?.title}
        description={cmsData.dove_la_stampa_fdm_fa_la_differenza?.subtitle}
        items={useCasesItems}
      />

      <StatsSection
        heading={cmsData.precisione_e_affidabilita_garantite?.title}
        description={cmsData.precisione_e_affidabilita_garantite?.subtitle}
        stats={statsItems}
        highlight={cmsData.precisione_e_affidabilita_garantite?.footer_texts?.[0]}
        footer={cmsData.precisione_e_affidabilita_garantite?.footer_texts?.[1]}
      />

      <ComparisonTableSection data={tableData} categories={categories} />

      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};