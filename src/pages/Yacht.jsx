import React from "react";
import banner from "../assets/img/stampa/Yacht.png";
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import Componenti from "../components/PagesComponent/Yacht/Componenti";
import WhyChooseUsSection from "../components/PagesComponent/Yacht/WhyChooseUsSection";
import TechnologiesSection from "../components/PagesComponent/Yacht/TechnologiesSection";
import YachtComponentSection from "../components/PagesComponent/Yacht/YachtComponentSection";
import CertifiedMaterialsSection from "../components/PagesComponent/Yacht/CertifiedMaterialsSection";

export const Yacht = () => {
  return (
    <div>
      <NewBanner title="Yacht & Componenti" image={banner} />
      <YachtComponentSection />
      <Componenti />
      <CertifiedMaterialsSection />
      <TechnologiesSection />
      <WhyChooseUsSection />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};
