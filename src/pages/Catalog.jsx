import React from 'react'
import Vita from '../components/PagesComponent/Catalog/Vita'
import Contact from '../components/CommonComponents/Contact'
import CatalogBanner from "../assets/img/bg/catalogbanner.png"
import Resta from '../components/PagesComponent/Catalog/Resta'
import Newbanner from "../components/CommonComponents/NewBanner"
import Futuro from '../components/PagesComponent/Catalog/Futuro'
import Pensato from '../components/PagesComponent/Catalog/Pensato'
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
      <div className="lg:pb-18 pb-8">
        <Contact />
      </div>
    </>
  )
}

export default Catalog