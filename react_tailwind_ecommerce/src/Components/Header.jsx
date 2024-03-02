import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import logo from '/logo.png';
import { MdMenu } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";





const Header = () => {
    const subNavItems = [
        { id: 1, name: 'Jewelry & Accessories', link: '/' },
        { id: 2, name: 'Clothing & Shoes', link: '/' },
        { id: 3, name: 'Home & Living', link: '/' },
        { id: 4, name: 'Wedding & Party', link: '/' },
        { id: 5, name: 'Toys & Entertainment', link: '/' },
        { id: 6, name: 'Art & Collectibles', link: '/' },
        { id: 7, name: 'Craft Supplies', link: '/' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className='max-w-screen-2xl mx-auto xl:px-24 py-10 px-10	'>
            <nav className='flex  justify-between item-center ' >
                {/* search icon */}
                <FiSearch className='text-black h-5 w-5 font-bold' />
                {/* logo */}
                <img src={logo} alt="Logo" />
                {/* NAV LINKS */}
                <ul className='md:flex gap-5 md:hidden justify-between item-center  '>
                    <li className='flex justify-center items-center gap-2' > <span><IoPersonCircleOutline /></span>
                        Account</li>
                    <li className='flex justify-center items-center gap-2' > <span><FaCartShopping /></span>
                        Shopping</li>
                </ul>


                {/* menu buttons */}
                <button onClick={toggleMenu}>{!isMenuOpen ? <MdMenu className='text-2xl font-bold md:hidden transition-all ease-linear duration-500' /> : <IoClose className='text-2xl font-bold md:hidden  transition-all ease-linear duration-500' />}</button>





            </nav>
            {/* sub-nav-bar */}
            <div className='gap-10 mx-auto flex items-center justify-between mt-10 px-5 py-5 text-black hidden sm:flex'>
                {subNavItems.map((item) => (
                    <div key={item.id} className='hover:text-orange-500 hover:font-medium hover:cursor-pointer'>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            {/* sub-menu vertical */}
            <div className='flex flex-col  gap-10 mx-auto item-center justify-between mt-10 bg-black text-white sm:gap-3 px-5 py-10  md:hidden '>
                {subNavItems.map((item) => (
                    <div key={item.id} className=' hover:text-orange-500 hover:font-medium hover:cursor-pointer'>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>



        </header>
    )
}

export default Header