import React from "react";
import ProductData from "../Products/ProductData";
import { FaStar } from "react-icons/fa";

function TopRatedProducts() {
  const generateRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };
  return (
    <div>
      <div className="flex flex-col gap-1 justify-center align-center">
        {/* HEADER */}
        <p
          data-aos-once="true"
          data-aos="fade-up"
          className="text-primary font-medium text-center"
        >
          Top Selling Best Products
        </p>
        <h1
          data-aos-once="true"
          data-aos="fade-up"
          className="text-bold text-2xl text-center"
        >
          Best Products
        </h1>
        <p
          data-aos="fade-up"
          data-aos-once="true"
          className="max-w-[600px] mx-auto justify-center text-center text-gray-400"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* BODY -WIDGET */}
      <div className="container mt-5 mb-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-5 place-items-center">
        {ProductData.map((data, index) => (
          <div>
            <div className="flex flex-col  items-center mx-auto justify-center gap-1 border border-transparent duration-200 hover:border-primary p-2 rounded-xl">
              <img
                className="rounded-2xl  object-center cursor-pointer h-[300px] hover:bg-black/80 hover:text-white relative shadow-xl duration-high group w-[180px]"
                key={index}
                src={data.image}
                alt={`image ${data.id}`}
              />
              {/* content */}
              {/* ratings */}
              <div className="rating_div flex justify-center items-center gap-5 mx-auto">
                <div className="flex mt-2 gap-1 text-yellow-400">
                  {generateRatingStars(data.rating).map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
              </div>
              {/* title */}

              <h1 className="text-2xl font-bold">{data.title}</h1>
              {/* description */}
              <p
                // data-aos="fade-up"
                // data-aos-duration="500"
                // data-aos-delay="100"
                className="text-sm text-center text-gray-400 line-clamp-2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus deleniti quaerat rerum possimus ad, ullam excepturi
                doloribus. Quo inventore debitis cum repellendus quisquam ipsum
                blanditiis quibusdam? Minus autem dolorem illo pariatur amet
                velit, dolorum nulla harum delectus dicta cupiditate quia.
              </p>
              {/* button */}
              <div
              // data-aos="fade-up"
              // data-aos-duration="500"
              // data-aos-delay="300"
              >
                <button className="bg-gradient-to-r  mt-2 text-sm from-primary to-secondary hover:scale-125 duration-200 text-white py-1 px-2 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRatedProducts;
