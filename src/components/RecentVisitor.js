import React, { useState } from 'react'
import SearchB from '../assets/SearchB.png'
const RecentVisitor = () => {
    const [searchedItem, setSearchedItem] = useState('');
    const handleChange = (e) => {
        
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Enter key pressed!');
            }
        });
        setSearchedItem(e.target.value)
    }
    return (
        <div className='h-20 w-full border-b-2 flex gap-2 items-center pl-10 py-2 justify-between'>
            <h3 className='text-3xl font-semibold text-blue-950'>Recent visitor {searchedItem}</h3>
            <div className='h-20 w-1/2  flex gap-2 items-center pl-10'>
                <img className='h-6' src={SearchB} alt='search' />
                <input className='h-12 w-full text-lg outline-none focus:border-b-2' type='text' name='search' placeholder='Search' onChange={(e) => handleChange(e)}/>
            </div>
        </div>
    )
}

export default RecentVisitor