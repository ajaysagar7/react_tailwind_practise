import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import SearchBar from '../SearchBar/SearchBar';
import CardCountBadage from '../CardCountBadge/CardCountBadage';
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";




function Navbar() {
    return (
        <div className='container  lg:block px-20'>
            <div className="flex flex-row justify-between item-center pt-8">
                {/* LOGO */}
                <h1 className='text-4xl font-medium' >Logo</h1>
                {/* SEARCH BAR */}
                <SearchBar />

                {/* ICONS */}
                <div className="flex gap-4">
                    <div className="icon_wrapper">

                        <IoPersonSharp />
                    </div>
                    <div className="icon_wrapper relative">

                        <MdOutlineShoppingBag />
                        <CardCountBadage value="3" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
