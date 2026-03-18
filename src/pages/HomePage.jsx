import React from "react";
import Contact from "../components/CommonComponents/Contact";
import HomeHero from "../components/PagesComponent/HomPage/HomeHero";
import About from "../components/PagesComponent/HomPage/About";
import WhyChooseUs from "../components/PagesComponent/HomPage/WhyChooseUs";
import UploadYourDesign from "../components/PagesComponent/HomPage/UploadYourDesign";
import CategorySection from "../components/PagesComponent/HomPage/CategorySection";
import Technologies from "../components/PagesComponent/HomPage/Technologies";
import Services from "../components/PagesComponent/HomPage/Services";
import Materials from "../components/PagesComponent/HomPage/Materials";
import BioStamp from "../components/PagesComponent/HomPage/BioStamp";
import RealStories from "../components/PagesComponent/HomPage/RealStories";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <UploadYourDesign />
      <CategorySection />
      <Technologies />
      <Services />
      <Materials />
      <BioStamp />
      {/* <RealStories /> */}
      <Contact />
      <About />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
