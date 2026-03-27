import React from 'react'
import Contact from '../components/CommonComponents/Contact'
import NewBanner from '../components/CommonComponents/NewBanner'
import MedicaleBanner from "../assets/img/bg/medicalebanner.png"
import Rechiedi from '../components/PagesComponent/Medical/Richiedi'
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
      <Rechiedi />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default MedicaleLab