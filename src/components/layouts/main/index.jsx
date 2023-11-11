import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Header from '../header'

export default function MainLayout() {
  
  return (
    <div className='flex w-screen h-screen'>
        <Header />
      <div className='absolute'>
        <Sidebar />
      </div>

        <div className='flex transition-all max-sm:justify-center max-sm:w-[14rem] h-full w-full absolute left-20 top-20  '>
          <div className='flex h-full w-full'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}
