import React from 'react'
import Contat from '../components/CommonComponents/Contact'
import ProfileForm from '../components/PagesComponent/Profile/ProfileForm'
import UploadNewFile from '../components/PagesComponent/new-upload-design/UploadNewFile'

export default function Profile() {
  return (
    <div className=' flex flex-col w-full'>
      <ProfileForm />
      <UploadNewFile />
      <Contat />
    </div>
  )
}
