import React from 'react'
import NewBanner from '../../CommonComponents/NewBanner'
import Dime from "../../PagesComponent/industrial/Dime"
import InduatrialBg from "../../../assets/img/industrial/industrialbg.png"

const Industrial = () => {
  return (
    <section>
      <NewBanner image={InduatrialBg} title={"DIME & COMPONENTI INDUSTRIALI"} />
      <Dime/>
    </section>
  )
}

export default Industrial