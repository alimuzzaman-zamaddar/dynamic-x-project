import React from 'react'
import UploadNewFile from '../components/PagesComponent/new-upload-design/UploadNewFile'
import RecenFiles from '../components/PagesComponent/File/RecenFiles'

export default function FileLibrary() {
  return (
    <div className='w-full'>
      <h3 className='text-3xl text-[#0D0D12] font-medium'>File Library</h3>
      <p className='text-base text-[#63716E] py-4'>Access and manage all your documents in one place.</p>
      <UploadNewFile />
      <RecenFiles />
    </div>
  )
}
