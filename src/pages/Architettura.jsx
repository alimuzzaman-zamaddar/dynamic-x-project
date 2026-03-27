import React from "react";
import banner from "../assets/img/stampa/ARCHITETTURA.png";
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import CosaStampiamo from "../components/PagesComponent/Architettura/CosaStampiamo";
import ArchitecturalModels from "../components/PagesComponent/Architettura/ArchitecturalModels";
import RequestQuoteSection from "../components/PagesComponent/Architettura/RequestQuoteSection";
import CadToPhysicalSection from "../components/PagesComponent/Architettura/CadToPhysicalSection";
import MaterialAndTechnologySection from "../components/PagesComponent/Architettura/MaterialAndTechnologySection";
import WhyChooseUsSectionatchitettura from "../components/PagesComponent/Architettura/WhyChooseUsSectionatchitettura";

const Architettura = () => {
  return (
    <>
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
    </>
  );
};

export default Architettura;
