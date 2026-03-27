import React from "react";
import NewBanner from "../components/CommonComponents/NewBanner";
import banner from "../assets/img/stampa/Prototyping.png";
import ConceptToProductSection from "../components/PagesComponent/Prototyping/ConceptToProductSection";
import PrintTechnologiesSection from "../components/PagesComponent/Prototyping/PrintTechnologiesSection";
import PrototypeTypesSection from "../components/PagesComponent/Prototyping/PrototypeTypesSection";
import TimeToMarketSection from "../components/PagesComponent/Prototyping/TimeToMarketSection";

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
