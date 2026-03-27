import React from 'react'
import Chisiamobanner from "../assets/img/bg/siamobanner.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import DynamicsX from '../components/PagesComponent/Chisiamo/DynamicsX'

const ChiSiamo = () => {
  return (
    <>
      <NewBanner image={Chisiamobanner} showButton={false} title={"Chi Siamo"} />
      <DynamicsX />
    </>
  )
}

export default ChiSiamo