import React from 'react'

const Plans = () => {
    return (
        <section className="plan bg-[#2798fb] px-3">
            <div className="max-w-[1240px] py-5  mx-auto plan-div md:grid grid-cols-3 gap-6 ">
                {/* APP DEVELOPMENT */}
                <div className="bg-white mt-10 rounded shadow-xl hover:scale-105 duration-500">
                    <div className="flex flex-col justify-center item-center px-2 py-20">
                        <h1 className='text-4xl font-bold ]'>App Development</h1>
                        <p className='mt-2'>Starting at $1400</p>
                        <span className='divider'></span>
                        <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor assumenda quasi, possimus minima molestiae temporibus fugiat totam, corrupti tempora eligendi ab adipisci non consequuntur! Suscipit eos ea architecto alias hic ex ratione dolorum ipsam vel consectetur veniam, unde dolorem harum eius debitis nobis iusto. Reprehenderit laborum repudiandae iure non!</p>
                        <button className="bg-[#2798fb] text-white mx-3 py-1 rounded mt-3">Get Started</button>


                    </div>
                </div>
                {/* FRONTEND DEVELOPMENT */}
                <div className="bg-white mt-10 rounded shadow-xl hover:scale-105 duration-500">
                    <div className="flex flex-col justify-center item-center px-2 py-20">
                        <h1 className='text-4xl font-bold ]'>Frontend Development</h1>
                        <p className='mt-2'>Starting at $1400</p>
                        <span className='divider'></span>
                        <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor assumenda quasi, possimus minima molestiae temporibus fugiat totam, corrupti tempora eligendi ab adipisci non consequuntur! Suscipit eos ea architecto alias hic ex ratione dolorum ipsam vel consectetur veniam, unde dolorem harum eius debitis nobis iusto. Reprehenderit laborum repudiandae iure non!</p>
                        <button className="bg-[#2798fb] text-white mx-3 py-1 rounded mt-3">Get Started</button>


                    </div>
                </div>
                {/* BACKEND DEVELOPMENT */}
                <div className="bg-white  mt-10 rounded shadow-xl hover:scale-105 duration-500">
                    <div className="flex flex-col justify-center item-center px-2 py-20">
                        <h1 className='text-4xl font-bold ]'>Backend Development</h1>
                        <p className='mt-2'>Starting at $1400</p>
                        <span className='divider'></span>
                        <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor assumenda quasi, possimus minima molestiae temporibus fugiat totam, corrupti tempora eligendi ab adipisci non consequuntur! Suscipit eos ea architecto alias hic ex ratione dolorum ipsam vel consectetur veniam, unde dolorem harum eius debitis nobis iusto. Reprehenderit laborum repudiandae iure non!</p>
                        <button className="bg-[#2798fb] text-white mx-3 py-1 rounded mt-3">Get Started</button>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans