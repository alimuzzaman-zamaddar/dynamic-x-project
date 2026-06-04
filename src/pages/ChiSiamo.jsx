import React, { useEffect, useState } from 'react'
import Contact from '../components/CommonComponents/Contact'
import Chisiamobanner from "../assets/img/bg/siamobanner.png"
import Oggi from '../components/PagesComponent/Chisiamo/Oggi'
import NewBanner from '../components/CommonComponents/NewBanner'
import Nostro from '../components/PagesComponent/Chisiamo/Nostro'
import DynamicsX from '../components/PagesComponent/Chisiamo/DynamicsX'
import Risolviamo from '../components/PagesComponent/Chisiamo/Risolviamo'
import { PageLoader } from '../shared/Loader'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const ChiSiamo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/who-we-are`);
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
  const DynamicsXData = data?.data?.under_hero || {};
  const ChisiamoData = data?.data?.chi_siamo || {};
  const NostroData = data?.data?.our_approach || {};
  const MissionData = data?.data?.our_mission || {};
  const VisionData = data?.data?.our_vision || {};
  const ChallengesData = data?.data?.the_challenges || {};

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NewBanner
        image={NewBannerData.bg_image_url || Chisiamobanner}
        showButton={false}
        title={NewBannerData.title || "Chi Siamo"}
      />
      <DynamicsX
        underHero={DynamicsXData}
        chiSiamo={ChisiamoData}
      />
      <Nostro data={NostroData} />

      <Oggi mission={MissionData} vision={VisionData} />
      <Risolviamo challenges={ChallengesData} />

      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default ChiSiamo