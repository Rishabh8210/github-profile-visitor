import React from 'react'
import UserCard from './UserCard'
import {users} from '../constant'
const UserList = () => {
  return (
    <div className='w-full h-[600px] overflow-auto rounded-md '>
        <div className='px-7 h-12 text-md text-blue-950 font-semibold w-full bg-slate-50 flex justify-between items-center border-b-2 sticky top-0'>
            <p className='w-1/3 flex justify-center'>Name</p>
            <p className='w-1/3 flex justify-center'>Time</p>
            <p className='w-1/3 flex justify-center'>Email / Username</p>
        </div>    
        {
          users.map((user, ind) => {
            return <UserCard key={ind} data = {user} />
          })
        }
    </div>
  )
}

export default UserList