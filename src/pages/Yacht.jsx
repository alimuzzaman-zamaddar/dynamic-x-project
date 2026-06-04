import React, { useEffect, useState } from "react";
import banner from "../assets/img/stampa/Yacht.png";
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import Componenti from "../components/PagesComponent/Yacht/Componenti";
import WhyChooseUsSection from "../components/PagesComponent/Yacht/WhyChooseUsSection";
import TechnologiesSection from "../components/PagesComponent/Yacht/TechnologiesSection";
import YachtComponentSection from "../components/PagesComponent/Yacht/YachtComponentSection";
import CertifiedMaterialsSection from "../components/PagesComponent/Yacht/CertifiedMaterialsSection";
import { PageLoader } from "../shared/Loader";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const Yacht = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/yacht`);
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
  const ComponentiData = data?.data?.under_hero || {};
  const componenti = data?.data?.componenti_per_ambienti_marini || {};
  const CertifiedMaterialsData = data?.data?.materiali_certificati_per_ambiente_marino || {};
  const TechnologiesData = data?.data?.tecnologie_di_stampa_disponibili || {};
  const WhyChooseUsData = data?.data?.perche_sceglierci || {};

  if (loading) return <div><PageLoader /></div>;


  return (
    <div>
      <NewBanner title={NewBannerData.title} image={NewBannerData.bg_image_url || banner} />
      <YachtComponentSection data={ComponentiData} />
      <Componenti data={componenti} />
      <CertifiedMaterialsSection data={CertifiedMaterialsData} />
      <TechnologiesSection data={TechnologiesData} />
      <WhyChooseUsSection data={WhyChooseUsData} />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};
