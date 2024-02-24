import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";



const Header = () => {

    const [toogle, setToggle] = useState(true);
    return (
        <header className='bg-[#2798fb] p-5'>
            <div className="manual_header max-w-[1240px] border border-transparent mx-auto flex justify-between item-center">
                <h1 className='cursor-pointer text-3xl font-bold'>
                    WsCube Tech
                </h1>
                {toogle == true ? <CiMenuBurger className='text-white  duration-300 text-2xl md:hidden block font-bold' onClick={(e) => setToggle(false)} /> : <IoCloseSharp className='text-white  transition duration-300 ease-in-out text-2xl md:hidden block font-bold' onClick={(e) => setToggle(true)} />}
                <ul className='text-white hidden md:flex  gap-10 cursor-pointer '>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* close icon */}


                {/* veritcal nav bar */}
                <ul className={`fixed text-white text-2xl gap-20 bg-black mt-[57px] w-full ps-5 py-5 h-full duration-500 ${toogle ? 'left-[-100%]' : 'left-0'}`}>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>



            </div>

        </header>

    )
}

export default Header