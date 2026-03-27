import React from "react";
import TwoDThreeDProcessSection from "../components/PagesComponent/TwoDThreeD/TwoDThreeDProcessSection";
import NewBanner from "../components/CommonComponents/NewBanner";
import banner from "../assets/img/CosaRealizziamo/ProcessSection.png";
import HeroSection from "../components/PagesComponent/TwoDThreeD/HeroSection";
import PreviewCapabilitiesSection from "../components/PagesComponent/TwoDThreeD/PreviewCapabilitiesSection";
import FuturesSection from "../components/PagesComponent/TwoDThreeD/FuturesSection";
import LaunchCountdownSection from "../components/PagesComponent/TwoDThreeD/LaunchCountdownSection";
import ProjectStartSection from "../components/PagesComponent/TwoDThreeD/ProjectStartSection";
import Contact from "../components/CommonComponents/Contact";

const TwoDThreeD = () => {
  return (
    <div>
      <NewBanner title="2D to 3D" image={banner} showButton={false} />
      <HeroSection />
      <TwoDThreeDProcessSection />
      <PreviewCapabilitiesSection />
      <FuturesSection />
      <LaunchCountdownSection />
      <ProjectStartSection />
      <div className="mb-6">
        <Contact />
      </div>
    </div>
  );
};

export default TwoDThreeD;
