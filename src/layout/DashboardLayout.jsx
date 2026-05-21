import React from 'react'
import DashboardSideBar from '../shared/DashboardSideBar'
import { Outlet } from 'react-router'

export default function DashboardLayout() {
  return (
    <div className='flex gap-6 mt-40 pb-10 max-w-max-width mx-auto'>
      <div className="flex shrink-0">
        <DashboardSideBar />
      </div>
      <Outlet />
    </div>
  )
}

