import React from 'react'
import Newbanner from "../components/CommonComponents/NewBanner"
import CatalogBanner from "../assets/img/bg/catalogbanner.png"
import Futuro from '../components/PagesComponent/Catalog/Futuro'
import Vita from '../components/PagesComponent/Catalog/Vita'

const Catalog = () => {
  return (
    <>
      <Newbanner title={"Catalogo"} image={CatalogBanner} showButton={false} />
      <Futuro />
      <Vita />
    </>
  )
}

export default Catalog