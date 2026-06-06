import React, { useEffect, useState } from "react";
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
import { PageLoader } from "../shared/Loader";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


export const Drone = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/drone`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const NewBannerData = data?.data?.hero || {};
  const SlsAdvantagesSectionDroneData = data?.data?.under_hero || {};
  const MaterialsGridSectionDroneData = data?.data?.components_that_we_print || {};
  const PrintingTechnologiesDroneData = data?.data?.anti_vibration_components || {};
  const TechnologiesSectionDroneData = data?.data?.technical_reference_materials || {};
  const SlsAdvantagesSectionDrone2Data = data?.data?.tecnologie_di_stampa_disponibili || {};
  const StartYourProjectData = data?.data?.start_your_project || {};


  if (loading) return <div><PageLoader /></div>;


  return (
    <>
      <NewBanner image={NewBannerData?.bg_image_url || DroneBAnner} title={NewBannerData?.title || "DRONI & UAV COMPONENTI"} />
      <SlsAdvantagesSectionDrone data={SlsAdvantagesSectionDroneData} />
      <MaterialsGridSectionDrone data={MaterialsGridSectionDroneData} />
      <PrintingTechnologiesDrone data={PrintingTechnologiesDroneData} />
      <SlsAdvantagesSectionDrone2 data={TechnologiesSectionDroneData} />
      <TechnologiesSectionDrone data={SlsAdvantagesSectionDrone2Data} />
      <WhyChooseSectionDrone />
      <StartYourProject data={StartYourProjectData} />
      <div className="mb-6">
        <Contact />
      </div>
    </>
  );
};
