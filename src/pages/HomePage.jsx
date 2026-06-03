import React, { useState, useEffect } from "react";
import Contact from "../components/CommonComponents/Contact";
import HomeHero from "../components/PagesComponent/HomPage/HomeHero";
import Services from "../components/PagesComponent/HomPage/Services";
import BioStamp from "../components/PagesComponent/HomPage/BioStamp";
import Materials from "../components/PagesComponent/HomPage/Materials";
import Technologies from "../components/PagesComponent/HomPage/Technologies";
import CategorySection from "../components/PagesComponent/HomPage/CategorySection";
import UploadYourDesign from "../components/PagesComponent/HomPage/UploadYourDesign";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white gap-6">
    <div className="relative flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-black/10 absolute" />
      <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-black animate-spin absolute" />
      <div className="w-3 h-3 rounded-full bg-black" />
    </div>

    <div className="flex flex-col items-center gap-1">
      <span className="text-black font-semibold tracking-widest text-sm uppercase">
        DynamicsX
      </span>
      <div className="w-32 h-0.5 bg-black/10 rounded-full overflow-hidden mt-1">
        <div className="h-full bg-black rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
    </div>

    <style>{`
      @keyframes loading {
        0%   { width: 0%;   margin-left: 0; }
        50%  { width: 60%;  margin-left: 20%; }
        100% { width: 0%;   margin-left: 100%; }
      }
    `}</style>
  </div>
);

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