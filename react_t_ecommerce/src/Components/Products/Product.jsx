import React from "react";
import Products from "./ProductData";
import { FaStar } from "react-icons/fa";

function Product() {
  return (
    <div className="mt-7 mb-14">
      <div className="flex flex-col gap-1 justify-center align-center">
        {/* HEADER */}
        <p
          data-aos-once="true"
          data-aos="fade-up"
          className="text-primary font-medium text-center"
        >
          Top Selling Products for you
        </p>
        <h1
          data-aos-once="true"
          data-aos="fade-up"
          className="text-bold text-2xl text-center"
        >
          Products
        </h1>
        <p
          data-aos="fade-up"
          data-aos-once="true"
          className="max-w-[600px] mx-auto justify-center text-center text-gray-400"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* BODY */}
        <div className="container place-items-center product_grid  mx-auto grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 place-item-center gap-5 md:gap-5 lg:gap-5 ">
          {Products.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className=" border boder-grey hover:border-primary hover:shadow-2xl hover:scale-y-110 hover:sacle-x-110 duration-100 rounded-md mt-4 transition-all 'ease-in-out"
            >
              <img
                src={data.image}
                alt=""
                className="h-[220px] w-[175px] object-cover rounded-md   cursor-pointer duration-200 overflow-hidden  "
              />
              <h1 className="mt-4 ml-2 font-semibold">{data.title}</h1>
              {/* price and rating */}
              <div className=" ml-2 flex justify-between ">
                <div>
                  <p>{data.price}</p>
                </div>
                <div className="flex justify-center items-center me-2 ">
                  <span>
                    <FaStar className="text-yellow-400 me-1"></FaStar>
                  </span>
                  <p>{data.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
