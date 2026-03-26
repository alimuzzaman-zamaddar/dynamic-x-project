import React from 'react'
import Jwellerybanner from "../assets/img/bg/jwellery.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import Micro from '../components/PagesComponent/Jwellery/Micro'
import Bello from '../components/PagesComponent/Jwellery/Bello'
import Creazione from '../components/PagesComponent/Jwellery/Creazione'

const Jwellery = () => {
  return (
    <>
      <NewBanner image={Jwellerybanner} />
      <Micro />
      <Bello />
      <Creazione/>
    </>
  )
}

export default Jwellery