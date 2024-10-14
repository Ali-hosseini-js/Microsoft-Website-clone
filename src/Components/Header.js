import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { FiChevronDown, FiShoppingCart } from 'react-icons/fi';

import React from "react";
import { VscSearch } from 'react-icons/vsc';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="flex items-center p-5 m-5 max-w-[1800px] mx-auto justify-between">
            {/* for max-md screen size*/}
            <div className="flex w-full justify-between md:hidden  mx-4">
                <div className='flex justify-center items-center gap-2'>
                    <FaBars />
                    <FaSearch />
                </div>
                <div className=' pr-5 max-w-44 max-h-16'>
                    <img className='' src={logo} alt="Microsoft Logo" />
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FaShoppingCart />
                    <FaUserPlus />
                </div>


            </div>

            {/* for md screen size*/}
            <div className="md:flex hidden ">
                <div className=' pr-5 max-w-44 max-h-16'>
                    <img className='' src={logo} alt="Microsoft Logo" />
                </div>
                <ul className='flex items-center justify-between gap-4'>
                    <li className="hover:border-b-2 border-black cursor-pointer text-sm text-nowrap">Microsoft 365</li>
                    <li className="hover:border-b-2 border-black cursor-pointer text-sm">Office</li>
                    <li className="hover:border-b-2 border-black cursor-pointer text-sm">Windows</li>
                    <li className="hover:border-b-2 border-black cursor-pointer text-sm">Surface</li>
                    <li className="hover:border-b-2 border-black cursor-pointer text-sm">Xbox</li>
                    <li className="hover:border-b-2 border-black cursor-pointer text-sm">Support</li>
                </ul>
            </div>

            <div className="sign-in md:flex justify-center items-center hidden">
                <ul className='flex items-center justify-center'>
                    <li className=" flex items-center justify-center hover:border-b-2 border-black cursor-pointer pl-6 gap-2">
                        <span className=" text-sm text-nowrap">All Microsoft</span>
                        <FiChevronDown className="h-5 w-5 size={5}" />
                    </li>
                    <li className=" flex items-center justify-center hover:border-b-2 border-black cursor-pointer pl-6 gap-2">
                        <span className=" text-sm">Search</span>
                        <VscSearch className="h-4 w-4 size={4}" />
                    </li>
                    <li className=" flex items-center justify-center hover:border-b-2 border-black cursor-pointer pl-6 gap-2">
                        <span className="text-sm">Cart</span>
                        <FiShoppingCart className="h-4 w-4 size={4} " />
                    </li>
                    <li className="flex items-center justify-center cursor-pointer pl-6 gap-2">
                        <span className='text-sm text-nowrap'>Sign In</span>
                        <FaUserPlus className="h-4 w-4 size={4}" />
                    </li>
                </ul>
            </div>
        </header>
    )
}



export default Header;