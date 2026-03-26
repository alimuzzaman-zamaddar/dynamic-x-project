import React from 'react'
import NewBanner from '../components/CommonComponents/NewBanner'
import MedicaleBanner from "../assets/img/bg/medicalebanner.png"
import Scientifica from '../components/PagesComponent/Medical/Scientifica'
import Funzionable from '../components/PagesComponent/Medical/Funzionable'
import Laboratorio from '../components/PagesComponent/Medical/Laboratorio'

const MedicaleLab = () => {
  return (
    <>
      <NewBanner image={MedicaleBanner} title={"MEDICALE, LAB & BIOTECH"} />
      <Scientifica />
      <Funzionable />
      <Laboratorio />
    </>
  )
}

export default MedicaleLab