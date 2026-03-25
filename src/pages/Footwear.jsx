import React from 'react'
import Fashionbg from "../assets/img/bg/2026-02-20 17.43.03 1.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import FashionAccesories from '../components/PagesComponent/Fashion/FashionAccesories'
import Cosa from '../components/PagesComponent/Fashion/Cosa'
import Moda from '../components/PagesComponent/Fashion/Moda'
import TechnoloyStampa from '../components/PagesComponent/Fashion/TechnoloyStampa'

const Footwear = () => {
  return (
    <>
      <NewBanner image={Fashionbg} title={"FASHION"} />
      <FashionAccesories />
      <Cosa />
      <Moda />
      <TechnoloyStampa />
    </>
  )
}

export default Footwear