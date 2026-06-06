import React, { useEffect, useState } from "react";
import banner from "../assets/img/stampa/ARCHITETTURA.png";
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import CosaStampiamo from "../components/PagesComponent/Architettura/CosaStampiamo";
import ArchitecturalModels from "../components/PagesComponent/Architettura/ArchitecturalModels";
import RequestQuoteSection from "../components/PagesComponent/Architettura/RequestQuoteSection";
import CadToPhysicalSection from "../components/PagesComponent/Architettura/CadToPhysicalSection";
import MaterialAndTechnologySection from "../components/PagesComponent/Architettura/MaterialAndTechnologySection";
import WhyChooseUsSectionatchitettura from "../components/PagesComponent/Architettura/WhyChooseUsSectionatchitettura";
import { PageLoader } from '../shared/Loader';
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const Architettura = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/architettura`);
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
  const ArchitecturalModelsData = data?.data?.modelli_architettonici_ad_alta_definizione || {};
  const CosaStampiamoData = data?.data?.cosa_stampiamo || {};
  const MaterialAndTechnologySectionData = data?.data?.materiali_e_tecnologie_di_stampa || {};
  const CadToPhysicalSectionData = data?.data?.dal_file_cad_al_modello_fisico || {};
  const WhyChooseUsSectionatchitetturaData = data?.data?.perche_scegliere_i_nostri_modelli || {};
  const RequestQuoteSectionData = data?.data?.richiedi_un_preventivo || {};


  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NewBanner title={NewBannerData.title} image={NewBannerData.image || banner} />
      <ArchitecturalModels data={ArchitecturalModelsData} />
      <CosaStampiamo data={CosaStampiamoData} />
      <MaterialAndTechnologySection data={MaterialAndTechnologySectionData} />
      <CadToPhysicalSection data={CadToPhysicalSectionData} />
      <WhyChooseUsSectionatchitettura data={WhyChooseUsSectionatchitetturaData} />
      <RequestQuoteSection data={RequestQuoteSectionData} />
      <div className="mb-6">
        <Contact />
      </div>
    </>
  );
};

export default Architettura;
