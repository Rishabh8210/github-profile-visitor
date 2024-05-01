import React from 'react'
import UserList from './UserList'
import SearchB from '../assets/SearchB.png'
import RecentVisitor from './RecentVisitor'
const MainContainer = () => {
  return (
    <div className='h-screen w-3/6  border-2 border-t-0'>
        <div className='h-20 w-full border-b-2 flex gap-2 items-center pl-10'>
            <img className='h-6' src={SearchB} alt='search'/>
            <input className='h-12 w-3/5 text-lg outline-none focus:border-b-2' type='text' name='search' placeholder='What are you looking for?'/>
        </div>
        <RecentVisitor />
        <div className='p-3 h-fit w-full'>
            <UserList />
        </div>
    </div>
  )
}

export default MainContainer