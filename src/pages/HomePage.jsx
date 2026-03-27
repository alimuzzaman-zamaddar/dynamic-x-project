import React from "react";
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
