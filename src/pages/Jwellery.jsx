import React from 'react'
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

const Jwellery = () => {
  return (
    <>
      <NewBanner image={Jwellerybanner} />
      <Micro />
      <Bello />
      <Creazione />
      <Metallo />
      <Qualita />
      <Lusso />
      <Iniziate />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default Jwellery