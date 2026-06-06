import React, { useEffect, useState } from 'react'
import Contact from '../../CommonComponents/Contact'
import Dime from "../../PagesComponent/industrial/Dime"
import NewBanner from '../../CommonComponents/NewBanner'
import Pronto from "../../PagesComponent/industrial/Pronto"
import Materiali from "../../PagesComponent/industrial/Materiali"
import InduatrialBg from "../../../assets/img/industrial/industrialbg.png"
import { PageLoader } from '../../../shared/Loader'
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


const Industrial = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/industrial`);
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
  const DimeData = data?.data?.dime_componenti_industriali || {};
  const MaterialiData = data?.data?.materiali_tecnologie_di_stampa || {};
  const ProntoData = data?.data?.pronto_a_stampare_il_tuo_progetto || {};

  if (loading) {
    return <PageLoader />;
  }
  
  return (
    <section>
      <NewBanner image={NewBannerData.image || InduatrialBg} title={NewBannerData.title} />
      <Dime data={DimeData} />
      <Materiali data={MaterialiData} />
      <Pronto data={ProntoData} />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </section>
  )
}

export default Industrial