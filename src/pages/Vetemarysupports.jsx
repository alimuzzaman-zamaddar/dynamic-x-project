import React from "react";
import VetemarysupportsModals from "../components/PagesComponent/Vetemarysupports/VetemarysupportsModals";
import NewBanner from "../components/CommonComponents/NewBanner";
import banner from "../assets/img/stampa/SUPPORTIVETERINARI.png";
import HighQualityMaterialsSection from "../components/PagesComponent/Vetemarysupports/HighQualityMaterialsSection";
import PrintTechnologiesSection from "../components/PagesComponent/Vetemarysupports/PrintTechnologiesSection";
import CollaborazioneSection from "../components/PagesComponent/Vetemarysupports/CollaborazioneSection";
import WhyChooseDevices from "../components/PagesComponent/Vetemarysupports/WhyChooseDevices";

const Vetemarysupports = () => {
  return (
    <div>
      <NewBanner title="SUPPORTI VETERINARI" image={banner} />
      <VetemarysupportsModals />
      <HighQualityMaterialsSection />
      <PrintTechnologiesSection />
      <WhyChooseDevices />
      <CollaborazioneSection />
    </div>
  );
};

export default Vetemarysupports;
