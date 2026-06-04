import React, { useEffect, useState } from 'react'
import Contact from '../components/CommonComponents/Contact'
import NewBanner from '../components/CommonComponents/NewBanner'
import MedicaleBanner from "../assets/img/bg/medicalebanner.png"
import Rechiedi from '../components/PagesComponent/Medical/Richiedi'
import Scientifica from '../components/PagesComponent/Medical/Scientifica'
import Funzionable from '../components/PagesComponent/Medical/Funzionable'
import Laboratorio from '../components/PagesComponent/Medical/Laboratorio'
import { PageLoader } from "../shared/Loader";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';


const MedicaleLab = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cms/medicale-lab`);
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
  const ScientificaData = data?.data?.under_hero || {};
  const FunzionableData = data?.data?.dal_prototipo_al_componente_funzionale || {};
  const LaboratorioData = data?.data?.perche_sceglierci_per_il_tuo_laboratorio || {};
  const RechiediData = data?.data?.richiedi_un_preventivo_per_il_tuo_progetto || {};


  if (loading) return <div><PageLoader /></div>;

  return (
    <>
      <NewBanner image={NewBannerData.bg_image_url || MedicaleBanner} title={NewBannerData.title} />
      <Scientifica data={ScientificaData} />
      <Funzionable data={FunzionableData} />
      <Laboratorio data={LaboratorioData} />
      <Rechiedi data={RechiediData} />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default MedicaleLab