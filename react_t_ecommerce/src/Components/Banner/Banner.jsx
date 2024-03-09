import React from "react";
import { MdHighQuality } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRandom } from "react-icons/fa";

function Banner() {
  const womensImage =
    "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="min-h-[550px] container  my-5 flex  flex-col  items-center sm:flex-col md:flex-row lg:flex-row justify-center item-center  gap-5">
      {/* image content */}
      <div className="text-center mx-auto justify-center flex flex-1">
        <img
          src={womensImage}
          alt="Banner-Img"
          className="rounded-md shadow-lg sm:h-[250px] drop-shadow-xl h-[350px] "
        />
      </div>
      {/* text-contetn */}
      <div className="content justify-center flex flex-col gap-2 text-2xl font-bold flex-1">
        <h1 className="text-2xl">Winter Sale Up To 50% Off</h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          perspiciatis magni ab, quaerat praesentium molestiae eveniet minus
          recusandae eaque amet.
        </p>

        <div className="listrow flex flex-col items-start gap-2 mt-3 justify-center">
          <div className="contentrow flex flex-row gap-2 justify-center items-center flex-1">
            <MdHighQuality className="bg-[#ece7fe] rounded-full p-1 text-black me-2" />
            <p className="text-sm">Quality Products</p>
          </div>
          <div className="contentrow flex flex-row gap-2 justify-center items-center flex-1">
            <CiDeliveryTruck className="bg-[#fcead3] rounded-full p-1 text-black me-2" />
            <p className="text-sm">Fast Delivery</p>
          </div>
          <div className="contentrow flex flex-row gap-2 justify-center items-center flex-1">
            <CiCreditCard1 className="bg-[#dafce6] rounded-full p-1 text-black me-2" />
            <p className="text-sm">Easy Payment methods</p>
          </div>
          <div className="contentrow flex flex-row gap-2 justify-center items-center flex-1">
            <MdHighQuality className="bg-[#faf6bd] rounded-full p-1  text-black me-2" />
            <p className="text-sm">Get Offers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
