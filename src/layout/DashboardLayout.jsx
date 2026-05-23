import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { Loader2 } from 'lucide-react'
import DashboardSideBar from '../shared/DashboardSideBar'
import { useAuth } from '../context/AuthContext'

export default function DashboardLayout() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Loader2 size={32} className="animate-spin text-slate-400" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />
  }

  return (
    <div className='flex 2xl:flex-row flex-col gap-6 md:mt-40 mt-30 px-4 pb-10 max-w-max-width mx-auto'>
      <div className="flex shrink-0">
        <DashboardSideBar />
      </div>
      <Outlet />
    </div>
  )
}
