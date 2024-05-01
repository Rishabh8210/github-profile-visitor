import React from 'react'
import logoB from '../assets/LogoB.png'
import UserLogoFB from '../assets/UserLogoFB.png'
const Header = () => {
  return (
    <div className='h-16 w-full flex items-center justify-between shadow-md sticky top-0 bg-white'>
        {/* Logo */}
        <div className='h-full pl-10 w-72 flex items-center justify-between'>
          <div className='flex items-center'>
              <img className='h-10 cursor-pointer' src={logoB} alt='O'/>
              <h1 className='text-2xl font-bold font-mono cursor-pointer'>gpa</h1>
          </div>
          <p className='font-bold text-2xl cursor-pointer'></p>
        </div>
        {/* User info */}
        <div className='h-full pr-10 w-fit flex items-center'>
            <img className='h-8 cursor-pointer' src={UserLogoFB} alt='User' />
        </div>
    </div>
  )
}

export default Header