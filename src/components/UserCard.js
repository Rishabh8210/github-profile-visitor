import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className='px-7 h-20 w-full border-b-2  flex justify-between items-center cursor-pointer'>
      {console.log(data)}
        <div className='flex items-center gap-2 w-1/3 overflow-hidden text-nowrap'>
            <img className='h-12 rounded-full' src={data && data?.img} alt='user'/>
            <p className='text-xl font-semibold'>{data && data?.name}</p>
        </div>
        <div className='flex flex-col w-1/3 justify-center items-center overflow-hidden'>
            <p className=' font-semibold text-md text-wrap'>23 March 2023</p>
            <p className=' font-semibold text-base text-wrap'>19 : 34 : 32</p>
        </div>
        <p className='w-1/3 font-semibold text-md flex justify-center overflow-hidden'>@{data && data?.userID}</p>
    </div>
  )
}

export default UserCard