import React from 'react'
import bag from '../assets/bag.png';
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";



function Navbar() {
    return (
        <nav className='bg-primary/40 '>

            <div className='flex justify-between container py-3'>
                {/* LOGO */}
                <a href="#" className='flex justify-around items-center gap-x-2'>
                    <img src={bag} alt="Logo" className='w-10 h-10 object-contain' />
                    <h1 className='text-3xl hidden sm:block md:block lg:block xl:block'>Shopify</h1>

                </a>
                {/* SEARCH BOX */}
                <div className="search_container flex items-center gap-2 relative ">
                    <input type="text" placeholder='search' className='bg-white rounded-full pl-5 pr-10  h-10  border-none outline-none' />

                    <FiSearch className='text-grey absolute right-5 hover:text-primary hover:font-bold hover:scale-125 duration-100 transition-all ' />

                </div>
                {/* ORDER BUTTONS */}
                <HiOutlineShoppingCart className='bg-primary px-3 py-1 text-white w-10 h-10 rounded-2xl ' />



            </div>
        </nav>
    )
}

export default Navbar
