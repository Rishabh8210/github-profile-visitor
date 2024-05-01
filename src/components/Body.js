import React from 'react'
import Sidebar from './Sidebar'

import ProfileCard from './ProfileCard'
import MainContainer from './MainContainer'
const Body = () => {
  return (
    <div className='flex w-full gap-5 h-full'>
        <Sidebar />
        <MainContainer />
        <ProfileCard />
    </div>
  )
}

export default Body