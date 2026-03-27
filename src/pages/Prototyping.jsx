import React from "react";
import banner from "../assets/img/stampa/Prototyping.png";
import NewBanner from "../components/CommonComponents/NewBanner";
import TimeToMarketSection from "../components/PagesComponent/Prototyping/TimeToMarketSection";
import PrototypeTypesSection from "../components/PagesComponent/Prototyping/PrototypeTypesSection";
import ConceptToProductSection from "../components/PagesComponent/Prototyping/ConceptToProductSection";
import PrintTechnologiesSection from "../components/PagesComponent/Prototyping/PrintTechnologiesSection";

const Prototyping = () => {
  return (
    <div>
      <NewBanner title="Prototyping" image={banner} />
      <ConceptToProductSection />
      <PrintTechnologiesSection />
      <PrototypeTypesSection />
      <TimeToMarketSection />
    </div>
  );
};

export default Prototyping;
