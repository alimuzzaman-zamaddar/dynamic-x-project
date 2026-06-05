import React, { useEffect, useState } from 'react'
import Cosa from '../components/PagesComponent/Fashion/Cosa'
import Moda from '../components/PagesComponent/Fashion/Moda'
import Contact from "../components/CommonComponents/Contact";
import NewBanner from '../components/CommonComponents/NewBanner'
import Fashionbg from "../assets/img/bg/2026-02-20 17.43.03 1.png"
import Visione from '../components/PagesComponent/Fashion/Visione'
import TechnoloyStampa from '../components/PagesComponent/Fashion/TechnoloyStampa'
import FashionAccesories from '../components/PagesComponent/Fashion/FashionAccesories'
import { PageLoader } from '../shared/Loader';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


const Footwear = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/footwear`);
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


  const heroData = data?.data?.hero || {};
  const fashionAccesoriesData = data?.data?.fashion_design_accessori_innovativi || {};
  const cosaData = data?.data?.cosa_stampiamo || {};
  const modaData = data?.data?.materiali_per_la_moda || {};
  const technologyData = data?.data?.tecnologie_di_stampa || {};
  const visioneData = data?.data?.dai_vita_alla_tua_visione || {};


  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <NewBanner image={heroData?.bg_image_url || Fashionbg} title={heroData?.title} />
      <FashionAccesories data={fashionAccesoriesData} />
      <Cosa data={cosaData} />
      <Moda data={modaData} />
      <TechnoloyStampa data={technologyData} />
      <Visione data={visioneData} />
      <div className="pb-18">
        <Contact />
      </div>
    </>
  )
}

export default Footwear