import React from 'react';
import bag from "../assets/bag.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
    const _firstLinks = [
        {
            name: "Home"
        },
        {
            name: "About"
        },
        {
            name: "Contact"
        },
        {
            name: "Blog"
        },
    ];

    return (
        <div className='bg-black'>
            <footer className='container grid grid-cols-1 md:place-items-start md:grid-cols-2 lg:grid-cols-4 text-white pt-20 px-10 lg:pb-40 md:pb-40 md:px-5 sm:px-1 sm:gap-10 gap-y-10 cursor-pointer' >
                {/* first links */}
                <div className="first_link col-span-2 md:col-span-1 lg:col-span-1">
                    <div className="logo flex gap-3 items-center">
                        <img src={bag} alt="Logo" className='h-10 w-10 object-cover' />
                        <h1 className='text-3xl'>Shopsy</h1>
                    </div>
                    <p className='text-white mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod molestiae dicta et distinctio cupiditate nemo, eum quisquam aliquid, architecto iusto dignissimos amet nihil, libero enim similique...</p>
                </div>

                {/* second links */}
                <div className="second_link col-span-2 md:col-span-1 lg:col-span-1">
                    <h2 className="text-xl font-bold text-white mb-2">Important Links</h2>
                    <ul className='flex-col flex gap-4 text-white'>
                        {_firstLinks.map((data, index) => (
                            <li key={index}>
                                <a href="#">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* third links */}
                <div className="third_link col-span-2 md:col-span-1 lg:col-span-1">
                    <h2 className="text-xl font-bold text-white mb-2">Links</h2>
                    <ul className='flex-col flex gap-4 text-white'>
                        {_firstLinks.map((data, index) => (
                            <li key={index}>
                                <a href="#">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* fourth links */}
                <div className="fourth_link col-span-2 md:col-span-1 lg:col-span-1">
                    <div className="icons flex gap-3 text-xl font-bold">
                        <FaInstagram />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                    <ul className='flex-col mt-3 flex gap-4 text-white'>
                        {_firstLinks.map((data, index) => (
                            <li key={index}>
                                <a href="#">{data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
