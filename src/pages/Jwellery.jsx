import React from 'react'
import Jwellerybanner from "../assets/img/bg/jwellery.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import Micro from '../components/PagesComponent/Jwellery/Micro'
import Bello from '../components/PagesComponent/Jwellery/Bello'
import Creazione from '../components/PagesComponent/Jwellery/Creazione'
import Metallo from '../components/PagesComponent/Jwellery/Metallo'
import Qualita from '../components/PagesComponent/Jwellery/Qualita'
import Lusso from '../components/PagesComponent/Jwellery/Lusso'
import Iniziate from '../components/PagesComponent/Jwellery/Iniziate'

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
    </>
  )
}

export default Jwellery