import React from 'react'
import Newbanner from "../components/CommonComponents/NewBanner"
import CatalogBanner from "../assets/img/bg/catalogbanner.png"
import Futuro from '../components/PagesComponent/Catalog/Futuro'
import Vita from '../components/PagesComponent/Catalog/Vita'
import Pensato from '../components/PagesComponent/Catalog/Pensato'
import Resta from '../components/PagesComponent/Catalog/Resta'
import Portata from '../components/PagesComponent/Catalog/Portata'

const Catalog = () => {
  return (
    <>
      <Newbanner title={"Catalogo"} image={CatalogBanner} showButton={false} />
      <Futuro />
      <Vita />
      <Pensato />
      <Resta />
      <Portata />
    </>
  )
}

export default Catalog