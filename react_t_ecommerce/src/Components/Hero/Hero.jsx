import React from "react";
import Slider from "react-slick";
import HeroImagee from "../../assets/logo1.png";

function Hero() {
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
      title: "Upto 70% off on all Product's Wear",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere perspiciatis temporibus, beatae aliquid veniam ullam excepturi et provident doloribus. Ipsa nesciunt tempora nisi exercitationem sit explicabo alias dolore. Ipsum officia non ipsam quod dicta dignissimos optio. Cupiditate odio quod nemo ipsum deleniti doloribus, iste sint odit dignissimos, reiciendis officia",
    },
  ];

  // slider-settings
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const heroBody = () => {
    {
      _heroImagesLists.map((data, index) => (
        <div
          className="flex flex-col-reverse items-center sm:flex-row md:flex-row lg:flex-row relative z-10 gap-10 p-4"
          key={index}
        >
          {/* text-content */}
          <div className="text-content flex flex-col items-start gap-4 flex-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="text-sm">{data.description}</p>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-white py-2 px-4 rounded-full">
                Order Now
              </button>
            </div>
          </div>
          {/* image-content */}
          <div className="image-content overflow-hidden mx-auto flex-1">
            <img
              src={HeroImagee}
              alt={`Hero Image ${index + 1}`}
              className="h-[350px] w-[350px] object-contain sm:h-[450px] sm:w-[450px] scale-125 rounded-md duration-200"
            />
          </div>
        </div>
      ));
    }
  };

  return (
    <div className=" container relative  overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center mx-auto duration-200">
      {/* BACKGROUND PATTERN STARTS */}
      <div className="h-700 mx-auto w-700 bg-primary/40 rounded-3xl rotate-45 absolute -top-1/2 right-0 -z-9"></div>

      {/* HERO -BODY */}
      <div className="flex flex-col-reverse justify-center items-center sm:flex-row md:flex-row lg:flex-row relative z-10 gap-10 p-4">
        {/* text-content */}
        <div className="text-content flex flex-col items-start justify-center gap-4 flex-1">
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            Lorem ipsum dolor sit.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deleniti quaerat rerum possimus ad, ullam excepturi doloribus. Quo
            inventore debitis cum repellendus quisquam ipsum blanditiis
            quibusdam? Minus autem dolorem illo pariatur amet velit, dolorum
            nulla harum delectus dicta cupiditate quia.
          </p>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-125 duration-200 text-white py-2 px-4 rounded-full">
              Order Now
            </button>
          </div>
        </div>
        {/* image-content */}
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className="image-content overflow-hidden mx-auto justify-center items-center flex flex-1"
        >
          <img
            src={HeroImagee}
            alt={`Hero Image `}
            className="h-[350px] w-[350px] object-contain sm:h-[450px] sm:w-[450px] scale-125 rounded-md duration-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
