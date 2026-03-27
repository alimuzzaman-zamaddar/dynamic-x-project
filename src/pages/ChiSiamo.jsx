import React from 'react'
import Contact from '../components/CommonComponents/Contact'
import Chisiamobanner from "../assets/img/bg/siamobanner.png"
import Oggi from '../components/PagesComponent/Chisiamo/Oggi'
import NewBanner from '../components/CommonComponents/NewBanner'
import Nostro from '../components/PagesComponent/Chisiamo/Nostro'
import DynamicsX from '../components/PagesComponent/Chisiamo/DynamicsX'
import Risolviamo from '../components/PagesComponent/Chisiamo/Risolviamo'

const ChiSiamo = () => {
  return (
    <>
      <NewBanner image={Chisiamobanner} showButton={false} title={"Chi Siamo"} />
      <DynamicsX />
      <Nostro />
      <Oggi />
      <Risolviamo />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default ChiSiamo