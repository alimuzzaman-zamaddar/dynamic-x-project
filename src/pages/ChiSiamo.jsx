import React from 'react'
import Chisiamobanner from "../assets/img/bg/siamobanner.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import DynamicsX from '../components/PagesComponent/Chisiamo/DynamicsX'
import Nostro from '../components/PagesComponent/Chisiamo/Nostro'
import Oggi from '../components/PagesComponent/Chisiamo/Oggi'

const ChiSiamo = () => {
  return (
    <>
      <NewBanner image={Chisiamobanner} showButton={false} title={"Chi Siamo"} />
      <DynamicsX />
      <Nostro />
      <Oggi />
    </>
  )
}

export default ChiSiamo