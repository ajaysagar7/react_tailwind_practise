import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


function SearchBar() {
    return (
        <div className="relative hidden w-full max-w-[500px]">
            <input className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full pe-12' type="text" placeholder='Search Products...' />
            <IoSearchOutline className='absolute top-0 right-0  mt-4 mr-5 text-gray-500' size={20} />
        </div>
    )

}

export default SearchBar
