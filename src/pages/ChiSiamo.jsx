import React from 'react'
import Chisiamobanner from "../assets/img/bg/siamobanner.png"
import NewBanner from '../components/CommonComponents/NewBanner'

const ChiSiamo = () => {
  return (
    <>
      <NewBanner image={Chisiamobanner} showButton={false} title={"Chi Siamo"} />
    </>
  )
}

export default ChiSiamo