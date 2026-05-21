import React from 'react'
import DashboardSideBar from '../shared/DashboardSideBar'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
  return (
    <div className='flex xl:flex-row flex-col gap-6 md:mt-40 mt-30 2xl:px-0 px-4 pb-10 max-w-max-width mx-auto'>
      <div className="flex shrink-0">
        <DashboardSideBar />
      </div>
      <Outlet />
    </div>
  )
}

