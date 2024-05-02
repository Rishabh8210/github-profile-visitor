import React from 'react'
import Sidebar from './Sidebar'

import ProfileCard from './ProfileCard'
import MainContainer from './MainContainer'
import store from '../utils/store'
import { Provider } from 'react-redux'

const Body = () => {
  return (
    <div className='flex w-full gap-5 h-full'>
        <Sidebar />
        <Provider store={store} >
            <MainContainer />
            <ProfileCard />
        </Provider>
    </div>
  )
}

export default Body