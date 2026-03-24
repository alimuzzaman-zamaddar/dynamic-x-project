import React from 'react'
import Contact from "../components/CommonComponents/Contact";
import MaterialProduct from '../components/PagesComponent/Material/MaterialProduct'
import MaterialContact from '../components/PagesComponent/Material/MaterialContact';
import Matrix from '../components/PagesComponent/Material/Matrix';


const AllMaterials = () => {
  return (
    <>
      <MaterialProduct />
      <Matrix />
      <MaterialContact />
    </>
  )
}

export default AllMaterials