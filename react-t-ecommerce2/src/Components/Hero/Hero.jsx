import React from 'react'

import { MdKeyboardArrowRight } from "react-icons/md";


function Hero() {
    return (
        <div className='container  text-black px-10 pt-8'>
            {/* grid columns */}
            <div className="grid relative xl:grid-cols-3 xl:grid-rows-2 gap-8">
                <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[1]">
                    {/* image-content */}
                    <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="First Image" />
                    {/* text-content */}
                    <div className="absolute max-w-[470px] sm:ml-16 ml-8  z-10 text-white -top-[50%] -translate-y-[50%] sm:space-y-4 ">
                        <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
                        <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>
                            Dried Fruits Best Quality
                        </h2>
                        <p className='text-gray-500 text-xl pt-4 sm:pt-8 '>Starting At</p>
                        <div className='font-medium text-red-500 text-2xl sm:text-4xl  sm:pb-8 pb-4' >$18.36</div>
                        <div className='bg-accentDark hover:bg-accent  text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer '>Shop Now <MdKeyboardArrowRight /> </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default Hero
