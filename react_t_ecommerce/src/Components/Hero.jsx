import React from "react";
import Slider from "react-slick";

function Hero() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
            <div className="rounded-3xl  bg-primary/40 h-[700px] w-[700px] rotate-45 absolute -top-1/2 right-0 -z-9"></div>
            {/* HERO SECTION */}
            <Slider {...settings}>
                <div className="container pb-8 sm:b-0" >
                    <div className="hero_content flex lg-flex-row  md:flex-row flex-col-reverse item-center md:gap-x-10 sm:gap-y-10 sm:pt-10 sm:items-center justify-evenly md:gap-10 ">

                        {/* HERO CONTENT */}
                        <div className="z-10 hero_content flex flex-col gap-10    md:items-start lg:items-start lg:text-start md:flex-1 sm:mt-10   " >
                            <h1 className='text-5xl font-bold'>70% Off on all Kid's Wear</h1>
                            <p className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae dicta et distinctio cupiditate nemo, eum quisquam aliquid, architecto iusto dignissimos amet nihil, libero enim similique...</p>
                            <button className='bg-secondary cursor-pointer rounded-full px-3 py-1 text-white'>
                                Order Now
                            </button>

                        </div>
                        {/* HERO CONTENTS ENDS HERE */}

                        {/* HERO IAMGE */}
                        <img src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg" alt="Hero Image" className='object-cover z-10 h-[350px] w-[350px] md:flex-1 rounded-full lg:flex-1 text-center' />


                    </div>

                </div>
            </Slider>
        </div>
    )
}

export default Hero
