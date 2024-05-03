import React, { useState } from 'react'
import { users } from '../constant'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../utils/profileToggleSlice'
const ProfileCard   = () => {

    const isProfileView = useSelector(store => store.profileToggle.items)
    console.log(isProfileView)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteItem())
    }
    return (isProfileView.length != 0) && (
        <div className='h-screen w-1/4 px-2rounded-md'>
            <div className='h-20 flex justify-between items-center border-b-2 pr-5'>
                <h3 className='text-3xl font-semibold text-blue-950'>Profile</h3>
                <p className='text-lg font-bold text-blue-950 cursor-pointer' onClick={() => handleClick()}>X</p>
            </div>
            <div className='h-1/3 p-2 w-full  flex items-center justify-center'>
                <img className='h-full rounded-3xl' src={isProfileView[0]?.img} alt='User-profile'/>
            </div>
            <div className='h-fit w-full flex justify-between items-center py-5 pr-2'>
                <div className='h-fit w-3/4 flex flex-col justify-center gap-2'>
                    <p className='text-2xl font-semibold text-blue-950'>{isProfileView[0]?.name}</p>
                    <p className='text-blue-950'>Product Enfgineer and Design head</p>
                </div>
                <button className='h-10 w-1/5 text-base font-semibold text-white bg-slate-900 rounded-lg'>Visit</button>
            </div>
            <div className='h-fit w-full flex flex-col gap-3'>
                <p className='text-base font-bold text-blue-950'>About</p>
                <p className='text-blue-950'>Passionate software engineer with a knack for problem-solving and a love for clean, efficient code. Experienced in full-stack development with expertise in Python, JavaScript, and React. </p>
            </div>
            <div className='h-fit py-2 w-full  flex flex-col gap-3'>
                <p className='text-base font-bold text-blue-950'>Team</p>
                <div className='flex gap-3 flex-wrap'>
                    <span className='w-fit py-1 px-3 border-2 rounded-2xl border-black'>Design</span>
                    <span className='w-fit py-1 px-3 border-2 rounded-2xl border-black'>Product</span>
                </div>
            </div>
            <div className='h-fit py-2 w-full  flex flex-col gap-3'>
                <p className='text-base font-bold text-blue-950'>Contact Information</p>
                <div className='flex gap-3 flex-col'>
                    <p className='text-base font-bold text-blue-950'>Email: <span className='text-base font-normal text-blue-500'>rishabhpandey8092@gmail.com</span></p>
                    <p className='text-base font-bold text-blue-950'>Phone: <span className='text-base font-normal text-blue-500'>+91 8210399874</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard