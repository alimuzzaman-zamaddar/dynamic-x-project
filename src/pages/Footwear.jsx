import React from 'react'
import Fashionbg from "../assets/img/bg/2026-02-20 17.43.03 1.png"
import NewBanner from '../components/CommonComponents/NewBanner'
import FashionAccesories from '../components/PagesComponent/Fashion/FashionAccesories'
import Cosa from '../components/PagesComponent/Fashion/Cosa'
import Moda from '../components/PagesComponent/Fashion/Moda'
import TechnoloyStampa from '../components/PagesComponent/Fashion/TechnoloyStampa'
import Visione from '../components/PagesComponent/Fashion/Visione'
import Contact from "../components/CommonComponents/Contact";


const Footwear = () => {
  return (
    <>
      <NewBanner image={Fashionbg} title={"FASHION"} />
      <FashionAccesories />
      <Cosa />
      <Moda />
      <TechnoloyStampa />
      <Visione />
      <div className="pb-18">
        <Contact />
      </div>
    </>
  )
}

export default Footwear