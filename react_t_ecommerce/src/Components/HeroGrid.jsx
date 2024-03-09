import React from 'react'

function HeroGrid() {

    const _imageLists = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "30% Off on all Men's Wear",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dicta et distinctio cupiditate nemo, eum quisquam aliquid, architecto iusto dignissimos amet nihil, libero enim similique..."
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg",
            title: "50 % Off on all Women's Wear",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dicta et distinctio cupiditate nemo, eum quisquam aliquid, architecto iusto dignissimos amet nihil, libero enim similique..."
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5926239/pexels-photo-5926239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "70% Off on all Kid's Wear",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dicta et distinctio cupiditate nemo, eum quisquam aliquid, architecto iusto dignissimos amet nihil, libero enim similique..."
        },


    ];
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200   '>
            {/* BACKGROUND IMAGE */}
            <div className="rounded-3xl  bg-primary/40 h-[700px] w-[700px] rotate-45 absolute -top-1/2 right-0 -z-9"></div>
            {/* HERO SECTION */}
            <div className="container pb-8 sm:b-0" >
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
                        {/* TEXT CONTENT SECTIONS */}


                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                            <h1
                                className='text-5xl sm:text-6xl  lg:text-7xl font-bold'
                            >Lorem ipsum dolor sit amet.</h1>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto, aliquam aut totam quisquam accusamus error vitae dignissimos, tenetur dolorem autem exercitationem atque, cupiditate magni quidem optio consequatur ex nesciunt! Magni sunt sint similique exercitationem, ex id officiis eos rerum quibusdam nisi sit saepe doloribus earum neque non alias maiores.</p>
                            {/* ORDER BUTTON */}
                            <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                                Order Now
                            </button>
                        </div>
                        {/* IMAGE SECTION */}
                        <div>
                            <div>
                                <img src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero Image" className='w-[300px] h-[300px] sm:h-[450px] sm-w-[450px] sm:scale-125 object-contain mx-auto' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroGrid
