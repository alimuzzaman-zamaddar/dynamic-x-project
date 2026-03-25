import React from 'react'
import NewBanner from '../../CommonComponents/NewBanner'
import Dime from "../../PagesComponent/industrial/Dime"
import Materiali from "../../PagesComponent/industrial/Materiali"
import InduatrialBg from "../../../assets/img/industrial/industrialbg.png"

const Industrial = () => {
  return (
    <section>
      <NewBanner image={InduatrialBg} title={"DIME & COMPONENTI INDUSTRIALI"} />
      <Dime />
      <Materiali/>
    </section>
  )
}

export default Industrial