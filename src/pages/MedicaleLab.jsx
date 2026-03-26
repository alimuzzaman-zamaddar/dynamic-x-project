import React from 'react'
import NewBanner from '../components/CommonComponents/NewBanner'
import MedicaleBanner from "../assets/img/bg/medicalebanner.png"
import Scientifica from '../components/PagesComponent/Medical/Scientifica'

const MedicaleLab = () => {
  return (
    <>
      <NewBanner image={MedicaleBanner} title={"MEDICALE, LAB & BIOTECH"} />
      <Scientifica />
    </>
  )
}

export default MedicaleLab