import React from 'react'
import UploadForm from '../components/PagesComponent/new-upload-design/UploadForm'
import ChatBoat from '../components/PagesComponent/new-upload-design/ChatBoat'

export default function FileUpload() {
  return (
    <div className="lg:pt-30 pt-15">
      <UploadForm />
      <ChatBoat />
    </div>
  )
}
