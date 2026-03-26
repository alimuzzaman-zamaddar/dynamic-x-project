import React from "react";
import banner from "../assets/img/stampa/ARCHITETTURA.png";
import NewBanner from "../components/CommonComponents/NewBanner";
import Contact from "../components/CommonComponents/Contact";
import ArchitecturalModels from "../components/PagesComponent/Architettura/ArchitecturalModels";
import CosaStampiamo from "../components/PagesComponent/Architettura/CosaStampiamo";
import MaterialAndTechnologySection from "../components/PagesComponent/Architettura/MaterialAndTechnologySection";
import CadToPhysicalSection from "../components/PagesComponent/Architettura/CadToPhysicalSection";
import WhyChooseUsSectionatchitettura from "../components/PagesComponent/Architettura/WhyChooseUsSectionatchitettura";
import RequestQuoteSection from "../components/PagesComponent/Architettura/RequestQuoteSection";

const Architettura = () => {
  return (
    <div>
      <NewBanner title="ARCHITETTURA" image={banner} />

      <ArchitecturalModels />
      <CosaStampiamo />
      <MaterialAndTechnologySection />
      <CadToPhysicalSection />
      <WhyChooseUsSectionatchitettura />
      <RequestQuoteSection />

      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};

export default Architettura;
