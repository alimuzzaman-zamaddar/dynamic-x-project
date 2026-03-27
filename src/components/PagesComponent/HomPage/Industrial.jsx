import React from 'react'
import Contact from '../../CommonComponents/Contact'
import Dime from "../../PagesComponent/industrial/Dime"
import NewBanner from '../../CommonComponents/NewBanner'
import Pronto from "../../PagesComponent/industrial/Pronto"
import Materiali from "../../PagesComponent/industrial/Materiali"
import InduatrialBg from "../../../assets/img/industrial/industrialbg.png"

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