import React from "react";
import SlsAdvantagesSectionDrone from "../components/PagesComponent/Drone/SlsAdvantagesSectionDrone";
import MaterialsGridSectionDrone from "../components/PagesComponent/Drone/MaterialsGridSectionDrone";
import PrintingTechnologiesDrone from "../components/PagesComponent/Drone/PrintingTechnologiesDrone";
import SlsAdvantagesSectionDrone2 from "../components/PagesComponent/Drone/SlsAdvantagesSectionDrone2";
import TechnologiesSectionDrone from "../components/PagesComponent/Drone/TechnologiesSectionDrone";
import WhyChooseSectionDrone from "../components/PagesComponent/Drone/WhyChooseSectionDrone";
import StartYourProject from "../components/PagesComponent/Drone/StartYourProject";
import Contact from "../components/CommonComponents/Contact";

export const Drone = () => {
  return (
    <div className="">
      <SlsAdvantagesSectionDrone />
      <MaterialsGridSectionDrone />
      <PrintingTechnologiesDrone />
      <SlsAdvantagesSectionDrone2 />
      <TechnologiesSectionDrone />
      <WhyChooseSectionDrone />
      <StartYourProject />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};
