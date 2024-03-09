import React from 'react'

function Hero() {
    return (
        // container
        <div className='max-w-[1640px] mx-auto p-4'>
            {/* hero- */}
            <div className='max-h-[550px] relative rounded-xl overflow-hidden'>
                {/* overlay */}
                <div className="hero_content absolute w-full h-full text-gray max-h-[500] bg-black/40 flex flex-col justify-center items-start pl-10">
                    <h1 className='text-3xl sm:text-xl text-white ' >Best <span className='text-[orange] font-bold text-4xl'>Food</span></h1>
                    <h1 className='text-3xl sm:text-xl mt-2  text-white' >Best <span className='text-[orange] font-bold text-4xl'>Delivery</span></h1>
                </div>

                {/* image */}
                <img src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero" className='object-cover rounded-xl w-full max-h-[550px]' />

            </div>

        </div>
    )
}

export default Hero;
