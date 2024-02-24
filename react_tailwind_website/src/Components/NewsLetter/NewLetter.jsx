import React from 'react'

const NewsLetter = () => {
    return (
        <section className='bg-[#2798fb] p-2'>
            <div className="newsletter max-w-[1240px] mx-auto md:flex-row  md:flex items-center justify-around py-5 text-white ">
                {/* news-content */}

                <div className="news-content flex flex-col justify-center text-white gap-3 mt-10">
                    <h2 className="text-3xl font-bold">Want to learn latest IT Skills</h2>
                    <p className="text-lg">Sign up to our newsletter and stay up to date</p>
                </div>

                {/* news-inputbox */}
                <div className="news_input flex flex-col justify-center text-white mt-10">
                    <div className="flex gap-5 text-white">
                        <input type="text" placeholder='Enter your email' className='p-3 rounded-l-md bg-white text-black' />
                        <button className='bg-black p-3 rounded-r-md'>Subscribe</button>
                    </div>
                    <p className='mt-2'>We care about you protection of your data Read our <br /> <span className='text-black font-medium'>Privacy Policy</span></p>
                </div>

            </div>
        </section>
    )
}

export default NewsLetter