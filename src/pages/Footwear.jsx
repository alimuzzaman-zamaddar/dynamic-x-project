import React from 'react'
import Fashionbg from "../assets/img/bg/2026-02-20 17.43.03 1.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import FashionAccesories from '../components/PagesComponent/Fashion/FashionAccesories'
import Cosa from '../components/PagesComponent/Fashion/Cosa'
import Moda from '../components/PagesComponent/Fashion/Moda'

const Footwear = () => {
  return (
    <>
      <NewBanner image={Fashionbg} title={"FASHION"} />
      <FashionAccesories />
      <Cosa />
      <Moda />
    </>
  )
}

export default Footwear