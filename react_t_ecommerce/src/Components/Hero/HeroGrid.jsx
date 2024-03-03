import React from "react";

function HeroGrid() {
    const womensImage =
        "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const mensImage =
        "https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const discontImage =
        "https://images.pexels.com/photos/5872359/pexels-photo-5872359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const _heroImagesLists = [
        {
            id: 1,
            image: mensImage,
            title: "Upto 50% off on all Men's Wear",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere perspiciatis temporibus, beatae aliquid veniam ullam excepturi et provident doloribus. Ipsa nesciunt tempora nisi exercitationem sit explicabo alias dolore. Ipsum officia non ipsam quod dicta dignissimos optio. Cupiditate odio quod nemo ipsum deleniti doloribus, iste sint odit dignissimos, reiciendis officia",
        },
        {
            id: 2,
            image: womensImage,
            title: "30% off on all Women's Wear",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere perspiciatis temporibus, beatae aliquid veniam ullam excepturi et provident doloribus. Ipsa nesciunt tempora nisi exercitationem sit explicabo alias dolore. Ipsum officia non ipsam quod dicta dignissimos optio. Cupiditate odio quod nemo ipsum deleniti doloribus, iste sint odit dignissimos, reiciendis officia",
        },
        {
            id: 3,
            image: discontImage,
            title: "Upto 70% off on all Product 's Wear",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere perspiciatis temporibus, beatae aliquid veniam ullam excepturi et provident doloribus. Ipsa nesciunt tempora nisi exercitationem sit explicabo alias dolore. Ipsum officia non ipsam quod dicta dignissimos optio. Cupiditate odio quod nemo ipsum deleniti doloribus, iste sint odit dignissimos, reiciendis officia",
        },
    ];

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200 ">
            {/* BACKGROUND PATTERN STARTS */}
            <div className="h-[700px] w-[700px] bg-primary/40 rounded-3xl rotate-45 absolute -top-1/2 right-0 -z-9"></div>

            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <div>
                    {/* gird div start here */}
                    <div className="gird grid-cols-1 sm:grid-cols-2">
                        {/* text content start here */}
                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Lorem ipsum dolor sit.
                            </h1>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                                reiciendis.
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* text content ends here */}

                    </div>
                    {/* ----------image content start here */}
                    <div className="order-1 sm:order-2">
                        <div className="relative z-10">
                            <img
                                src={womensImage}
                                alt="Hero Images"
                                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto rounded-lg"
                            />
                        </div>
                    </div>
                    {/* image content ends here------------ */}
                    {/* gird div ends here */}

                </div>
            </div>

            {/* HERO SECTION ENDSS HERE---------------- */}
        </div>
    );
}

export default HeroGrid;
