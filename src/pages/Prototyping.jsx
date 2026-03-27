import React from "react";
import banner from "../assets/img/stampa/Prototyping.png";
import NewBanner from "../components/CommonComponents/NewBanner";
import TimeToMarketSection from "../components/PagesComponent/Prototyping/TimeToMarketSection";
import PrototypeTypesSection from "../components/PagesComponent/Prototyping/PrototypeTypesSection";
import ConceptToProductSection from "../components/PagesComponent/Prototyping/ConceptToProductSection";
import PrintTechnologiesSection from "../components/PagesComponent/Prototyping/PrintTechnologiesSection";
import PrototypeTypesSection from "../components/PagesComponent/Prototyping/PrototypeTypesSection";
import TimeToMarketSection from "../components/PagesComponent/Prototyping/TimeToMarketSection";
import PrototypingCosa from "../components/PagesComponent/Prototyping/PrototypingCosa";
import ProductDevelopmentCTA from "../components/PagesComponent/Prototyping/ProductDevelopmentCTA";
import Contact from "../components/CommonComponents/Contact";

const Prototyping = () => {
  return (
    <div>
      <NewBanner title="Prototyping" image={banner} />
      <ConceptToProductSection />
      <PrototypingCosa />
      <PrintTechnologiesSection />
      <PrototypeTypesSection />
      <TimeToMarketSection />
      <ProductDevelopmentCTA />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};

export default Prototyping;
