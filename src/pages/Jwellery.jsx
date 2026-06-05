import React, { useEffect, useState } from 'react'
import Jwellerybanner from "../assets/img/bg/jwellery.png"
import Contact from '../components/CommonComponents/Contact'
import Micro from '../components/PagesComponent/Jwellery/Micro'
import Bello from '../components/PagesComponent/Jwellery/Bello'
import Lusso from '../components/PagesComponent/Jwellery/Lusso'
import NewBanner from '../components/CommonComponents/NewBanner'
import Metallo from '../components/PagesComponent/Jwellery/Metallo'
import Qualita from '../components/PagesComponent/Jwellery/Qualita'
import Iniziate from '../components/PagesComponent/Jwellery/Iniziate'
import Creazione from '../components/PagesComponent/Jwellery/Creazione'
import { PageLoader } from '../shared/Loader';
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


const Jwellery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/jwellery`);
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
  const MicroData = data?.data?.micro_fusione_larte_delleccellenza_orefice || {};
  const BelloData = data?.data?.la_tecnologia_al_servizio_del_bello || {};
  const CreazioneData = data?.data?.la_tecnologia_al_servizio_del_bello || {};
  const MetalloData = data?.data?.una_produzione_per_ogni_creazione || {};
  const QualitaData = data?.data?.processo_dalla_visione_al_metallo || {};
  const LussoData = data?.data?.partner_ideale_per_il_lusso || {};
  const IniziateData = data?.data?.iniziate_a_collaborare_con_noi || {};



  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NewBanner image={NewBannerData.image || Jwellerybanner} />
      <Micro data={MicroData} />
      <Bello data={BelloData} />
      <Creazione data={CreazioneData} />
      <Metallo data={MetalloData} />
      <Qualita data={QualitaData} />
      <Lusso data={LussoData} />
      <Iniziate data={Iniziate} />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default Jwellery