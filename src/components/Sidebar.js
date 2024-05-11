import React, { useState } from 'react'
import Repo from '../assets/Repo.png'
import UserLogo from '../assets/UserLogoB.png'
const Sidebar = () => {
  const [isOpenSidebar, setSideBar] = useState(true)
  return (
    <div className='h-screen px-10 flex flex-col gap-4 overflow-scroll w-1/4 border-2 border-t-0 flex-shrink-0'>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit  flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-blue-600 flex items-center justify-center text-white rounded-md'>10</span>
        </div>
        <div className='flex items-center justify-between hover:cursor-pointer'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={UserLogo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>Go to Github Profile</p>
          </div>
          <span className='h-6 w-6 bg-green-600 flex items-center justify-center text-white rounded-md'></span>
        </div>
        <span className='border-2'></span>
        <p className='font-semibold uppercase '>Menu</p>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>About US</p>
          </div>
          <span className='h-6 w-6 bg-green-600 flex items-center justify-center text-white rounded-md'></span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-green-600 flex items-center justify-center text-white rounded-md'>1</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-green-600 flex items-center justify-center text-white rounded-md'>1</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-orange-600 flex items-center justify-center text-white rounded-md'>1</span>
        </div>
        <span className='border-2'></span>
        <p className='font-semibold uppercase'>Recent Project</p>
        
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-orange-600 flex items-center justify-center text-white rounded-md'>1</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-orange-600 flex items-center justify-center text-white rounded-md'>1</span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='h-16 w-fit flex gap-4 items-center'>
            <img className='h-7 ' src={Repo} alt='-'/>
            <p className='font-semibold uppercase text-gray-700'>My Repositories</p>
          </div>
          <span className='h-6 w-6 bg-orange-600 flex items-center justify-center text-white rounded-md'>1</span>
        </div>
    </div>
  )
}

export default Sidebar