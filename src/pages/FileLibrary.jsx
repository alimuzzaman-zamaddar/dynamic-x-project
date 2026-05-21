import React from 'react'
import UploadNewFile from '../components/PagesComponent/new-upload-design/UploadNewFile'
import RecenFiles from '../components/PagesComponent/File/RecenFiles'

export default function FileLibrary() {
  return (
    <div className='w-full'>
      <h3 className='lg:text-3xl text:xl text-[#0D0D12] font-medium'>File Library</h3>
      <p className='lg:text-base text-sm text-[#63716E] py-4'>Access and manage all your documents in one place.</p>
      <UploadNewFile />
      <RecenFiles />
    </div>
  )
}
