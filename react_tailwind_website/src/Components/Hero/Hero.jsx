import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
    return (
        <section className="hero flex flex-col mx-auto items-center justify-center bg-[#2798fb] pt-10 pb-[-50px]">
            <div className="herodiv max-w-[1240px] py-10">
                <h4 className='text-3xl font-medium  text-center text-white'>Learn with us</h4>
                <h1 className='text-white text-5xl font-bold text-center mt-5'>Grow with us</h1>
                {/* typing animaion component */}
                <div className='text-center mt-5 text-white'>
                    <ReactTyped
                        strings={[
                            "Learn for Mobile Development",
                            "Learn for Frontend Development",
                            "Learn for Backend Development",
                        ]}
                        typeSpeed={40}
                        backSpeed={30}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" className='font-serif bg-transparent text-center text-white text-3xl font-bold' />
                    </ReactTyped>
                </div>
                {/* button */}
                <button className='text-center mx-auto flex items-center bg-black text-white p-4 rounded-md mt-5 ' type="button">Get Started</button>
            </div>

        </section>

    )
}

export default Hero