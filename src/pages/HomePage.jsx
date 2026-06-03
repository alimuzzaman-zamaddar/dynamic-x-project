import React, { useState, useEffect } from "react"; // 👈 import useEffect
import Contact from "../components/CommonComponents/Contact";
import About from "../components/PagesComponent/HomPage/About";
import HomeHero from "../components/PagesComponent/HomPage/HomeHero";
import Services from "../components/PagesComponent/HomPage/Services";
import BioStamp from "../components/PagesComponent/HomPage/BioStamp";
import Materials from "../components/PagesComponent/HomPage/Materials";
import WhyChooseUs from "../components/PagesComponent/HomPage/WhyChooseUs";
import Technologies from "../components/PagesComponent/HomPage/Technologies";
import CategorySection from "../components/PagesComponent/HomPage/CategorySection";
import UploadYourDesign from "../components/PagesComponent/HomPage/UploadYourDesign";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/home`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const HeroData = data?.data?.hero || {};
  const CategoryData = data?.data?.under_hero || [];


  return (
    <>
      <HomeHero data={HeroData} />
      <UploadYourDesign data={CategoryData} />
      <CategorySection />
      <Technologies />
      <Services />
      <Materials />
      <BioStamp />
      <div className="pb-20">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;