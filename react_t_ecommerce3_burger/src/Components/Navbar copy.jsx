import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";






function Navbar() {
    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between gap-4 item-center p-4'>

            {/* LEFT SIDE */}
            <div className="flex items-center justify-center gap-4 text-center">
                <div className="cursor-pointer flex-1 flex items-center justify-center" onClick={() => setNav(!nav)} >
                    <MdMenu className='text-2xl font-bold' />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 flex-1 flex items-center justify-center'>Best <span className='font-bold'>Eats</span></h1>
            </div>
            <div className="hidden lg:flex  items-center bg-gray-200 rounded-full p-1 text-[14px]">
                <p className='bg-black text-white rounded-full p-2' >Delivery</p>
                <p className='p-2' >Pickup</p>


            </div>
            {/* SEARCH INPUT */}
            <div className="bg-gray-200 rounded-full flex items-center justify-center text-center px-2 w-[200px] sm:w-[400px] lg:w-[450px]">
                <FiSearch />
                <input type="text" name="search" id="search" placeholder='Search Foods' className='bg-transparent outline-none p-2 w-full' />
            </div>
            {/* CART BUTTON */}
            <button className='bg-black text-white hidden md:flex item-center p-4 text-center rounded-xl'>
                Cart
                <IoMdCart size={20} className='ml-2' />
            </button>


            {/* MOBILE MENU */}
            {/* OVERLAY */}
            {
                nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-10 left-0">

                </div> : null
            }

            {/*   SIDEBAR MENU */}
            <div className={nav ? 'fixed top-0 left-0 max-w-[350px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] max-w-[350px] h-screen bg-white z-10 duration-300'}>
                <IoClose size={25} onClick={() => setNav(!nav)} className='absolute right-4 top-6 cursor-pointer' />
                <h2 className='text-2xl p-4 '>Best <span className='font-bold'>Eats</span></h2>
                {/* NAV LINKS */}
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800 ' >
                        <li className='text-xl py-4 flex cursor-pointer '>
                            <FaTruck className='mr-4' size={25} />
                            Orders

                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTruck className='mr-4' size={25} />
                            Favourites

                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTruck className='mr-4' size={25} />
                            Wallet

                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTruck className='mr-4' size={25} />
                            Help

                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTruck className='mr-4' size={25} />
                            Promotions

                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTruck className='mr-4' size={25} />
                            Best Ones

                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTruck className='mr-4' size={25} />
                            Invite Friends

                        </li>
                    </ul>
                </nav>

            </div>



        </div>
    )
}

export default Navbar
