import React from 'react'
import Newbanner from "../components/CommonComponents/NewBanner"
import CatalogBanner from "../assets/img/bg/catalogbanner.png"

const Catalog = () => {
  return (
    <>
      <Newbanner title={"Catalogo"} image={CatalogBanner} showButton={false} />
    </>
  )
}

export default Catalog