import React, { useEffect, useState } from "react";
import Vintagebanner from "../assets/img/bg/vintageban.png"
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import PerChiLavoriamo from "../components/PagesComponent/Vintage/PerChiLavoriamo";
import AutomotiveSection from "../components/PagesComponent/Vintage/AutomotiveSection";
import StatsSectionVintage from "../components/PagesComponent/Vintage/StatsSectionVintage";
import StartProjectSection from "../components/PagesComponent/Vintage/StartProjectSection";
import PrintingTechnologies from "../components/PagesComponent/Vintage/PrintingTechnologies";
import ComponentsStampiamoSection from "../components/PagesComponent/Vintage/ComponentsStampiamoSection";
import { PageLoader } from "../shared/Loader";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


const Vintage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/vintage`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const NewBannerData = data?.data?.hero || {};
  const AutomotiveSectionData = data?.data?.under_hero || {};
  const ProblemSectionData = data?.data?.problem_we_solve || {};
  const componentsStampiamoData = data?.data?.componenti_che_stampiamo || {};
  const PrintingTechnologiesData = data?.data?.tecnologie_di_stampa_utilizzate || {};
  const PerChiLavoriamoData = data?.data?.per_chi_lavoriamo || {};
  const statsData = data?.data?.qualita_senza_compromessi || {};
  const StartProjectData = data?.data?.inizia_il_tuo_progetto || {};



  if (loading) return <div><PageLoader /></div>;


  return (
    <>
      <NewBanner image={NewBannerData.bg_image_url || Vintagebanner} title={NewBannerData.title || "AUTOMOTIVE D’EPOCA & PARTI RARE"} />
      <AutomotiveSection auto={AutomotiveSectionData} problem={ProblemSectionData} />
      <ComponentsStampiamoSection data={componentsStampiamoData} />
      <PrintingTechnologies data={PrintingTechnologiesData} />
      <PerChiLavoriamo data={PerChiLavoriamoData} />
      <StatsSectionVintage
        heading={statsData?.title}
        description={statsData?.subtitle}
        stats={statsData}
      />
      <StartProjectSection data={StartProjectData} />
      <div className="mb-6">
        <Contact />
      </div>
    </>
  );
};

export default Vintage;
