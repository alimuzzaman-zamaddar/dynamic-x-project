import React, { useEffect, useState } from "react";
import banner from "../assets/img/stampa/Prototyping.png";
import NewBanner from "../components/CommonComponents/NewBanner";
import ConceptToProductSection from "../components/PagesComponent/Prototyping/ConceptToProductSection";
import PrintTechnologiesSection from "../components/PagesComponent/Prototyping/PrintTechnologiesSection";
import PrototypeTypesSection from "../components/PagesComponent/Prototyping/PrototypeTypesSection";
import TimeToMarketSection from "../components/PagesComponent/Prototyping/TimeToMarketSection";
import PrototypingCosa from "../components/PagesComponent/Prototyping/PrototypingCosa";
import ProductDevelopmentCTA from "../components/PagesComponent/Prototyping/ProductDevelopmentCTA";
import Contact from "../components/CommonComponents/Contact";
import { PageLoader } from '../shared/Loader';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const Prototyping = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/prototyping`);
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

  if (loading) {
    return <PageLoader />;
  }

  const heroData = data?.data?.hero || {};
  const conceptToProductData = data?.data?.dal_concept_al_prodotto_finito || {};
  const cosaRealizziamoData = data?.data?.cosa_realizziamo || {};
  const printTechnologiesData = data?.data?.tecnologie_di_stampa || {};
  const timeToMarketData = data?.data?.il_nostro_approccio_al_time_to_market || {};
  const percheSceglierciData = data?.data?.perche_sceglierci || {};
  const prontiSviluppareData = data?.data?.pronti_a_sviluppare_il_tuo_prodotto || {};

  return (
    <div>
      <NewBanner title={heroData?.title} image={heroData?.bg_image_url || banner} />
      <ConceptToProductSection data={conceptToProductData} />
      <PrototypingCosa data={cosaRealizziamoData} />
      <PrintTechnologiesSection data={printTechnologiesData} />
      <PrototypeTypesSection data={percheSceglierciData} />
      <TimeToMarketSection data={timeToMarketData} />
      <ProductDevelopmentCTA data={prontiSviluppareData} />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};

export default Prototyping;