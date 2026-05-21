import React from 'react'
import UploadNewFile from '../components/PagesComponent/new-upload-design/UploadNewFile'
import RecentOrders from '../components/PagesComponent/My-orders/RecentOrders'

export default function Myorders() {
  return (
    <section className='w-full'>
      <h3 className='text-3xl text-[#0D0D12] font-medium'>My Orders</h3>
      <UploadNewFile />
      <RecentOrders />
    </section>
  )
}
