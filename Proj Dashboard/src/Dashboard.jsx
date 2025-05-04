import React from 'react'
import Dashnav from './components/Dashnav'
import { Outlet } from 'react-router'
import DashnavB from './components/DashnavB'

const Dashboard = () => {
  return (
    <>
      <div className='sm:hidden'>

        <Outlet />

        <Dashnav />
      </div>

      <div className='hidden sm:grid sm:grid-cols-4 xl:grid-cols-7'>

        <div className='col-span-1 sticky top-0 h-screen overflow-y-auto outline outline-gray-200'>
          <DashnavB />
        </div>

        <div className='col-span-3 xl:col-span-6'>
          <Outlet />
        </div>



      </div>

    </>
  )
}

export default Dashboard