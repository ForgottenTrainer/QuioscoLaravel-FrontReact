import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar'
import { useAuth } from '../hooks/useAuth'

const AdminLayout = () => {

  useAuth({ middleware:'admin' })

  return (
    <div>
      <div className='md:flex'>
      <AdminSidebar />
        <main className="flex-1 h-screen overflow-y-scroll bg-rose-50 p-3">
          <Outlet />
        </main>
        
      </div>      
    </div>
  )
}

export default AdminLayout
