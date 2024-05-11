import React, { useState, useEffect } from 'react'
import SearchB from '../assets/SearchB.png'
import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../utils/userListSlice';

const RecentVisitor = () => {
    const [searchedItem, setSearchedItem] = useState('');
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(searchItem(searchedItem));
    }
    const handleChange = (e) => {
        setSearchedItem(e.target.value)
        if(e.target.value.length == 0){
            dispatch(searchItem(""));
        }
    }

    const dataItem = useSelector(store => store.userList.items)

    return (
        <div className='h-20 w-full border-b-2 flex gap-2 items-center pl-10 py-2 justify-between'>
            <h3 className='text-3xl font-semibold text-blue-950'>Recent visitor {dataItem && dataItem.length}</h3>
            <div className='h-20 w-1/2  flex gap-2 items-center pl-10'>
                <img className='h-6 cursor-pointer' src={SearchB} alt='search' onClick={() => handleClick()}/>
                <input className='h-12 w-full text-lg outline-none focus:border-b-2' type='text' name='search' placeholder='Search' onChange={(e) => handleChange(e)}/>
            </div>
        </div>
    )
}

export default RecentVisitor