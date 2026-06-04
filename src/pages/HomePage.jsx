import React, { useState, useEffect } from "react";
import Contact from "../components/CommonComponents/Contact";
import HomeHero from "../components/PagesComponent/HomPage/HomeHero";
import Services from "../components/PagesComponent/HomPage/Services";
import BioStamp from "../components/PagesComponent/HomPage/BioStamp";
import Materials from "../components/PagesComponent/HomPage/Materials";
import Technologies from "../components/PagesComponent/HomPage/Technologies";
import CategorySection from "../components/PagesComponent/HomPage/CategorySection";
import UploadYourDesign from "../components/PagesComponent/HomPage/UploadYourDesign";
import { PageLoader } from "../shared/Loader";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';



const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/home`);
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

  const HeroData = data?.data?.hero || {};
  const UnderHeroData = data?.data?.under_hero || {};
  const CategoryData = data?.data?.category || {};
  const TechnologiesData = data?.data?.technology || {};
  const ServicesData = data?.data?.service || {};
  const BioStampData = data?.data?.bottom_hero || {};

  if (loading) return <PageLoader />; 

  return (
    <>
      <HomeHero data={HeroData} />
      <UploadYourDesign data={UnderHeroData} />
      <CategorySection data={CategoryData} />
      <Technologies data={TechnologiesData} />
      <Services data={ServicesData} />
      <Materials />
      <BioStamp data={BioStampData} />
      <div className="pb-20">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;