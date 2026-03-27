import React from 'react'
import Newbanner from "../components/CommonComponents/NewBanner"
import CatalogBanner from "../assets/img/bg/catalogbanner.png"
import Futuro from '../components/PagesComponent/Catalog/Futuro'

const Catalog = () => {
  return (
    <>
      <Newbanner title={"Catalogo"} image={CatalogBanner} showButton={false} />
      <Futuro />
    </>
  )
}

export default Catalog