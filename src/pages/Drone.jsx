import React from "react";
import DroneBAnner from "../assets/img/bg/droneban.png"
import Contact from "../components/CommonComponents/Contact";
import NewBanner from "../components/CommonComponents/NewBanner";
import StartYourProject from "../components/PagesComponent/Drone/StartYourProject";
import WhyChooseSectionDrone from "../components/PagesComponent/Drone/WhyChooseSectionDrone";
import TechnologiesSectionDrone from "../components/PagesComponent/Drone/TechnologiesSectionDrone";
import SlsAdvantagesSectionDrone from "../components/PagesComponent/Drone/SlsAdvantagesSectionDrone";
import MaterialsGridSectionDrone from "../components/PagesComponent/Drone/MaterialsGridSectionDrone";
import PrintingTechnologiesDrone from "../components/PagesComponent/Drone/PrintingTechnologiesDrone";
import SlsAdvantagesSectionDrone2 from "../components/PagesComponent/Drone/SlsAdvantagesSectionDrone2";

export const Drone = () => {
  return (
    <>
      <NewBanner image={DroneBAnner} title={"DRONI & UAV COMPONENTI"} />
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
    </>
  );
};
