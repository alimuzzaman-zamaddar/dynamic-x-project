import React from 'react'
import UploadForm from '../components/PagesComponent/new-upload-design/UploadForm'
import Technologies from '../components/PagesComponent/HomPage/Technologies'
import Services from '../components/PagesComponent/HomPage/Services'
import Contact from '../components/CommonComponents/Contact'

export default function NewUploadDesign() {
  return (
    <div className="pt-30">
      <UploadForm />
      <Technologies />
      <Services />
      <div className="pb-10">
        <Contact />
      </div>
    </div>
  )
}
