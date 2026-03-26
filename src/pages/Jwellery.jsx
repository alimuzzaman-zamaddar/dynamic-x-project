import React from 'react'
import Jwellerybanner from "../assets/img/bg/jwellery.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import Micro from '../components/PagesComponent/Jwellery/Micro'

const Jwellery = () => {
  return (
    <>
      <NewBanner image={Jwellerybanner} />
      <Micro />
    </>
  )
}

export default Jwellery