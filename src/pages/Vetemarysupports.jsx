import React from "react";
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import banner from "../assets/img/stampa/SUPPORTIVETERINARI.png";
import WhyChooseDevices from "../components/PagesComponent/Vetemarysupports/WhyChooseDevices";
import CollaborazioneSection from "../components/PagesComponent/Vetemarysupports/CollaborazioneSection";
import VetemarysupportsModals from "../components/PagesComponent/Vetemarysupports/VetemarysupportsModals";
import PrintTechnologiesSection from "../components/PagesComponent/Vetemarysupports/PrintTechnologiesSection";
import HighQualityMaterialsSection from "../components/PagesComponent/Vetemarysupports/HighQualityMaterialsSection";

const Vetemarysupports = () => {
  return (
    <>
      <NewBanner title="SUPPORTI VETERINARI" image={banner} />
      <VetemarysupportsModals />
      <HighQualityMaterialsSection />
      <PrintTechnologiesSection />
      <WhyChooseDevices />
      <CollaborazioneSection />
      <div className="mb-6">
        <Contact />
      </div>
    </>
  );
};

export default Vetemarysupports;
