import React from 'react'
import NewBanner from '../../CommonComponents/NewBanner'
import Dime from "../../PagesComponent/industrial/Dime"
import Materiali from "../../PagesComponent/industrial/Materiali"
import Pronto from "../../PagesComponent/industrial/Pronto"
import InduatrialBg from "../../../assets/img/industrial/industrialbg.png"
import Contact from '../../CommonComponents/Contact'

const Industrial = () => {
  return (
    <section>
      <NewBanner image={InduatrialBg} title={"DIME & COMPONENTI INDUSTRIALI"} />
      <Dime />
      <Materiali />
      <Pronto />
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </section>
  )
}

export default Industrial