import React from 'react'
import Menu from './menu'

export default function Sidebar() {

  return (
      <div className='w-20 h-screen border-r-2 border-[#faf9ff]-25 bg-[#001C30] flex flex-col  items-center'>
        <Menu />
      </div>
  )
}
